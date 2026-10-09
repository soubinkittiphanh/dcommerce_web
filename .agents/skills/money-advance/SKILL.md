---
name: money-advance
description: Governs Money Advance (MA) requests, approval workflows, settlement calculations, bank reconciliations, cancellation/restoration, and MA receipt/statement printing.
---

# Money Advance (MA) & Settlement Skill

This skill governs the **Money Advance (MA)** and **Settlement** workflows in `dc_web`.

---

## 1. Key Domain Directories & Files

- **Settlement Dialog & Form**: [components/MA/settlementDialog/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/MA/settlementDialog/index.vue)
- **Settlement Views & Management**: [pages/admin/moneyAdvanceSettlement/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/moneyAdvanceSettlement/index.vue)
- **Money Advance Requests & Statements**:
  - [pages/admin/moneyAdvance](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/moneyAdvance)
  - [pages/admin/moneyAdvanceStatement](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/moneyAdvanceStatement)
  - [pages/admin/moneyAdvanceDashboard](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/moneyAdvanceDashboard)
- **Print Templates**: [common/moneyAdvancePaymentPrintTemplate.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/common/moneyAdvancePaymentPrintTemplate.js)
- **Reports**: [pages/admin/report/MA/payment/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/report/MA/payment/index.vue)

---

## 2. Core Business Logic & Workflows

### A. Lifecycle of Money Advance
1. `Created / Pending Approval` (`ລໍຖ້າອະນຸມັດ`)
2. `Approved / Disbursed` (`ອະນຸມັດແລ້ວ / ຈ່າຍເງິນແລ້ວ`)
3. `Partially Settled` (`ຊຳລະບາງສ່ວນ`)
4. `Fully Settled` (`ຊຳລະຄົບຖ້ວນ`)
5. `Cancelled / Void` (`ຍົກເລີກ`)

### B. Settlement Calculation Rules
- **Advance Amount**: Total advance issued to an employee or ministry.
- **Spent Amount**: Incurred valid expense supported by receipts.
- **Balance Calculation**:
  - `Refund to Company` = Advance Amount - Spent Amount (when Spent < Advance)
  - `Company Reimburses Employee` = Spent Amount - Advance Amount (when Spent > Advance)
  - `Equal Settlement` = Advance Amount == Spent Amount (Balance = 0)
- Multi-currency conversions must maintain the exchange rate captured at the transaction date.

### C. Cancel and Restore Flow
- When cancelling a settlement voucher, it should never be deleted outright; instead, mark status as `CANCELLED` / `VOID` to preserve the financial audit trail.
- Form controls must be disabled for cancelled transactions with a prominent banner indicator, offering an explicit "Restore" action if permitted.

### D. Printing & Export
- Support both 80mm thermal receipt printing and A4/A5 voucher templates via [moneyAdvancePaymentPrintTemplate.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/common/moneyAdvancePaymentPrintTemplate.js).
- Include signature lines: Advance Requester (`ຜູ້ຂໍເບີກ`), Approver (`ຜູ້ອະນຸມັດ`), Cashier/Accountant (`ຜູ້ຮັບເງິນ/ຜູ້ຈ່າຍ`).

### E. Duplicate Payment & Settlement Validation & Override Logging
- **Scope**: Matches transactions having the same `amount`, `currencyId`, and `ministryId` within the **current month and previous month** (calculated dynamically based on `bookingDate`).
- **Validation**:
  - In [components/MA/paymentDialog/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/MA/paymentDialog/index.vue), queries `/api/money-advances/check-duplicate` and alerts the user with an inline badge and SweetAlert modal displaying conflicting payment vouchers.
  - In [components/MA/settlementDialog/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/MA/settlementDialog/index.vue), queries `/api/settlements/check-duplicate` and alerts the user with an inline badge and SweetAlert modal displaying conflicting settlement records.
- **Audit & Override**: If the user confirms to proceed despite the warning:
  - For payments: The backend logs the transaction, matched duplicate IDs, timestamp, and user details into the `MoneyAdvanceOverrideLog` table.
  - For settlements: The backend logs the transaction, matched duplicate IDs, timestamp, and user details into the `MoneySettlementOverrideLog` table.


---

## 3. UI Guidelines
- Always display formatted voucher numbers (e.g. `V-2026-000123`).
- Provide instant input validation before submitting settlement transactions.
- Keep the search/browse advance modal responsive and quick to filter by Ministry, Employee, Date, or Reference No.

