---
name: inventory-stock
description: Governs inventory control, goods receiving (PO/GRN), stock transfers between warehouses/stores, returnables packaging (crates/bottles), and minimum stock management.
---

# Inventory & Stock Management Skill

This skill governs **Inventory**, **Receiving**, **Stock Transfers**, and **Returnable Packaging** in `dc_web`.

---

## 1. Key Domain Directories & Files

### Frontend (`dc_web`)
- **Stock Management & Adjustments**: [pages/admin/manage_stock](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/manage_stock), [pages/admin/inventory](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/inventory)
- **Goods Receiving (PO / GRN)**: [pages/admin/receiving](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/receiving), [components/ReceivingFormCRUD.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/ReceivingFormCRUD.vue)
- **Stock Transfers**: [pages/admin/transfer](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/transfer), [components/TransferForm.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/TransferForm.vue)
- **POS Checkout & Packaging Dispatch**: [layouts/pos.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/layouts/pos.vue) (`processPackagingSaleMovement`)
- **Returnable Packaging UI**: [components/PackagingPosReturnDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingPosReturnDialog.vue), [components/PackagingOptionDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingOptionDialog.vue)
- **Packaging Reports & Timeline**: [pages/admin/report/packagingOwnerSummary.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/report/packagingOwnerSummary.vue) (Tab 1: Full Cases, Tab 2: Empty Assets, Tab 3: Customer Packaging Movement Timeline)
- **Min-Stock & Alerts**: [pages/admin/minstock](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/minstock), [components/minStockCard](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/minStockCard)

### Backend (`dc_api`)
- **Packaging Core Service**: [src/packaging/service.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/packaging/service.js) (`processPOSSale`, `recordCustomerPackaging`, supplier ledgers, damage logging)
- **Customer Packaging Ledger Model**: [src/packaging/customerPackagingLedger/model.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/packaging/customerPackagingLedger/model.js) (`customer_packaging_ledger` table)
- **Packaging BOM Mapping Model**: [src/packaging/models/productPackaging.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/packaging/models/productPackaging.js) (`product_packaging` table)
- **Sale Line Packaging Movement**: [src/sales/line/service.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/sales/line/service.js) (`handleLinePackagingMovement`)
- **Router & Controller**: [src/packaging/router.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/packaging/router.js), [src/packaging/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/packaging/controller.js)

---

## 2. Core Business Logic & Workflows

### A. Goods Receiving (GRN / PO)
- Match received items against Purchase Orders (quantity, unit cost, expiration date, batch/lot number).
- Update stock on-hand (`stock_qty`) and adjust weighted average cost / latest purchase cost.
- Record supplier invoice number and payment terms.

### B. Stock Transfers
- Status lifecycle: `Pending Transfer` -> `In Transit` -> `Received & Confirmed` -> `Discrepancy / Cancelled`.
- Deduct origin location inventory only after dispatch; increment destination location inventory upon confirmation.

### C. Returnable Packaging & Empties Tracking (Beerlao Agency / Beverage Distribution)
For agency and beverage distributor workflows (e.g., Beerlao, Pepsi, bottled beverages):
1. **Asset Decomposition (BOM Mapping)**:
   - 1 Finished Case = Liquid Goods + 1 Crate (`ລັງເບຍ`) + $N$ Glass Bottles (`ແກ້ວເປົ່າ`, e.g., 12 or 24 bottles).
   - Configured in [PackagingOptionDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingOptionDialog.vue) and stored in `product_packaging` table (`productId` -> `packagingProductId`, `quantityPerUnit`).
2. **Retail vs Wholesale Handling**:
   - **Retail Customers (`ລູກຄ້າຍ່ອຍ`)**:
     - *With Empties Swap*: Customer brings empty bottles/crates $\rightarrow$ No packaging deposit is charged; finished cases are deducted from stock and empty packaging stock is incremented.
     - *Without Empties Swap*: Charge unit packaging deposit (`ຄ່າມັດຈຳລັງ/ແກ້ວ`); deposit fee is recorded and customer packaging debt increments.
     - *Loose Bottles with Crate (`ຂາຍຍ່ອຍໃສ່ລັງ`)*: When a customer buys loose bottles (e.g., 10 bottles) and takes 1 crate to carry them, cashier scans/adds 1 `Empty Crate (ລັງເປົ່າ)` item to the sale cart to record the crate deposit/debt alongside the 10 bottles.
     - *Return & Refund*: When customer returns empties later via [PackagingPosReturnDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingPosReturnDialog.vue), refund the deposit amount and restore empty packaging inventory.
   - **Wholesale / Agent Customers (`ລູກຄ້າສົ່ງ / ຮ້ານຄ້າຕົວແທນ`)**:
     - Track ongoing **Packaging Debt Ledger** (`ໜີ້ບັນຈຸພັນ`):
       $$\text{Customer Empties Balance} = \text{Cases/Bottles Borrowed} - \text{Empties Returned}$$
     - Print running packaging balance on delivery notes, receipts, and invoices (e.g., Total Owed Crates: 50, Bottles: 600).
3. **Stock Control for Packaging**:
   - Maintain separate inventory tracking for:
     - `Full Goods` (`ເບຍເຕັມລັງ`)
     - `Empty Crates` (`ລັງເປົ່າ`)
     - `Empty Bottles` (`ແກ້ວເປົ່າ`)
     - `Damaged/Broken Glass` (`ແກ້ວແຕກ/ເສຍຫາຍ`)

### D. Stocktaking & Discrepancies
- Support physical stock count input vs. system balance for both full merchandise and empty packaging assets.
- Require reason code for shrinkage, breakage, expired items, or count adjustment.

---

## 3. POS Packaging Saling Logic & Dual-Posting Prevention

