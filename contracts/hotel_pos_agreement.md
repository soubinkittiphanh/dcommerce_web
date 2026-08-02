# RESTAURANT POS SOFTWARE AND SERVICE AGREEMENT

This **Software and Service Agreement** (the "Agreement") is entered into this _____ day of ____________, 2026 (the "Effective Date"), by and between:

1. **D-COMMERCE SOLE CO., LTD**, a company registered under the laws of the Lao People's Democratic Republic, having its principal place of business at [Street/Area, Vientiane, Lao PDR] (hereinafter referred to as the **"Provider"**); and
2. **[HOTEL NAME / CORPORATE ENTITY]**, a company registered under the laws of [Country], having its principal place of business at [Hotel Address] (hereinafter referred to as the **"Client"** or **"Hotel"**).

The Provider and the Client are collectively referred to as the "Parties" and individually as a "Party."

---

### RECITALS

**WHEREAS**, the Provider owns and licenses proprietary Point-of-Sale (POS) software solutions, specifically the **D-Commerce Restaurant POS** system; and

**WHEREAS**, the Client operates food and beverage (F&B) outlets within its hotel premises and wishes to obtain a license to use the D-Commerce Restaurant POS system, purchase corresponding hardware, and receive setup, support, and maintenance services from the Provider;

**NOW, THEREFORE**, in consideration of the mutual covenants and conditions contained herein, the Parties agree as follows:

---

## 1. SCOPE OF SERVICES & SOFTWARE LICENSING

### 1.1 Licensed Software
The Provider hereby grants the Client a non-exclusive, non-transferable, revocable license to use the **D-Commerce Restaurant POS** software system at the designated locations within the Hotel. The standard software modules included under this license are:
*   **Live Table Grid Layout & Operations:** Real-time visual layout of dining tables with color-coded status tracking (Available, Occupied, Cleaning, Reserved).
*   **Seat Customer Management:** Recording of party sizes and table assignments.
*   **Order & Ticket Management:** Supporting Table Transfer actions, Split Bill / Split Checkout functionality, and Virtual Tickets for Walk-in or Take-away orders.
*   **Inventory & Stock Management:** Real-time stock level tracking, low-stock threshold alerts (`minStock`), and bulk adjustment tools.
*   **Accounting & Profit and Loss Reporting:** Automated generation of Profit & Loss (P&L) statements, financial breakdowns (Revenue, COGS, OPEX), and graphical financial ratio analysis (ECharts).
*   **Dual-Screen Synchronization:** Cart and Dynamic QR display support on secondary customer screens.

### 1.2 Deployment Models
The Client shall select one of the following deployment models by checking the appropriate box below. The model selected governs data responsibilities and service availability terms:

*   [ ] **Cloud-Based (Online) Version:** The Provider manages the server infrastructure, hosts the database, and performs regular automated data backups. The Provider is responsible for hosting security and server availability.
*   [ ] **Offline Version:** The software is installed locally on the Client’s hardware. The Client is solely responsible for data management, security, and manual database backups. The Provider shall not be liable for any data loss caused by hardware failure, server operating system crashes, theft, or accidental deletion in the Offline deployment.

---

## 2. FEES, SUBSCRIPTION, & PAYMENT TERMS

### 2.1 License and Service Fees
The Client agrees to pay the fees set forth in **Annex A (Pricing Schedule)** attached hereto, which may include:
1.  **Software License Fees:** [Specify monthly, annual, or one-time license fees].
2.  **Implementation & Setup Fees:** Covers configuration, on-site installation, training, and database setup.
3.  **Hardware Fees:** Outlying costs of physical terminals, printers, cash drawers, or NFC card readers.

### 2.2 Payment Schedule and Subscription Maintenance
*   For the Cloud-Based version, subscription fees must be paid in advance. 
*   **Late Payment Suspension:** If any subscription payment remains unpaid for more than seven (7) calendar days past the due date, the Provider reserves the absolute right to suspend cloud synchronization, remote database connections, and software login permissions without liability for business interruption.

---

## 3. HARDWARE WARRANTY & SERVICES

### 3.1 Hardware Purchase
If the Client purchases hardware directly from the Provider (e.g., POS terminals, thermal printers, cash drawers, and NFC card readers), the Provider warrants that such hardware will be free from manufacturing defects under normal use.

### 3.2 Limited Warranty Period
The Provider provides a **one-year (1-year) limited warranty** starting from the date of delivery.

### 3.3 Conditions and Exclusions
*   **In-Scope:** The warranty covers only electronic or physical components that fail due to manufacturing defects.
*   **Void Exclusions:** This warranty is voided immediately, and the Provider shall not be responsible for repair or replacement costs, if hardware damage is caused by:
    1.  Physical impact, drops, bumps, or structural breakage.
    2.  Spills of water, beverages, liquids, or exposure to excessive humidity.
    3.  Improper electrical current, voltage surges, or power fluctuations.
    4.  Repair, disassembly, or modifications attempted by anyone other than the Provider’s authorized personnel.

