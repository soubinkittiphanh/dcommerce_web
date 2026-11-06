// Declarative field specs for the generic loan TransactionDialog. One entry per transaction a user can
// raise from the account screen (the four self-service kinds REPAYMENT/PREPAY/FEE at booking go through
// PaymentDialog). Each entry drives both the dry-run preview (POST /preview/<postKind>) and the submit
// (POST /transactions with { kind: postKind, ...fixed, ...fields }). Fields map one-to-one to the body
// keys documented in docs/loan/phase6-uat.md appendix A and enforced server-side.
//
//   value            the menu id (also the default postKind)
//   postKind         the backend kind if it differs from value (INT_WAIVE -> WAIVE)
//   fixed            body fields the entry always sends (e.g. INT_WAIVE fixes component INTEREST)
//   label            Lao (English) menu + title text
//   checker          true if it needs a second person (lands in the pending queue, 202)
//   stages           account stages this entry applies to (gates the menu item)
//   remarksRequired  condition: remarks is mandatory
//   confirmAccountNo condition: the user must type the account number to confirm
//   fields           [{ key, label, type, required, items?, hint? }]
//                      type: amount | text | select | bank
//                      (bank = the currency-filtered bank-account picker; sends bankAccountId)

const F = {
  bank: { key: 'bankAccountId', label: 'ບັນຊີທະນາຄານ (Bank account)', type: 'bank', required: true },
  amount: (label) => ({ key: 'amount', label, type: 'amount', required: true }),
  remarks: { key: 'remarks', label: 'ໝາຍເຫດ (Remarks)', type: 'text', required: true }
}

const KINDS = [
  { value: 'DISB', label: 'ເບີກຈ່າຍ (Disbursement)', checker: true, stages: ['BOOKED'],
    fields: [{ key: 'rateDeviationReason', label: 'ເຫດຜົນອັດຕາ (Rate deviation reason)', type: 'text', required: false, hint: 'Only for a foreign-currency rate deviation' }] },

  { value: 'FEE_COLLECT', label: 'ເກັບຄ່າທຳນຽມ (Collect fees)', checker: false, stages: ['BOOKED', 'DISBURSED'],
    fields: [F.bank, { key: 'insurancePremium', label: 'ຄ່າປະກັນໄພ (Insurance premium)', type: 'amount', required: false }] },

  { value: 'FEE_REFUND', label: 'ຄືນຄ່າທຳນຽມ (Refund fees)', checker: true, stages: ['BOOKED', 'DISBURSED'],
    fields: [F.bank] },

  { value: 'ADV_REFUND', label: 'ຄືນເງິນລ່ວງໜ້າ (Refund advance)', checker: true, stages: ['DISBURSED'],
    fields: [F.amount('ຈຳນວນ (Amount)'), F.bank] },

  { value: 'INS_REMIT', label: 'ສົ່ງເງິນປະກັນໄພ (Remit insurance)', checker: true, stages: ['DISBURSED'],
    fields: [F.amount('ຈຳນວນ (Amount)'), F.bank] },

  { value: 'WAIVE', label: 'ຍົກເວັ້ນ (Waive)', checker: true, stages: ['DISBURSED'], remarksRequired: true,
    fields: [{ key: 'component', label: 'ອົງປະກອບ (Component)', type: 'select', required: true,
      items: [{ value: 'PENALTY', text: 'ຄ່າປັບ (Penalty)' }, { value: 'FEE', text: 'ຄ່າທຳນຽມ (Fee)' }, { value: 'INTEREST', text: 'ດອກເບ້ຍ (Interest)' }] },
      F.amount('ຈຳນວນ (Amount)'), F.remarks] },

  { value: 'INT_WAIVE', postKind: 'WAIVE', fixed: { component: 'INTEREST' }, label: 'ຍົກເວັ້ນດອກເບ້ຍ (Waive interest)', checker: true, stages: ['DISBURSED'], remarksRequired: true,
    fields: [F.amount('ຈຳນວນດອກເບ້ຍ (Interest amount)'), F.remarks] },

  { value: 'WRITE_OFF', label: 'ຕັດໜີ້ສູນ (Write off)', checker: true, stages: ['DISBURSED'], remarksRequired: true, confirmAccountNo: true,
    fields: [F.remarks] },

  { value: 'REPOSSESS', label: 'ຍຶດຊັບ (Repossess)', checker: true, stages: ['DISBURSED'], remarksRequired: true, confirmAccountNo: true,
    fields: [{ key: 'appraisedValue', label: 'ມູນຄ່າປະເມີນ (Appraised value)', type: 'amount', required: true }, F.remarks] },

  { value: 'VEH_DISPOSE', label: 'ຂາຍຊັບທີ່ຍຶດ (Dispose vehicle)', checker: true, stages: ['DISBURSED'], remarksRequired: true,
    fields: [{ key: 'salePrice', label: 'ລາຄາຂາຍ (Sale price)', type: 'amount', required: true }, F.bank, F.remarks] },

  { value: 'RECOVERY', label: 'ຮັບຄືນໜີ້ສູນ (Recovery)', checker: false, stages: ['DISBURSED'],
    fields: [F.amount('ຈຳນວນ (Amount)'), F.bank] },

  { value: 'REVERSAL', label: 'ຍົກເລີກລາຍການ (Reverse a transaction)', checker: true, stages: ['BOOKED', 'DISBURSED'], remarksRequired: true,
    fields: [{ key: 'targetTransactionId', label: 'ລາຍການທີ່ຈະຍົກເລີກ (Transaction to reverse)', type: 'select', required: true, hint: 'LIFO: only the latest reversible transaction' },
      F.remarks] }
]

const byValue = Object.fromEntries(KINDS.map(k => [k.value, k]))
const postKindOf = k => k.postKind || k.value
// Entries offered for a given account stage
const kindsForStage = stage => KINDS.filter(k => k.stages.includes(stage))

export { KINDS, byValue, postKindOf, kindsForStage }
