# COOPERATION, ACQUISITION & PAYMENT GATEWAY INTEGRATION AGREEMENT

This **Cooperation, Acquisition & Payment Gateway Integration Agreement** (the "Agreement") is entered into this _____ day of ____________, 2026 (the "Effective Date"), by and between:

1. **D-COMMERCE SOLE CO., LTD**, a company registered under the laws of the Lao People's Democratic Republic, having its principal place of business at [Street/Area, Vientiane, Lao PDR] (hereinafter referred to as **"D-Commerce"**); and
2. **LAO-VIET BANK Joint Venture Bank (LVB)**, a financial institution licensed under the laws of the Lao People's Democratic Republic, having its headquarters at [LVB Headquarters Address, Vientiane, Lao PDR] (hereinafter referred to as the **"Bank"** or **"LVB"**).

D-Commerce and the Bank are collectively referred to as the "Parties" and individually as a "Party."

---

### RECITALS

**WHEREAS**, D-Commerce develops and sells proprietary Point-of-Sale (POS) software (Minimart and Restaurant POS) and sells related POS terminal hardware; and

**WHEREAS**, the Bank offers merchant acquiring services, dynamic QR payment processing, and other cashless payment products (collectively, the "Payment Gateway Services") through its Open API; and

**WHEREAS**, the Bank wishes to purchase POS systems (software licenses and hardware packages) from D-Commerce to distribute or subsidize for the Bank's merchant customers, to encourage merchant account acquisition and transaction volume; and

**WHEREAS**, D-Commerce agrees to integrate the Bank’s Payment Gateway Open API directly into D-Commerce's POS systems so that enrolled merchants can process dynamic QR code payments directly on checkout screens, with transactions settling directly into the merchants' LVB bank accounts;

**NOW, THEREFORE**, in consideration of the mutual covenants and conditions contained herein, the Parties agree as follows:

---

## SECTION I: POS SYSTEM PURCHASE PROGRAM

### 1. Purchase of POS Systems
The Bank agrees to purchase and D-Commerce agrees to supply Point-of-Sale packages consisting of:
*   **D-Commerce POS Software Licenses** (either Cloud-Based or Offline versions, as selected by the Bank or respective merchant).
*   **POS Hardware Packages** (which may include physical terminals, thermal receipt printers, cash drawers, and NFC card readers).

### 2. Allocation and Rollout to Merchants
*   **Target Merchants:** The Bank will identify, select, and approve its merchant customers ("Approved Merchants") to receive the subsidized D-Commerce POS systems.
*   **Installation & On-Site Setup:** For each Approved Merchant, D-Commerce will handle the software setup, configuration, database initialization, hardware installation, and staff training.
*   **Delivery & Lead Time:** D-Commerce will deliver hardware and deploy software within [e.g., 7-10 business days] from receiving written nomination and merchant information from the Bank.

### 3. Purchase Price and Payment to D-Commerce
*   The pricing for software licenses and hardware is set forth in **Annex A (POS Pricing & Packages)**.
*   The Bank will pay D-Commerce directly for the POS systems on a [e.g., monthly / quarterly] basis, based on invoices issued upon successful deployment and merchant sign-off.
*   Merchants shall not be charged directly by D-Commerce for standard licensing or hardware packages covered under the Bank's subsidy program, unless the merchant requests additional terminals or out-of-scope custom features.

---

## SECTION II: PAYMENT GATEWAY INTEGRATION (LVB OPEN API)

### 4. Technical Scope & Integration
D-Commerce will integrate the Bank's **LVB Open API Payment Gateway** into its standard checkout flows. The technical specifications of the integration include:

1.  **Payment Initialization (`Init` API):** 
    *   Endpoint: `https://laovietbank.com.la:5678/v1/api/init/`
    *   Function: Generates dynamic QR codes at the checkout screen.
    *   Request Payload: Must contain `Service_Id`, `Merchant_Id`, `Merchant_Name`, `Trandate`, `Trans_Id`, `Trans_Desc`, `Amount`, `Curr`, `Payer_Id`, `Payer_Name`, `Payer_Addr`, `Type`, `Custmer_Id`, `Customer_Name`, `IssueDate`, `Callback_URL`, and the `Secure_Code`.
2.  **Authentication (`Login` API):**
    *   Endpoint: `https://laovietbank.com.la:5678/v1/api/login`
    *   Function: Obtains bearer tokens to authenticate transaction status queries.
3.  **Transaction Verification APIs:**
    *   Endpoints: `/v1/api/provider/transaction` and `/v1/api/provider/transaction/{Trans_Id}`
    *   Function: Enables the POS to verify payment success in real-time if a network callback is delayed.

