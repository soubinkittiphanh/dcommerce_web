---
name: car-parking
description: Governs the Car Parking Management module across dc_api, dc_web, and dc_pos, including vehicle entry/exit, time-of-day (day vs night) pricing rules, slot availability, monthly passes, QR ticketing, and financial reporting.
---

# Car Parking Management Skill

This skill provides the architectural specification, database schema, business rules, API contracts, and testing procedures for the **Car Parking Management Module** across `dc_api` (Node.js/Sequelize), `dc_web` (Nuxt 2/Vuetify), and `dc_pos` (Flutter/GetX).

---

## 1. Domain Directories & Key Files

### Backend (`dc_api`)
- **SQL Migration**: [20261025_create_parking_tables.sql](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/20261025_create_parking_tables.sql)
- **Data & Menu Seeders**:
  - [seed_parking_data.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/seed_parking_data.js) (Initial zones, 42 slots, Day/Night pricing for Car, Motorbike & Truck, demo monthly pass)
  - [seed_parking_menus.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/seed_parking_menus.js) (Seeds `PARKING` navigation header and 6 lines in Lao into `menuHeader` and `menuLine` for `dc_web`)
- **Sequelize Models**: [src/parking/models/](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/models)
  - `zone.js`, `slot.js`, `vehicle.js`, `pricingRule.js`, `monthlyPass.js`, `ticket.js`, `payment.js`
  - Registered and associated in [src/models/index.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/models/index.js)
- **Services**:
  - [src/parking/feeService.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/feeService.js) (Pure fee calculation: grace period, day/night period hours, hourly rounding, daily cap, lost ticket)
  - [src/parking/slotService.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/slotService.js) (Plate normalization, transactional slot locking `SELECT ... FOR UPDATE`, slot release)
  - [src/parking/service.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/service.js) (Orchestrator for entry, exit, payment, tickets, monthly passes, reports)
- **Routes & Controllers**:
  - [src/parking/router.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/router.js) (Mounted at `/api/parking`)
  - [src/parking/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/controller.js)
  - [src/parking/validation.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/parking/validation.js)
- **Automated Unit Tests**: [test_parking_services.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/test_parking_services.js)

### Web Admin (`dc_web`)
- **API Service**: [services/parkingApiService.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/services/parkingApiService.js)
- **Vuex Store Module**: [store/parking.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/store/parking.js)
- **Admin Pages** (`/admin/parking/...`):
  - [pages/admin/parking/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/parking/index.vue) (Dashboard: KPI cards, currently parked vehicles, quick entry/exit modals)
  - [pages/admin/parking/zones/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/parking/zones/index.vue) (Visual zones & interactive slot grid management)
  - [pages/admin/parking/pricing/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/parking/pricing/index.vue) (Day/Night pricing rules by vehicle type)
  - [pages/admin/parking/passes/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/parking/passes/index.vue) (Monthly passes and subscription renewals)
  - [pages/admin/parking/tickets/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/parking/tickets/index.vue) (Ticket history, transaction logs, reprint)
  - [pages/admin/parking/reports/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/parking/reports/index.vue) (Daily revenue, peak hours distribution, Excel export)
- **Components**:
  - [components/parking/SlotCard.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/parking/SlotCard.vue)
  - [components/parking/ParkingReceiptDialog.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/parking/ParkingReceiptDialog.vue)

### Mobile App (`dc_pos`)
- **Feature Screens**:
  - [lib/screens/parking/parking_home_screen.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/screens/parking/parking_home_screen.dart) (Gate attendant dashboard, live slot grid, check-in FAB)
  - [lib/screens/parking/vehicle_entry_screen.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/screens/parking/vehicle_entry_screen.dart) (Fast vehicle check-in)
  - [lib/screens/parking/vehicle_exit_screen.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/screens/parking/vehicle_exit_screen.dart) (Checkout payment with dynamic fee calculation)
  - [lib/screens/parking/qr_scanner_screen.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/screens/parking/qr_scanner_screen.dart) (Mobile barcode camera scanner)
  - [lib/screens/parking/parking_ticket_history_screen.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/screens/parking/parking_ticket_history_screen.dart) (Ticket history & reprint)
  - [lib/screens/parking/ticket_receipt_dialog.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/screens/parking/ticket_receipt_dialog.dart) (Thermal ticket / receipt modal with QR code & Share)
