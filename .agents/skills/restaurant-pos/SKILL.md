---
name: restaurant-pos
description: Governs Restaurant & Cafe POS operations, table management (floor plans, status transitions), order tickets, split billing, recipe ingredient deductions, modifier options inventory, waiter call requests, and kitchen/customer thermal ticket printing.
---

# Restaurant & Cafe POS Skill

This skill provides comprehensive architecture guidelines, business rules, and technical patterns for the **Restaurant & Cafe Point of Sale (POS)** module across `dc_web` and `dc_api`.

---

## 1. Key Domain Directories & Files

### Frontend (`dc_web`)
- **Main Restaurant Table Screen**: [pages/admin/cafeTable/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/cafeTable/index.vue) (Floor layout, table cards, active order panel, split billing, payment trigger, waiter calls).
- **Kitchen Display System (KDS)**: [pages/admin/restaurant/kitchen/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/restaurant/kitchen/index.vue) (Real-time KOT monitor, live prep queue, timer warnings, cook item-level checking, sound chime notifications, fullscreen support, and kitchen/bar station routing).
- **Restaurant POS Sales Report**: [pages/admin/restaurant/ordersFromPos/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/restaurant/ordersFromPos/index.vue) (Mirrors minimart POS orders report with rich KPI cards, Gross/Discount/Net summaries, multi-currency breakdown, table/status filters, Excel export, and thermal/A4 receipt printing).
- **Alternative / POS Table Views**: [pages/admin/pos/table/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/pos/table/index.vue).
- **Cafe Dialogs**: [components/CAFE](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CAFE)
  - [paymentDialogFront/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CAFE/paymentDialogFront/index.vue) (Multi-currency cash, QR code, and card payment modal).
  - [printBarDialog/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CAFE/printBarDialog/index.vue) (Bar / beverage station order ticket printing).
  - [printdialog/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CAFE/printdialog/index.vue) (Kitchen station & customer bill thermal printing).
  - [customerDialog/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CAFE/customerDialog/index.vue) (Walk-in vs assigned member customer modal).
- **Ticket Cancellation**: [components/CancelTicketForm.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/CancelTicketForm.vue) (Void/cancel reason capture, releasing stock cards).
- **Customer Dual Screen**: [composables/pos/useCustomerScreen.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/composables/pos/useCustomerScreen.js), [layouts/pos.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/layouts/pos.vue).

### Backend (`dc_api`)
- **Navigation Menu Seeder**: [seed_restaurant_pos_menus.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/seed_restaurant_pos_menus.js) (Seeds `REST_POS` menu header and 10 related lines attached to all user groups, including Kitchen Display and Restaurant POS Orders).
- **Table Controller**: [src/pos/table/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/pos/table/controller.js) (Table floor retrieval, floor plans, status updates).
- **Ticket Controller**: [src/pos/ticket/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/pos/ticket/controller.js) (Ticket CRUD, line items, recipe ingredient allocation, option card creation, split payment handling, safe rollbacks).
- **Database Models**:
  - `table`: id, number, name, capacity, status (`available`, `occupied`, `cleaning`), currentOrderId, timeOccupied, tableGroupId.
  - `ticket`: id, ticketNumber, tableId, status (`pending`, `preparing`, `ready`, `served`, `paid`, `cancel`, `void`), paymentStatus (`pending`, `paid`, `cancel`, `void`), subtotal, tax, total, paymentId, createUserId.
  - `ticketLine`: id, ticketId, productId, quantity, unitPrice, totalPrice, colorId, sizeId, selectedOptions, specialInstructions, status.
  - `recipe`: id, productId, ingredientId, quantity, unitId.
  - `card`: Stock cards tracking unit cost, batch/serial, and inventory deduction.
  - `salePayment`: Multi-method split payment records (`paymentId`, `amount`, `referenceNo`).

---

## 2. Table Lifecycle & Status Transitions

### Table Status States
1. **`available` (Free / Green)**: Table is open for new guests. `currentOrderId` is `null`.
2. **`occupied` (Active Dining / Red/Orange)**: Guests are seated with an active order ticket. `currentOrderId` points to the active pending ticket.
3. **`cleaning` (Bus / Yellow)**: Order has been completely paid. Staff needs to clean and sanitize before marking `available`.

### State Transition Rules
- **Opening a Table / Placing Order**: Table status transitions to `occupied`, `currentOrderId = ticket.id`, and `timeOccupied = new Date()`.
- **Serving Food**: Does **NOT** change table status to `cleaning`. Serving updates ticket lines or ticket status to `served`, but the table **remains `occupied`** until checkout.
- **Full Payment**: When the ticket's `paymentStatus` becomes `'paid'`, the table status transitions to `'cleaning'` and `currentOrderId = null`.
- **Cancel / Void Ticket**: If an order is cancelled or voided, release all associated stock cards (`releaseCardsForTicket`), reset table to `'available'`, and clear `currentOrderId`.
- **Pagination Safety**: When retrieving tables for floor display (`getAllTables` or `fetchTables`), always request `limit: 100` (or higher) to prevent floor plan tables from being cut off.