When a sale transaction completes at the POS, packaging movements are posted into `customer_packaging_ledger`. To prevent duplicate entries and incorrect debt accumulation, the system enforces strict separation of responsibilities across two distinct pathways:

```
POS Cart Checkout
  │
  ├── 1. Direct Packaging Lines in Cart (Empty Crates / Bottles / Returns / Swaps)
  │      └── Backend Auto-Handler: handleLinePackagingMovement() in src/sales/line/service.js
  │          ├── Normal Sale / Deposit: DELIVERED_OUT -> "POS Sale #... - Packaging Sold/Delivered Out" (+qty)
  │          └── Return / Swap:         RETURNED_IN   -> "POS Sale #... - Packaging Returned/Bought Back" (-qty)
  │
  └── 2. Finished Case Goods BOM Decomposition (e.g. Beerlao Case -> Crate + Bottles)
         └── Frontend Post-Hook: processPackagingSaleMovement() in layouts/pos.vue
             ├── Calculates Net BOM Requirements = (BOM Qty) - (Explicit Packaging Lines in Cart)
             └── Calls /api/packaging/pos/sale ONLY if Net BOM Qty > 0
                 └── Backend Service: processPOSSale() in src/packaging/service.js
                     └── Records: DELIVERED_OUT -> "POS Sale #... - Packaging Borrowed / Delivered (POS)" (+qty)
```

### The 3 Golden Rules to Prevent Double-Posting Defect

1. **Rule 1: Never Send Direct Packaging Lines to `/api/packaging/pos/sale`**:
   - Direct packaging lines (`isPackagingItem`, `isPackagingAsset`, `packagingAction === 'SOLD'/'RETURNED'`, `isReturn: true`) are already recorded by the backend line handler `handleLinePackagingMovement()`.
   - In [layouts/pos.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/layouts/pos.vue), `processPackagingSaleMovement()` filters out direct packaging items and maps their quantities into `explicitSoldQtyByPkgId`. They are **strictly excluded** from `packagingDeliveries`.

2. **Rule 2: Net BOM Requirements Against 1:1 Packaging Swap Lines**:
   - When a sale cart contains both finished case goods AND packaging return/swap lines (e.g. 1 case of beer + 1 crate return + 12 bottles return), the required BOM deliveries must be offset:
     $$\text{Net Deliverable Qty} = \max(0, \text{BOM Required Qty} - \text{Explicit Packaging Line Qty})$$
   - If $\text{Net Deliverable Qty} = 0$, no `DELIVERED_OUT` request is sent to `/api/packaging/pos/sale`. This guarantees that customer debt remains zero on an even 1:1 swap.

3. **Rule 3: Multi-Layer Backend Idempotency**:
   - In [src/packaging/service.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/packaging/service.js) (`processPOSSale`): Before inserting a `customerPackagingLedger` row, verify whether a `DELIVERED_OUT` entry already exists for `(saleHeaderId, packagingProductId)`. If present, skip duplicate creation.
   - In [src/sales/line/service.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/sales/line/service.js) (`handleLinePackagingMovement`): Query `customerPackagingLedger` to ensure no entry for `(saleHeaderId, packagingProductId, transactionType)` was already recorded.

---

## 4. Packaging Ledger Mathematics & Sequential Running Balance

The table `customer_packaging_ledger` tracks cumulative packaging debt per customer and asset type:

| Field | Meaning | Impact on Debt Balance |
| :--- | :--- | :--- |
| `transactionType = 'DELIVERED_OUT'` | Customer borrowed packaging / took crates on deposit | Adds to debt: $+\text{borrowedQty}$ |
| `transactionType = 'RETURNED_IN'` | Customer returned empties / brought back crates | Reduces debt: $-\text{returnedQty}$ |
| `balanceAfter` | Running total of unreturned packaging assets owed by customer | Cumulative sum of chronological deltas |

### Running Balance Invariant
For any customer (`clientId`) and packaging item (`packagingProductId`):
$$\text{balanceAfter}_i = \text{balanceAfter}_{i-1} + (\text{borrowedQty}_i - \text{returnedQty}_i)$$

> [!WARNING]
> If any ledger entry is deleted, voided, or manually corrected, the entire chronological sequence (`ORDER BY transactionDate ASC, id ASC`) for that `(clientId, packagingProductId)` must be sequentially recomputed to restore mathematical consistency in reports.

---

## 5. Operational Verification Runbook

To verify POS packaging checkout correctness:

| Scenario | Cart Action | Expected Ledger Entries in Timeline |
| :--- | :--- | :--- |
| **Case Sale without Swap** | 1 Case Beerlao | 1 record: `POS Sale #... - Packaging Borrowed / Delivered (POS)` (+1 crate, +12/24 bottles) |
| **Case Sale with 1:1 Swap** | 1 Case Beerlao + 1 Crate Return + 12 Bottles Return | Return entries logged (`-1 crate`, `-12 bottles`), BOM netted to 0 (no delivery logged). Net customer debt = `0`. |
| **Direct Packaging Sale / Deposit** | 1 Crate (SKU: empty crate asset) | 1 record: `POS Sale #... - Packaging Sold/Delivered Out` (+1 crate). No duplicate `Borrowed / Delivered (POS)` record. |
| **Packaging Return** | Return via [PackagingPosReturnDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingPosReturnDialog.vue) | 1 record: `Packaging Returned/Bought Back` (-qty). Customer debt balance is reduced. |

Audit logs and verify balances in [pages/admin/report/packagingOwnerSummary.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/report/packagingOwnerSummary.vue) under **Tab 3: Customer Packaging Movement Timeline** (`ປະຫວັດການເຄື່ອນໄຫວລູກຄ້າ`).
