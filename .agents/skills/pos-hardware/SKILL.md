---
name: pos-hardware
description: Guides development for POS checkout terminals, barcode scanner input handling, ESC/POS thermal printing, cash drawers, NFC card payments, and Electron hardware integration.
---

# Point of Sale (POS) & Hardware Skill

This skill provides guidelines and patterns for the **POS Checkout**, **Receipt Printing**, and **Hardware Integrations** in `dc_web`.

---

## 1. Key Domain Directories & Files

- **POS Screens**: [pages/pos](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/pos), [components/pos](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/pos)
- **Cafe & Restaurant POS**: [components/CafePOSScreen](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CafePOSScreen)
- **Printing & ESC/POS**: `@tillpos/xml-escpos-helper`, [components/enhanced-invoice-printer.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/enhanced-invoice-printer.vue)
- **NFC Reader & Payment**: `nfc-pcsc`, [components/pos/NfcPaymentDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/pos/NfcPaymentDialog.vue)
- **Electron Main & Preload**: [main.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/main.js), [preload.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/preload.js)

---

## 2. Core POS Logic & Best Practices

### A. Barcode Scanner Handling
- Scanners emit rapid keyboard strokes followed by `Enter`.
- Implement scanner debouncing / rapid input buffering to avoid duplicate item additions:
  - Keep a scanning buffer with a 20-50ms threshold.
  - When scanning an existing item in the cart, increment quantity rather than inserting a duplicate row (unless specific unit/price tier specifies otherwise).

### B. ESC/POS & Thermal Printing
- Standard paper sizes: 80mm (48 characters per line) and 58mm (32 characters per line).
- Support Lao font rendering for thermal printers (using XML template helper or image/canvas rasterization when printer hardware lacks built-in Lao unicode glyphs).
- Direct print command sequence: Cut paper (`GS V`), Open Cash Drawer (`ESC p`).

### C. NFC Card Reader Integration
- In Electron runtime, listen for NFC card detection events over IPC.
- Validate card UID against member/student/staff records.
- Prompt for confirmation / PIN if enabled for high-value wallet deductions.

### D. Cart State & Payment Calculations
- Support split payments (e.g. Cash + OnePay / BCEL QR + Member Card).
- Auto-calculate change returned based on tender amount in different currencies (LAK, THB, USD).
- Apply promotions, member discounts, and VAT/taxes at line-item or invoice level.

### E. Beverage Returnables & Empties Checkout (Beerlao Agency Flow)
- When returnable items (cases/bottles of beer) are scanned into the POS cart:
  - Offer quick toggle for **"With Empties Return"** (`ແລກປ່ຽນລັງ/ແກ້ວ`) vs. **"Deposit Required"** (`ຄິດໄລ່ຄ່າມັດຈຳ`).
  - For wholesale customers, allow recording packaging debt to their account instead of instant deposit collection.
  - Trigger [PackagingPosReturnDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/PackagingPosReturnDialog.vue) for standalone return sessions or customer deposit refunds.
