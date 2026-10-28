---
name: sales-commission
description: Governs the Sales Commission engine across dc_api, dc_web, and dc_pos, including commission schemes (percentage vs fixed per unit), discount impact policies (car dealership/high-ticket agency model), multi-currency conversions, order line snapshots, and audit reporting.
---

# Sales Commission Engine Skill

This skill documents the business logic, architectural standards, database schema, and operational workflows for the **Sales Commission Module** across `dc_api`, `dc_web`, and `dc_pos`.

---

## 1. Domain Context: Car Dealership & Agency Sales

In high-ticket sales environments (such as automobile agencies, heavy machinery, or real estate):
- Products have a **base fixed commission** (e.g. $1,000 USD or 20,000,000 LAK per vehicle).
- Sales reps negotiate discounts with buyers to close deals.
- **Business Rule**: Uncontrolled discounts erode agency profits. Therefore, **discounts must directly impact the salesperson's commission** (either fully or shared), ensuring sales reps balance customer closing with profit retention.

---

## 2. Commission Calculation Types

Each product defines its commission model via `product.commissionType`:

| Type | Field Value | Base Formula | Description |
| :--- | :--- | :--- | :--- |
| **Percentage (%)** | `'percentage'` | `(LineNetTotal * Rate) / 100` | Commission is automatically impacted by discounts because `LineNetTotal = (Price * Qty) - Discount`. |
| **Fixed Amount** | `'fixed'` | `(Rate * Qty) - DiscountDeduction` | Fixed cash reward per unit, with configurable discount absorption policy. |

---

## 3. Discount Impact Policies for Fixed Commission

When a product uses **Fixed Commission**, the impact of line discounts is governed by `product.commissionDiscountImpact`:

### Policy 1: Full Direct Absorption (`deduct_full`) - Recommended for Car Agencies
- The salesperson absorbs 100% of the discount given to the buyer:
  $$\text{Deduction} = \text{DiscountAmount}$$
  $$\text{Net Commission} = \max(\text{MinFloor}, (\text{FixedRate} \times \text{Qty}) - \text{DiscountAmount})$$
- *Example*: Car fixed commission = $1,000. Sales rep discounts car by $400.
  $$\text{Net Commission} = \$1,000 - \$400 = \$600$$

### Policy 2: Shared Co-Pay Absorption (`deduct_shared`)
- The agency and salesperson share the discount cost by a set percentage (e.g., 50/50):
  $$\text{Deduction} = \text{DiscountAmount} \times (\text{AbsorptionRate} / 100)$$
  $$\text{Net Commission} = \max(\text{MinFloor}, (\text{FixedRate} \times \text{Qty}) - \text{Deduction})$$
- *Example*: $1,000 commission, $400 discount, 50% absorption rate:
  $$\text{Deduction} = \$400 \times 0.50 = \$200 \implies \text{Net Commission} = \$800$$

### Policy 3: Proportional Reduction (`proportional`)
- Commission decreases in proportion to the percentage discount given off the original listing price:
  $$\text{DiscountRatio} = \frac{\text{DiscountAmount}}{\text{Price} \times \text{Qty}}$$
  $$\text{Net Commission} = (\text{FixedRate} \times \text{Qty}) \times (1 - \text{DiscountRatio})$$

### Policy 4: No Impact (`none`)
- The salesperson receives the full fixed commission regardless of discount:
  $$\text{Net Commission} = \text{FixedRate} \times \text{Qty}$$

---

## 3.1 Order-Level (Bill Discount) Allocation Rule

In POS checkouts, discounts are frequently entered at the cart/bill level (`saleHeader.discount` and `saleHeader.loyaltyDiscount`) rather than directly on individual item lines (e.g. `saleLine.discount = 0` while `saleHeader.discount = 5000`).
- The calculation engine **MUST** proportionally allocate header-level discounts across all sale lines based on each line's gross total:
  $$\text{LineAllocatedHeaderDiscount} = \frac{\text{LineGrossTotal}}{\text{OrderGrossTotal}} \times (\text{saleHeader.discount} + \text{saleHeader.loyaltyDiscount})$$
- The total effective discount for the line is:
  $$\text{EffectiveDiscount} = \text{saleLine.discount} + \text{LineAllocatedHeaderDiscount}$$
- This `EffectiveDiscount` is then fed into the discount impact policy (`deduct_full`, `deduct_shared`, `proportional`) to ensure bill discounts accurately reduce sales commission.

---

## 4. Multi-Currency Conversion Protocol

1. **Sale Currency vs Commission Currency**:
   - Vehicles may be listed and sold in **USD** or **THB**, with discounts entered in the sale currency.
   - If commission is defined in the same currency as the sale, direct subtraction applies.
   - If commission currency differs from sale currency:
     $$\text{DiscountInCommCurrency} = \frac{\text{Discount} \times \text{SaleCurrencyRate}}{\text{CommCurrencyRate}}$$
2. **Conversion to Base Currency (LAK)**:
   - All final commission amounts are converted to base currency (`commissionBaseAmount`) at checkout for company P&L, general ledger posting, and consolidated payroll reporting.

---

## 5. Database Schema Specifications