---

## 3. Split Bill Operations

In restaurant dining, tables frequently pay separately for specific food or drink items while remaining guests continue dining.

### Split Payment Execution Protocol
1. **Fetch Original Ticket**: Read complete active ticket lines and tax metadata from `api/ticket/:id`.
2. **Partition Ticket Lines**:
   - `splitLines`: Items selected with `splitQty > 0`.
   - `remainingLines`: Items with remaining quantities (`quantity - splitQty > 0`).
   - **Crucial**: Always retain `productId`, `unitPrice`, `taxId`, `taxRate`, `taxType`, `colorId`, `sizeId`, `selectedOptions`, and `specialInstructions` across both sets of lines.
3. **Create Split Paid Ticket**:
   - `POST /api/ticket`
   - Payload: `status: 'paid'`, `paymentStatus: 'paid'`, `paymentId: selectedMethod.id`, `tableId: selectedTable.id`, `ticketLines: splitLines`.
   - Backend automatically creates `SalePayment` rows for financial tracking without marking table as available/cleaning.
4. **Update Original Ticket (If Items Remain)**:
   - `PUT /api/ticket/:id`
   - Payload: `status: 'pending'`, `paymentStatus: 'pending'`, `ticketLines: remainingLines`.
   - Table **MUST REMAIN `occupied`** with `currentOrderId = originalTicket.id`.
5. **Settle Original Ticket (If No Items Remain)**:
   - When all items were split and paid, mark original ticket as `'paid'` and transition table to `'cleaning'`.
6. **Frontend State Guard**:
   - Guard `this.actionLoading = true` during split submission.
   - Do NOT reset `this.isSplitPayment = false` until `finally` block completes.
   - Re-select and refresh table with `{ ...refreshedTable, status: 'occupied', currentOrderId: ticketId }` and reload active ticket items.

---

## 4. Recipe & Inventory Deduction Patterns

Restaurant items often involve raw ingredients, customized modifiers, or instant beverage prep:

1. **Recipe Ingredients (`recipe` table)**:
   - If a product has recipe records, inventory deductions target `recipe.ingredientId` according to `recipe.quantity * lineQuantity`.
   - If ingredient `validateStockOnSale = true`, reserve stock cards from `card` table where `productId = ingredient.id AND ticketLineId IS NULL AND card_isused = 0`.
   - If non-stock, generate fresh usage cards (`card_type_code: 10010, card_isused: 1`).
2. **Modifier Options & Add-ons (`selectedOptions`)**:
   - When line items contain modifiers with `ingredientProductId` (e.g. extra cheese, milk syrup), reserve stock or create usage cards for the modifier product.
   - Use correct `Card` schema fields:
     - Required: `cost`, `costLCY`, `exchangeRate`, `currencyId`, `productId`, `ticketLineId`, `locationId`, `locking_session_id`.
     - **Forbidden**: Do not use non-existent columns (`card_password`, `price`, `cost_lcy`).
3. **Stock Count Aggregation**:
   - After reserving or generating cards, invoke `productService.updateProductCountGroup(productIds, transaction)` to maintain live inventory balances.

---

## 5. Transaction Safety & Error Handling

- **Sequelize Finished Transaction Rule**:
  - In `dc_api`, never call naked `await transaction.rollback()` inside catch blocks without checking if Sequelize already rolled back the transaction.
  - Always use `safeRollback`:
    ```javascript
    const safeRollback = async (t) => {
        if (t && !t.finished) {
            try {
                await t.rollback();
            } catch (err) {
                console.error('Error during safeRollback:', err.message);
            }
        }
    };
    ```
  - Always log `error.name`, `error.message`, `error.original`, and `error.parent` **before** rolling back so root database errors (e.g. lock wait timeouts or schema mismatches) are visible in console logs.

---

## 6. Printing & Kitchen Dispatch

1. **Station Routing**:
   - **Kitchen Printer**: Hot kitchen / cooked food items routed to kitchen ESC/POS printer.
   - **Bar Printer**: Drink, coffee, and dessert lines routed via `printBarDialog`.
   - **Customer Receipt**: Final checkout bill or split payment receipt.
2. **Split Bill Print**:
   - When a split payment completes, immediately bind `createdSplitTicket` to `selectedTicket` and display `showCustomerPrint` preview to print the receipt for the paying customer.
3. **Ticket Line Normalization**:
   - When formatting ticket lines for receipt printing or table sidebar display (`mappedTicketLines`), always ensure `product: { pro_name }`, `pro_name`, and `unitPrice` are attached to avoid `TypeError: Cannot read properties of undefined (reading 'pro_name')`.
   - In Vue templates, always use null-safe access: `item.product?.pro_name || item.pro_name`.