- **Service & State**:
  - [lib/service/parking_service.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/service/parking_service.dart)
  - [lib/getxcontroller/parking_controller.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/getxcontroller/parking_controller.dart)
- **Navigation Integration**: [lib/widgets/main_drawer.dart](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_pos/lib/widgets/main_drawer.dart)

---

## 2. Database Schema & Tables

1. `parking_zones`: `id`, `code`, `name`, `floor`, `description`, `isActive`, `createdById`.
2. `parking_slots`: `id`, `zoneId`, `slotNumber`, `slotType` (`car`, `motorbike`, `vip`, `disabled`, `truck`), `status` (`available`, `occupied`, `reserved`, `out_of_service`), `currentTicketId`.
3. `parking_vehicles`: `id`, `plateNumber` (Unique, Normalized), `vehicleType`, `driverName`, `driverPhone`, `brand`, `color`.
4. `parking_pricing_rules`: `id`, `name`, `vehicleType`, `gracePeriodMinutes`, `dayStartTime`, `dayEndTime`, `dayHourlyRate`, `nightHourlyRate`, `nightPricingType` (`HOURLY`, `FLAT`), `dailyCap`, `lostTicketFee`, `isDefault`, `isActive`.
5. `parking_monthly_passes`: `id`, `passNumber`, `plateNumber`, `vehicleType`, `customerName`, `customerPhone`, `startDate`, `endDate`, `feeAmount`, `paymentStatus`, `status` (`active`, `expired`, `suspended`, `cancelled`), `slotId`.
6. `parking_tickets`: `id`, `ticketNumber`, `barcode`, `vehicleId`, `plateNumber`, `vehicleType`, `zoneId`, `slotId`, `entryTime`, `exitTime`, `durationMinutes`, `status` (`active`, `paid`, `completed`, `lost`, `cancelled`), `pricingRuleId`, `monthlyPassId`, `isMonthlyPass`, `isLostTicket`, `calculatedFee`, `paidFee`, `penaltyFee`, `entryUserId`, `exitUserId`.
7. `parking_payments`: `id`, `paymentNumber`, `ticketId`, `amount`, `paymentMethod` (`CASH`, `TRANSFER`, `QR`, `CARD`, `FREE_PASS`), `paymentStatus`, `referenceNo`, `paidAt`, `cashierId`.

---

## 3. Business Rules & Fee Calculation

1. **Plate Normalization**: Always invoke `slotService.normalizePlateNumber` before storing or matching plates (trimmed, uppercase, single spaces).
2. **Double Entry Prevention**: A vehicle cannot check in if a ticket with the same plate is already in `status = 'active'`.
3. **Grace Period**: Stays within `gracePeriodMinutes` (e.g. 15 mins) incur 0 LAK fee.
4. **Rounding**: Stays exceeding grace period round up to the next full hour (e.g. 1 hr 5 min = 2 hours).
5. **Day vs. Night Windows**:
   - Each hour block is checked against local Vientiane time (`Asia/Vientiane` +07:00).
   - Day hours are charged at `dayHourlyRate` (e.g. 5,000 LAK/hr).
   - Night hours are charged at `nightHourlyRate` (e.g. 10,000 LAK/hr or flat overnight).
6. **Daily Cap**: Cumulative charge within each 24-hour cycle is capped at `dailyCap` (e.g. 50,000 LAK).
7. **Monthly Pass**: Active pass holders incur 0 LAK parking fee.
8. **Lost Ticket**: Applies flat penalty `lostTicketFee` (e.g. 100,000 LAK).
9. **Slot Locking**: Slot acquisition uses `transaction.LOCK.UPDATE` (`SELECT ... FOR UPDATE`) to eliminate concurrent double-booking.

---

## 4. Verification Commands

```bash
# Run unit & concurrency tests
cd dc_api && node test_parking_services.js

# Seed database tables and initial data
cd dc_api && node seed_parking_data.js

# Seed Nuxt 2 admin navigation menus
cd dc_api && node seed_parking_menus.js

# Lint Nuxt 2 web files
cd dc_web && npx eslint --ext .vue,.js pages/admin/parking services/parkingApiService.js store/parking.js components/parking
```