### `product` Table
```sql
ALTER TABLE `product` 
  ADD COLUMN `hasCommission` TINYINT(1) NOT NULL DEFAULT 0,
  ADD COLUMN `commissionType` ENUM('percentage', 'fixed') NOT NULL DEFAULT 'percentage',
  ADD COLUMN `commissionValue` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
  ADD COLUMN `commissionCurrencyId` INT NULL,
  ADD COLUMN `commissionDiscountImpact` ENUM('none', 'deduct_full', 'deduct_shared', 'proportional') NOT NULL DEFAULT 'deduct_full',
  ADD COLUMN `commissionDiscountRate` DECIMAL(5, 2) NOT NULL DEFAULT 100.00,
  ADD COLUMN `commissionMinFloor` DECIMAL(15, 2) NOT NULL DEFAULT 0.00;
```

### `saleLine` Table
```sql
ALTER TABLE `saleLine` 
  ADD COLUMN `hasCommission` TINYINT(1) NOT NULL DEFAULT 0,
  ADD COLUMN `commissionType` ENUM('percentage', 'fixed') NULL,
  ADD COLUMN `commissionRate` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
  ADD COLUMN `commissionGrossAmount` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
  ADD COLUMN `commissionDiscountDeduction` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
  ADD COLUMN `commissionAmount` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
  ADD COLUMN `commissionCurrencyId` INT NULL,
  ADD COLUMN `commissionBaseAmount` DECIMAL(15, 2) NOT NULL DEFAULT 0.00;
```

---

## 6. Implementation Architecture

### A. Order Placement Engine (`dc_api/src/sales/controller.js`)
- During `attachLineCommissions(lines, headerId)`:
  1. Retrieve product commission configuration.
  2. If `commissionType === 'percentage'`:
     Calculate on `lineNetTotal = (Price * Qty) - Discount`.
  3. If `commissionType === 'fixed'`:
     Calculate gross commission `commRate * qty`.
     Evaluate `commissionDiscountImpact`.
     Calculate discount deduction in commission currency.
     Clamp net commission at `commissionMinFloor`.
  4. Convert to base currency `commissionBaseAmount`.
  5. Snapshot all rate, deduction, and amount values onto the `saleLine` row.

### B. Product Setup Form (`dc_web/components/product/`)
- In [ProductForm.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/product/ProductForm.vue) and [ProductFormCreate.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/product/ProductFormCreate.vue):
  - When `commissionType === 'fixed'`, reveal:
    - **ຜົນກະທົບຈາກສ່ວນຫຼຸດ (Discount Impact)**: Dropdown (`deduct_full`, `deduct_shared`, `proportional`, `none`).
    - **ອັດຕາຫັກ (%)**: Visible when `deduct_shared` is selected (default 50% or 100%).
    - **ຄ່ານາຍໜ້າຂັ້ນຕ່ຳ (Min Floor)**: Default 0.
  - Interactive Live Calculation Preview demonstrating:
    - *Selling at Full Price*: Full commission.
    - *Selling with $500 Discount*: Net commission after discount impact.

### C. Commission Audit & Reporting (`dc_web/pages/admin/saleReportCommission/`)
- In [saleReportCommission/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/saleReportCommission/index.vue):
  - Show Gross Commission, Discount Impact Deduction, and Net Commission Payable.
  - Excel and A4 Print templates include discount impact columns for full transparency between agency and sales agents.

---

## 7. Agency Consignment & Remittance Model (KAOLAO P&L)

In high-ticket agency dealerships (e.g. car sales consignment for **KAOLAO company**):
1. **Core Problem with Traditional P&L (`saleCost/index.vue`)**:
   - In traditional retail, selling price is treated as company revenue and subtracted from vehicle cost.
   - In the consignment agency model, the vehicle selling price collected from the customer does **NOT** belong to the dealership—it must be remitted back to the principal company (KAOLAO company).
2. **Agency Commission P&L Engine (`pages/admin/saleCostCommission/index.vue`)**:
   - **Net Sales Collected (ຍອດຂາຍລົດສຸດທິທີ່ເກັບໄດ້)**:
     $$\text{NetSales} = \text{GrossSale} - (\text{Returns} + \text{CustomerDiscounts})$$
   - **Remittance Payable to KAOLAO (ຍອດຕ້ອງສົ່ງໃຫ້ ບໍລິສັດ KAOLAO)**:
     $$\text{PayableToKAOLAO} = \text{NetSales} - \text{TotalNetCommissionRetained}$$
   - **Real Agency Revenue (ລາຍຮັບດຳເນີນງານຕົວແທນ)**:
     $$\text{AgencyRevenue} = \text{TotalNetCommission} + \text{OtherIncomes (AR \& Receipts)}$$
   - **Real Agency Net Profit (ກຳໄລສຸດທິຕົວຈິງຂອງຕົວແທນ)**:
     $$\text{RealNetProfit} = \text{AgencyRevenue} - \text{AgencyOperatingExpenses (Salaries, Marketing, Showroom)}$$
3. **Dual Report Navigation**:
   - Dealerships can toggle seamlessly between `/admin/saleCost` (Traditional Retail Inventory P&L) and `/admin/saleCostCommission` (Agency Consignment Remittance & Commission P&L).
