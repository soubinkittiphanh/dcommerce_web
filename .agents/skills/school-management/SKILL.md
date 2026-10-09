---
name: school-management
description: Handles school operations, student enrollment, fee structures, tuition invoicing, student wallets, class/shift scheduling, and school financial reporting.
---

# School & Student Management Skill

This skill provides guidelines and domain rules for developing and maintaining the **School Management** module in `dc_web`.

---

## 1. Key Domain Directories & Files

- **Class & Scheduling**: [pages/admin/school/class.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/school/class.vue), [pages/admin/school/shift.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/school/shift.vue)
- **Fee Structures**: [pages/admin/school/fee-structure.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/school/fee-structure.vue)
- **Tuition Invoices & Billing**: [pages/admin/school/invoice.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/school/invoice.vue)
- **Student Profiles & CRUD**: [pages/admin/student/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/student/index.vue), [components/StudentFormCRUD.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/StudentFormCRUD.vue)
- **Student Digital Wallet**: [pages/admin/student/wallet.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/student/wallet.vue)
- **School Reports**: [pages/admin/school/report.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/school/report.vue)

---

## 2. Core Business Logic & Workflows

### A. Student Enrollment & Profile Management
- Students have standard identifiers (Student Code/ID, Full Name in Lao and English, Date of Birth, Gender, Parent/Guardian Contact, Assigned Class & Shift).
- Validation: Ensure duplicate student codes or National ID entries are rejected.
- Form pattern: Use [StudentFormCRUD.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/StudentFormCRUD.vue) with modal dialog lifecycle (`v-dialog`).

### B. Fee Structure & Invoicing
- **Fee Structure**: Supports recurring tuition (monthly, termly, yearly), registration fees, exam fees, and uniform/book fees.
- **Invoice Lifecycle**:
  1. `Draft` / `Issued`
  2. `Paid` (Full payment)
  3. `Partial` (Partial payment recorded)
  4. `Overdue` / `Cancelled`
- When generating invoices, calculate base fee minus applicable student scholarship/discounts, plus outstanding past balances.

### C. Student Wallet Operations
- Students have a digital wallet balance for cafeteria purchases, uniform fees, or micro-transactions.
- **Wallet In (Top-Up)**: Record transaction type `TOPUP`, payment method (Cash, Bank Transfer, QR), date, and cashier/operator ID.
- **Wallet Out (Deduction)**: Deduct on tuition settlement or POS scan, verifying balance is sufficient.
- Maintain immutable ledger transactions (`wallet_transactions`).

### D. Shifts & Classroom Allocation
- Shifts typically divide into: Morning (`ເຊົ້າ`), Afternoon (`ບ່າຍ`), Evening (`ຄ່ຳ`), Weekend (`ເສົາ-ອາທິດ`).
- Validate room capacity and schedule overlap when assigning students to classrooms.

---

## 3. UI & Component Best Practices

- Use Vuetify data tables (`v-data-table`) with server-side pagination for student lists and invoices.
- Date filters must support Lao academic calendar months and standard `moment.js` range formats (`YYYY-MM-DD`).
- Display student photo previews using standard responsive avatar components with fallback placeholder icons.