---

## 4. SYSTEM CUSTOMIZATION & ADDITIONAL FUNCTIONALITIES

### 4.1 Standard Specifications
The Client acknowledges that it has reviewed and accepted the standard system features for the **D-Commerce Restaurant POS** (as described on the System Details page `/admin/system-details`). 

### 4.2 Out-of-Scope Customization
Any customization, integration with third-party software (excluding pre-negotiated bank integrations), workflow modifications, or custom feature requests requested by the Client that fall outside the standard specifications are subject to separate feasibility evaluations and will incur additional development fees, project management fees, and support charges billed at the Provider’s prevailing hourly rates.

---

## 5. THIRD-PARTY INTEGRATIONS & BANK API DISCLAIMER

### 5.1 Payment Gateway Connections
The software supports integration with commercial bank APIs (e.g., Lao-Viet Bank / LVB) to generate dynamic QR codes on customer-facing screens and POS interfaces for cashless transactions.

### 5.2 Service Outages & Liability Limitation
The Client explicitly acknowledges that payment processing relies on third-party networks, telecommunications infrastructure, internet service providers (ISPs), and external bank API servers. Consequently:
*   The Provider is **not liable** for any delays in payment processing, failure to generate QR codes, timeout errors, connection failures, or unsuccessful payment status updates arising from the bank’s API or server issues.
*   The Client agrees **not to hold the Provider liable**, nor file any formal legal claims, complaints, or seek financial damages for lost revenue, operational delays, or reconciliation discrepancies caused by external bank API issues or downtime.

---

## 6. NFC CARDS & CASHLESS PAYMENT POLICY (IF APPLICABLE)

If the Hotel implements the closed-loop NFC cashless card system (e.g., for hotel guest cards, loyalty rewards, or internal staff canteen credits):
1.  **Card Issuance:** The Client is responsible for issuing, activating, and printing NFC cards.
2.  **Loss of Cards:** The Provider is not liable for monetary value, credit balances, or personal data lost due to misplaced, stolen, or physically damaged cards.
3.  **Card Maintenance:** The Client must educate staff and guests on correct card handling. The internal chip can be permanently damaged by bending, puncturing, or exposing cards to magnets or high heat.
4.  **Security and Verification:** The Hotel is responsible for verifying card ownership at the point of sale. The Provider is not responsible for unauthorized transactions carried out using stolen or misplaced cards.

---

## 7. CONFIDENTIALITY & DATA PRIVACY

Each Party shall keep confidential and not disclose to any third party any commercial, financial, technical, or customer database information received from the other Party in connection with this Agreement. The Client owns all transactional and sales data, but the Provider retains all intellectual property rights in the software.

---

## 8. TERM AND TERMINATION

*   **Term:** This Agreement is valid for a period of [e.g., One (1) Year] from the Effective Date and shall automatically renew unless either Party gives a thirty (30) days written notice of non-renewal.
*   **Termination for Cause:** Either Party may terminate this Agreement immediately if the other Party commits a material breach of any terms and fails to cure such breach within fifteen (15) days of receiving written notice thereof.

---

## 9. GOVERNING LAW & DISPUTE RESOLUTION

This Agreement shall be governed by and construed in accordance with the laws of the Lao People's Democratic Republic. Any dispute arising out of or in connection with this Agreement, including any question regarding its existence, validity, or termination, shall be settled amicably, failing which it shall be referred to the competent court in Vientiane, Lao PDR.

---

**IN WITNESS WHEREOF**, the Parties hereto have executed this Agreement by their duly authorized representatives as of the date first written above.

<br>

| **For: D-COMMERCE SOLE CO., LTD** | **For: [HOTEL CLIENT NAME]** |
| :--- | :--- |
| <br><br><br> | <br><br><br> |
| **Name:** ___________________________ | **Name:** ___________________________ |
| **Title:** Authorized Representative | **Title:** Authorized Representative |
| **Date:** ___________________________ | **Date:** ___________________________ |
| *(Stamp & Signature)* | *(Stamp & Signature)* |

---

## ANNEX A: PRICING SCHEDULE

1. **Software Licensing Fees:**
   * Model: [Cloud-Based / Offline]
   * Licensing Fee: _______________ LAK / [Month/Year]
   
2. **Implementation, Setup & Training:**
   * One-time fee: _______________ LAK
   
3. **Hardware Purchase list:**
   * [List physical terminals, printers, cash drawers, NFC readers with unit cost and quantity]
   * Total Hardware Cost: _______________ LAK