### 5. Signature Hashing & Security Requirements
To prevent transaction tampering and unauthorized charges, the Parties agree to use a secure MD5 hashing mechanism:
*   **Hashing Format:** Request data must be signed using the formula:
    `MD5(privateKey | Service_Id | Merchant_Id | Merchant_Name | Trandate | Trans_Id | Trans_Desc | Amount | Curr | Payer_Id | Payer_Name | Payer_Addr | Type | Custmer_Id | Customer_Name | IssueDate | Callback_URL)`
*   **Key Protection:** Both Parties agree to securely store and encrypt the Bank's shared `privateKey`. Neither party shall disclose this key to any third party. The Bank is responsible for rotating keys and notifying D-Commerce in writing of any key changes.

### 6. Transaction Callbacks (Webhooks)
*   **Callback URL:** D-Commerce will provide a secure webhook listener endpoint (e.g., `Callback_URL`) to process payment notifications.
*   **Validation:** Upon receiving a payment notification from the Bank, the D-Commerce server will recalculate and verify the `Secure_Code` signature before marking the transaction as PAID on the merchant's POS screen and printing a receipt.
*   **Retry Mechanism:** The Bank's system must attempt callback notifications at least [e.g., 3 times] in the event of temporary network dropouts before failing.

### 7. API Availability, SLA & Liability
*   **Bank SLA:** The Bank is responsible for maintaining the stability, availability, and processing speeds of its Open API servers (`laovietbank.com.la`). The Bank guarantees an API availability of [e.g., 99.5%] during standard business operating hours.
*   **Downtime Disclaimer:** D-Commerce is **not liable** for failed transactions, payment delays, checkout freezes, or incorrect QR generation due to the Bank's API being down, experiencing latency, or returning incorrect response payloads.
*   **Discrepancies & Reconciliation:** The Bank is responsible for final monetary reconciliation. In the event of transaction discrepancies (e.g., POS marks unpaid but Bank debited customer), the Bank’s transaction log shall serve as the source of truth, and the Bank will handle dispute resolution directly with the customer and the merchant.

### 8. Merchant Discount Rate (MDR) & Fee Sharing (Optional)
*   The transaction fees charged to the merchant for accepting dynamic QR code payments shall be [e.g., ___%] of the transaction value, managed by the Bank.
*   **Revenue Share:** [If applicable, describe any commission or rebate paid by the Bank to D-Commerce for enabling their acquiring channel, e.g., "The Bank agrees to share ____% of the collected MDR or pay a commission of ____ LAK per transaction to D-Commerce on a monthly basis."]

---

## SECTION III: GENERAL TERMS

### 9. Hardware Warranty
D-Commerce provides a **one-year (1-year) limited warranty** on physical hardware supplied under this Agreement. This warranty covers manufacturing defects. It is voided in cases of physical damage, water damage, electrical surges, or unauthorized repairs by third parties.

### 10. Confidentiality & Security
*   The Bank's payment credentials, API tokens, Private Keys, and merchant transaction records are strictly confidential.
*   D-Commerce agrees to adhere to standard cybersecurity best practices to ensure that customer payment data is not exposed to unauthorized entities.

### 11. Term and Termination
*   **Term:** This Agreement is valid for [e.g., Two (2) Years] from the Effective Date.
*   **Termination:** Either Party may terminate this Agreement by providing ninety (90) days written notice. In the event of termination, D-Commerce will continue to support already deployed merchant systems, and the Bank will settle all outstanding purchase invoices.

### 12. Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the Lao People's Democratic Republic. Any dispute that cannot be resolved amicably shall be referred to the competent court in Vientiane, Lao PDR.

---

**IN WITNESS WHEREOF**, the Parties hereto have executed this Agreement by their duly authorized representatives as of the date first written above.

<br>

| **For: D-COMMERCE SOLE CO., LTD** | **For: LAO-VIET JOINT VENTURE BANK (LVB)** |
| :--- | :--- |
| <br><br><br> | <br><br><br> |
| **Name:** ___________________________ | **Name:** ___________________________ |
| **Title:** Authorized Representative | **Title:** Authorized Representative |
| **Date:** ___________________________ | **Date:** ___________________________ |
| *(Stamp & Signature)* | *(Stamp & Signature)* |

---

## ANNEX A: POS PRICING & PACKAGES

1.  **Software License Package (Per Merchant/Terminal):**
    *   Cloud-Based POS annual fee: _______________ LAK / Year
    *   Offline POS perpetual license fee: _______________ LAK

2.  **Hardware Bundle Option A (Standard POS):**
    *   Includes: Touchscreen POS Terminal, Thermal Receipt Printer (80mm), Cash Drawer.
    *   Unit Price: _______________ LAK

3.  **Hardware Bundle Option B (Cashless NFC Package):**
    *   Includes: Touchscreen POS Terminal, Thermal Printer, Cash Drawer, USB NFC Card Reader/Writer.
    *   Unit Price: _______________ LAK

4.  **On-Site Installation, Support, and Training Fee:**
    *   One-time fee per merchant outlet: _______________ LAK
