---
name: inventory-stock
description: Governs inventory control, goods receiving (PO/GRN), stock transfers between warehouses/stores, returnables packaging (crates/bottles), and minimum stock management.
---

# Inventory & Stock Management Skill

This skill governs **Inventory**, **Receiving**, **Stock Transfers**, and **Returnable Packaging** in `dc_web`.

---

## 1. Key Domain Directories & Files

- **Stock Management & Adjustments**: [pages/admin/manage_stock](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/manage_stock), [pages/admin/inventory](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/inventory)
- **Goods Receiving (PO / GRN)**: [pages/admin/receiving](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/receiving), [components/ReceivingFormCRUD.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/ReceivingFormCRUD.vue)
- **Stock Transfers**: [pages/admin/transfer](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/transfer), [components/TransferForm.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/TransferForm.vue)
- **Returnable Packaging Tracking**: [components/PackagingPosReturnDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingPosReturnDialog.vue), [components/PackagingOptionDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingOptionDialog.vue)
- **Min-Stock & Alerts**: [pages/admin/minstock](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/minstock), [components/minStockCard](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/minStockCard)

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
For agency and distributor workflows (e.g. Beerlao, soft drinks):
1. **Asset Decomposition**:
   - 1 Case of Beer = Liquid product + 1 Crate (`ລັງເບຍ`) + $N$ Glass Bottles (`ແກ້ວເປົ່າ`, e.g. 12 or 24 bottles).
   - Configured via [PackagingOptionDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingOptionDialog.vue).
2. **Retail vs Wholesale Handling**:
   - **Retail Customers (`ລູກຄ້າຍ່ອຍ`)**:
     - *With Empties Swap*: Customer brings empty bottles/cases $\rightarrow$ No deposit charged; deduct full cases from stock and increment empty stock.
     - *Without Empties Swap*: Charge unit packaging deposit (`ຄ່າມັດຈຳລັງ/ແກ້ວ`); record refundable deposit receipt.
     - *Loose Bottles with Crate (`ຂາຍຍ່ອຍໃສ່ລັງ`)*: When a customer buys loose bottles (e.g. 10 bottles) and takes 1 crate to carry them, scan/add 1 `Empty Crate (ລັງເປົ່າ)` item to the sale to track the crate deposit/debt alongside the 10 bottles.
     - *Return & Refund*: When customer returns empties later via [PackagingPosReturnDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingPosReturnDialog.vue), refund the deposit amount and restore empty packaging stock.
   - **Wholesale / Agent Customers (`ລູກຄ້າສົ່ງ / ຮ້ານຄ້າຕົວແທນ`)**:
     - Track ongoing **Packaging Debt Ledger** (`ໜີ້ບັນຈຸພັນ`):
       $$\text{Customer Empties Balance} = \text{Cases/Bottles Borrowed} - \text{Empties Returned}$$
     - Print packaging balance on delivery notes and invoices (e.g. Total Owed Crates: 50, Bottles: 600).
3. **Stock Control for Packaging**:
   - Maintain separate inventory tracking for:
     - `Full Goods` (`ເບຍເຕັມລັງ`)
     - `Empty Crates` (`ລັງເປົ່າ`)
     - `Empty Bottles` (`ແກ້ວເປົ່າ`)
     - `Damaged/Broken Glass` (`ແກ້ວແຕກ/ເສຍຫາຍ`)

### D. Stocktaking & Discrepancies
- Support physical stock count input vs. system balance for both full merchandise and empty packaging assets.
- Require reason code for shrinkage, breakage, expired items, or count adjustment.
