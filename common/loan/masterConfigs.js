// Config for every loan parameter table rendered by MasterDataTable.vue.
// entity / functionCode match dc_api src/loan/services/paramRegistry.js; the API validates everything.
// Field types: text, textarea, int, money (DECIMAL 20,4), rate (0..1), decimal, date, bool, select.
// Select sources: lookup (key in /api/loan/lookups), enumKey (engine enum from /api/loan/lookups),
// ref (another loan entity), pos (existing POS table: currency, tax, location).

const f = (key, label, type = 'text', extra = {}) => ({ key, label, type, ...extra })
const code = (key = 'code', label = 'ລະຫັດ (Code)') => f(key, label, 'text', { identity: true })
const name = f('name', 'ຊື່ (Name)')
const description = f('description', 'ລາຍລະອຽດ (Description)', 'textarea')
const effectiveFrom = f('effectiveFrom', 'ມີຜົນແຕ່ (Effective from)', 'date')
const effectiveTo = f('effectiveTo', 'ໝົດຜົນ (Effective to)', 'date', { optional: true })
const refStatus = (key, label) => f(key, label, 'select', { ref: { entity: 'status', value: 'statusCode', text: 'statusCode' } })

const lookup = (entity, title, extraFields = []) => ({
  entity,
  functionCode: 'LN_LOOKUP',
  group: 'lookups',
  title,
  keyField: 'code',
  fields: [code(), name, ...extraFields]
})

export const MASTER_GROUPS = [
  { key: 'lookups', title: 'ຂໍ້ມູນອ້າງອີງ (Lookups)' },
  { key: 'product', title: 'ຜະລິດຕະພັນ (Product setup)' },
  { key: 'pricing', title: 'ອັດຕາ ແລະ ຄ່າທຳນຽມ (Rates, fees & tax)' },
  { key: 'risk', title: 'ຊັ້ນໜີ້ ແລະ ສຳຮອງ (Status & provisioning)' },
  { key: 'governance', title: 'ການອະນຸມັດ (Governance)' },
  { key: 'accounting', title: 'ບັນຊີ (Accounting: entry rules; roles and GL mappings view only)' },
  { key: 'system', title: 'ລະບົບ (System)' }
]

export const MASTER_CONFIGS = [
  lookup('lookup-loan-type', 'ປະເພດສິນເຊື່ອ (Loan types)', [description]),
  lookup('lookup-frequency', 'ຄວາມຖີ່ການຊຳລະ (Frequencies)', [f('daysInterval', 'ຈຳນວນມື້ (Days interval)', 'int'), f('periodsPerYear', 'ງວດຕໍ່ປີ (Periods per year)', 'decimal')]),
  lookup('lookup-disbursement-target', 'ປາຍທາງການເບີກຈ່າຍ (Disbursement targets)', [description]),
  lookup('lookup-holiday-handling', 'ການຈັດການວັນພັກ (Holiday handling)', [description]),
  lookup('lookup-day-count', 'ວິທີນັບມື້ (Day count)', [f('daysInYear', 'ມື້ຕໍ່ປີ (Days in year)', 'int'), description]),
  lookup('lookup-rebate-method', 'ວິທີຄືນດອກເບ້ຍ (Rebate methods)', [description]),
  lookup('lookup-accrual-method', 'ວິທີຄິດດອກເບ້ຍຄ້າງຮັບ (Accrual methods)', [description]),
  lookup('lookup-collateral-type', 'ປະເພດຫຼັກຊັບຄ້ຳປະກັນ (Collateral types)', [description]),
  lookup('lookup-loan-purpose', 'ຈຸດປະສົງສິນເຊື່ອ (Loan purposes)', [description]),
  lookup('lookup-deferred-fee-presentation', 'ການສະແດງຄ່າທຳນຽມ (Fee presentation)', [description]),
  lookup('lookup-interest-recognition', 'ການຮັບຮູ້ດອກເບ້ຍ (Interest recognition)', [description]),
  lookup('lookup-repayment-method', 'ວິທີຜ່ອນ (Repayment methods)', [description]),

  {
    entity: 'product-category', functionCode: 'LN_PRODUCT_CATEGORY', group: 'product',
    title: 'ໝວດຜະລິດຕະພັນ (Product categories)',
    fields: [code(), name, description]
  },
  {
    entity: 'component', functionCode: 'LN_COMPONENT', group: 'product',
    title: 'ອົງປະກອບສິນເຊື່ອ (Components)',
    fields: [
      code('componentCode'), name,
      f('componentType', 'ປະເພດ (Type)'), f('calculationBasis', 'ພື້ນຖານຄິດໄລ່ (Calculation basis)'),
      f('liquidationMode', 'ວິທີຕັດຊຳລະ (Liquidation mode)'), f('allowPrepay', 'ຊຳລະກ່ອນໄດ້ (Allow prepay)', 'bool'),
      f('isTaxable', 'ເສຍອາກອນ (Taxable)', 'bool'), f('taxCode', 'ລະຫັດອາກອນ (Tax code)', 'text', { optional: true }),
      f('taxInclusive', 'ລວມອາກອນ (Tax inclusive)', 'bool'),
      f('taxPointEvent', 'ຈຸດຮັບຮູ້ອາກອນ (Tax point)', 'select', { enumKey: 'component.taxPointEvent' })
    ],
    columns: ['componentCode', 'name', 'componentType', 'isTaxable', 'taxPointEvent']
  },
  {
    entity: 'ude', functionCode: 'LN_UDE', group: 'product',
    title: 'ຕົວແປທີ່ກຳນົດເອງ (User defined elements)',
    fields: [code('udeCode'), name, f('dataType', 'ປະເພດຂໍ້ມູນ (Data type)', 'select', { enumKey: 'ude.dataType' }), description]
  },
  {
    entity: 'document-checklist', functionCode: 'LN_DOC_CHECKLIST', group: 'governance',
    title: 'ລາຍການເອກະສານ (Document checklist)',
    fields: [
      f('productId', 'ຜະລິດຕະພັນ (Product)', 'select', { ref: { entity: 'product', text: r => `${r.productCode} v${r.version}` } }),
      f('documentTypeCode', 'ລະຫັດເອກະສານ (Document type)'), f('documentName', 'ຊື່ເອກະສານ (Document name)'),
      f('isMandatory', 'ບັງຄັບ (Mandatory)', 'bool')
    ]
  },

  {
    entity: 'rate-index', functionCode: 'LN_RATE_INDEX', group: 'pricing',
    title: 'ອັດຕາອ້າງອີງ (Rate indexes)',
    fields: [code('rateCode'), name, f('resetFrequencyCode', 'ຄວາມຖີ່ປັບອັດຕາ (Reset frequency)', 'select', { lookup: 'frequencies' })]
  },
  {
    entity: 'rate-index-value', functionCode: 'LN_RATE_INDEX', group: 'pricing',
    title: 'ຄ່າອັດຕາອ້າງອີງ (Rate index values)',
    fields: [
      f('rateIndexId', 'ອັດຕາອ້າງອີງ (Rate index)', 'select', { ref: { entity: 'rate-index', text: 'rateCode' } }),
      f('effectiveDate', 'ມີຜົນແຕ່ (Effective date)', 'date'), f('baseRate', 'ອັດຕາ (Base rate)', 'rate')
    ]
  },
  {
    entity: 'fee', functionCode: 'LN_FEE', group: 'pricing',
    title: 'ຄ່າທຳນຽມ (Fee master)',
    fields: [
      code('feeCode'),
      f('componentId', 'ອົງປະກອບ (Component)', 'select', { optional: true, ref: { entity: 'component', text: 'componentCode' } }),
      f('feeType', 'ປະເພດ (Fee type)'), f('calcMethod', 'ວິທີຄິດໄລ່ (Calc method)'), f('basisAmountType', 'ພື້ນຖານ (Basis amount)'),
      f('minAmount', 'ຕ່ຳສຸດ (Min amount)', 'money'), f('maxAmount', 'ສູງສຸດ (Max amount)', 'money'),
      f('isEirAmortized', 'ຕັດຈ່າຍ EIR (EIR amortized)', 'bool'), f('taxApplicable', 'ມີອາກອນ (Tax applicable)', 'bool'),
      f('triggerEventCode', 'ເຫດການ (Trigger event)', 'select', { ref: { entity: 'event', value: 'eventCode', text: 'eventCode' } }),
      f('accountingRoleCode', 'ບົດບາດບັນຊີ (Accounting role)', 'select', { ref: { entity: 'accounting-role', value: 'roleCode', text: 'roleCode' } })
    ],
    columns: ['feeCode', 'feeType', 'minAmount', 'maxAmount', 'triggerEventCode']
  },
  {
    entity: 'tax-master', functionCode: 'LN_TAX_MASTER', group: 'pricing',
    title: 'ອາກອນ (Tax master)',
    fields: [
      code('taxCode'),
      f('posTaxId', 'ອາກອນ POS (POS tax)', 'select', { optional: true, pos: 'tax' }),
      f('taxRate', 'ອັດຕາສະເພາະ (Override rate; blank = POS rate)', 'rate', { optional: true }),
      f('componentId', 'ອົງປະກອບ (Component)', 'select', { optional: true, ref: { entity: 'component', text: 'componentCode' } }),
      f('accountingRoleCode', 'ບົດບາດບັນຊີ (Accounting role)', 'select', { ref: { entity: 'accounting-role', value: 'roleCode', text: 'roleCode' } }),
      effectiveFrom, effectiveTo
    ],
    columns: ['taxCode', 'posTaxId', 'taxRate', 'effectiveFrom', 'effectiveTo']
  },
  {
    entity: 'holiday-calendar', functionCode: 'LN_HOLIDAY', group: 'pricing',
    title: 'ປະຕິທິນວັນພັກ (Holiday calendars)',
    fields: [code('calendarCode'), f('branchId', 'ສາຂາ (Branch / location)', 'select', { optional: true, pos: 'location' }), description]
  },
  {
    entity: 'holiday-date', functionCode: 'LN_HOLIDAY', group: 'pricing',
    title: 'ວັນພັກ (Holiday dates)',
    fields: [
      f('calendarId', 'ປະຕິທິນ (Calendar)', 'select', { ref: { entity: 'holiday-calendar', text: 'calendarCode' } }),
      f('holidayDate', 'ວັນທີ (Date)', 'date'), f('description', 'ລາຍລະອຽດ (Description)'), f('isWeekend', 'ທ້າຍອາທິດ (Weekend)', 'bool')
    ]
  },

  {
    entity: 'regulatory-class', functionCode: 'LN_PROVISION', group: 'risk',
    title: 'ຊັ້ນໜີ້ (Regulatory classes)',
    fields: [code('classCode'), name, f('glQualifier', 'ຕົວລະບຸບັນຊີ (GL qualifier)')]
  },
  {
    entity: 'provision-rule', functionCode: 'LN_PROVISION', group: 'risk',
    title: 'ອັດຕາສຳຮອງ - ນະໂຍບາຍບໍລິສັດ (Provision rules, company policy)',
    fields: [
      f('regulatoryClassCode', 'ຊັ້ນໜີ້ (Class)', 'select', { ref: { entity: 'regulatory-class', value: 'classCode', text: 'classCode' } }),
      f('productId', 'ຜະລິດຕະພັນ (Product, optional)', 'select', { optional: true, ref: { entity: 'product', text: r => `${r.productCode} v${r.version}` } }),
      f('categoryId', 'ໝວດ (Category, optional)', 'select', { optional: true, ref: { entity: 'product-category', text: 'code' } }),
      f('provisionRate', 'ອັດຕາສຳຮອງ (Provision rate)', 'rate'),
      f('collateralHaircutPct', 'ສ່ວນຫຼຸດຫຼັກຊັບ (Collateral haircut)', 'rate'),
      f('provisionBase', 'ພື້ນຖານ (Base)', 'select', { enumKey: 'provision-rule.provisionBase' }),
      f('policyNote', 'ໝາຍເຫດນະໂຍບາຍ (Policy note)'),
      effectiveFrom, effectiveTo
    ],
    columns: ['regulatoryClassCode', 'provisionRate', 'collateralHaircutPct', 'provisionBase', 'effectiveFrom']
  },
  {
    entity: 'status', functionCode: 'LN_STATUS_RULE', group: 'risk',
    title: 'ສະຖານະບັນຊີ (Account statuses)',
    fields: [
      code('statusCode'), name,
      f('regulatoryClassCode', 'ຊັ້ນໜີ້ (Class)', 'select', { ref: { entity: 'regulatory-class', value: 'classCode', text: 'classCode' } }),
      f('interestTreatment', 'ການຄິດດອກເບ້ຍ (Interest treatment)'), f('penaltyTreatment', 'ການຄິດຄ່າປັບໄໝ (Penalty treatment)')
    ]
  },
  {
    entity: 'status-movement-rule', functionCode: 'LN_STATUS_RULE', group: 'risk',
    title: 'ຊ່ວງວັນຄ້າງຊຳລະ DPD (Status movement rules)',
    fields: [
      refStatus('fromStatus', 'ຈາກ (From)'), refStatus('toStatus', 'ໄປ (To)'),
      f('minDpd', 'DPD ຕ່ຳສຸດ (Min DPD)', 'int'), f('maxDpd', 'DPD ສູງສຸດ (Max DPD)', 'int'),
      f('conditionFormula', 'ເງື່ອນໄຂ (Condition)', 'textarea', { optional: true }), effectiveFrom, effectiveTo
    ],
    columns: ['fromStatus', 'toStatus', 'minDpd', 'maxDpd', 'effectiveFrom']
  },
  {
    entity: 'status-cure-rule', functionCode: 'LN_STATUS_RULE', group: 'risk',
    title: 'ກົດການຟື້ນຟູຊັ້ນໜີ້ (Status cure rules)',
    fields: [
      refStatus('fromStatus', 'ຈາກ (From)'), refStatus('toStatus', 'ໄປ (To)'),
      f('consecutiveOnTimeInstallmentsRequired', 'ງວດຕໍ່ເນື່ອງ (On-time installments)', 'int'),
      f('observationMonthsRequired', 'ເດືອນສັງເກດ (Observation months)', 'int')
    ]
  },

  {
    entity: 'approval-matrix', functionCode: 'LN_APPROVAL_MATRIX', group: 'governance',
    title: 'ຕາຕະລາງອະນຸມັດ (Approval matrix)',
    fields: [
      f('entityType', 'ປະເພດ (Entity type)', 'select', { enumKey: 'approval-matrix.entityType' }),
      f('minAmount', 'ຕ່ຳສຸດ (Min amount)', 'money'), f('maxAmount', 'ສູງສຸດ (Max amount)', 'money'),
      f('requiredLevel', 'ລະດັບ (Required level)', 'int'), f('approverRoleId', 'ກຸ່ມຜູ້ອະນຸມັດ (Approver group id)', 'int')
    ]
  },

  { entity: 'accounting-role', functionCode: 'LN_ACCOUNTING_SETUP', group: 'accounting', title: 'ບົດບາດບັນຊີ (Accounting roles)', fields: [code('roleCode'), name, f('expectedType', 'ປະເພດ (Expected type)'), f('resolverType', 'ວິທີຫາບັນຊີ (Resolver)', 'select', { enumKey: 'accounting-role.resolverType' })] },
  { entity: 'amount-tag', functionCode: 'LN_ENTRY_RULE', group: 'accounting', title: 'ປ້າຍຈຳນວນເງິນ (Amount tags)', fields: [code('tagCode'), name] },
  { entity: 'event', functionCode: 'LN_ENTRY_RULE', group: 'accounting', title: 'ເຫດການ (Events)', fields: [code('eventCode'), name, description] },
  {
    entity: 'accounting-entry-rule', functionCode: 'LN_ENTRY_RULE', group: 'accounting',
    title: 'ກົດການບັນທຶກບັນຊີ (Entry rules)',
    fields: [
      f('eventCode', 'ເຫດການ (Event)', 'select', { ref: { entity: 'event', value: 'eventCode', text: 'eventCode' } }),
      f('amountTag', 'ປ້າຍຈຳນວນ (Amount tag)', 'select', { ref: { entity: 'amount-tag', value: 'tagCode', text: 'tagCode' } }),
      f('drCr', 'Dr/Cr', 'select', { enumKey: 'accounting-entry-rule.drCr' }),
      f('roleCode', 'ບົດບາດ (Role)', 'select', { ref: { entity: 'accounting-role', value: 'roleCode', text: 'roleCode' } }),
      f('qualifierSource', 'Qualifier', 'select', { enumKey: 'accounting-entry-rule.qualifierSource' }),
      f('isActive', 'ໃຊ້ງານ (Active)', 'bool'),
      f('feeModeFilter', 'ເງື່ອນໄຂວິທີເກັບຄ່າທຳນຽມ (Fee mode filter)', 'select', { enumKey: 'accounting-entry-rule.feeModeFilter' }),
      f('presentationFilter', 'ເງື່ອນໄຂການຮັບຮູ້ (Presentation filter)', 'select', { enumKey: 'accounting-entry-rule.presentationFilter' }),
      f('targetFilter', 'ເງື່ອນໄຂປາຍທາງ (Target filter)', 'select', { enumKey: 'accounting-entry-rule.targetFilter' }),
      f('productId', 'ຜະລິດຕະພັນ (Product scope)', 'select', { optional: true, ref: { entity: 'product', text: r => `${r.productCode} v${r.version}` } }),
      f('categoryId', 'ໝວດ (Category scope)', 'select', { optional: true, ref: { entity: 'product-category', text: 'code' } }),
      effectiveFrom, effectiveTo
    ],
    columns: ['eventCode', 'amountTag', 'drCr', 'roleCode', 'qualifierSource', 'isActive', 'feeModeFilter', 'presentationFilter', 'targetFilter']
  },
  { entity: 'role-gl-mapping', functionCode: 'LN_ACCOUNTING_SETUP', group: 'accounting', title: 'ການຈັບຄູ່ບັນຊີ GL (GL mappings, view only)', fields: [f('roleCode', 'Role'), f('statusQualifier', 'Qualifier'), f('chartAccountId', 'Account id', 'int'), effectiveFrom] },

  {
    entity: 'currency-rule', functionCode: 'LN_CURRENCY_RULE', group: 'pricing',
    title: 'ການປັດເສດສະກຸນເງິນ (Currency rounding rules)',
    fields: [
      f('currencyId', 'ສະກຸນເງິນ (Currency)', 'select', { pos: 'currency' }),
      f('decimalPlaces', 'ຈຳນວນທົດສະນິຍົມ (Decimal places, 0-2)', 'int'),
      f('roundingMode', 'ວິທີປັດ (Rounding mode)', 'select', { enumKey: 'currency-rule.roundingMode' }),
      effectiveFrom, effectiveTo
    ]
  },
  {
    entity: 'sequence', functionCode: 'LN_SEQUENCE', group: 'system',
    title: 'ລຳດັບເລກທີ (Numbering sequences)',
    fields: [code('sequenceCode'), f('prefix', 'ຄຳນຳໜ້າ (Prefix)'), f('nextNumber', 'ເລກຖັດໄປ (Next number)', 'int'), f('paddingLength', 'ຈຳນວນຫຼັກ (Padding)', 'int'), f('formatPattern', 'ຮູບແບບ (Pattern)')]
  },
  {
    entity: 'batch-job', functionCode: 'LN_BATCH_JOB', group: 'system',
    title: 'ວຽກປະມວນຜົນ EOD (Batch jobs)',
    fields: [code('jobCode'), name, f('executionOrder', 'ລຳດັບ (Order)', 'int'), f('isEnabled', 'ເປີດໃຊ້ (Enabled)', 'bool')]
  }
]

export const configFor = entity => MASTER_CONFIGS.find(c => c.entity === entity)

// Product children, edited inside the product form (pages/admin/loan/product/_id.vue)
const productRef = { entity: 'product', text: r => `${r.productCode} v${r.version}` }
export const PRODUCT_CHILD_CONFIGS = {
  currencies: {
    entity: 'product-currency', functionCode: 'LN_PRODUCT', title: 'ສະກຸນເງິນ (Currencies)',
    fields: [
      f('productId', 'ຜະລິດຕະພັນ (Product)', 'select', { ref: productRef }),
      f('currencyId', 'ສະກຸນເງິນ (Currency)', 'select', { pos: 'currency' }),
      f('isDefault', 'ຄ່າເລີ່ມຕົ້ນ (Default)', 'bool')
    ],
    columns: ['currencyId', 'isDefault']
  },
  components: {
    entity: 'product-component', functionCode: 'LN_PRODUCT', title: 'ອົງປະກອບ (Components)',
    fields: [
      f('productId', 'ຜະລິດຕະພັນ (Product)', 'select', { ref: productRef }),
      f('componentId', 'ອົງປະກອບ (Component)', 'select', { ref: { entity: 'component', text: 'componentCode' } }),
      f('formulaCode', 'ສູດ (Formula code)'),
      f('defaultValue', 'ຄ່າເລີ່ມຕົ້ນ (Default)', 'money'), f('minValue', 'ຕ່ຳສຸດ (Min)', 'money'), f('maxValue', 'ສູງສຸດ (Max)', 'money'),
      f('timing', 'ເວລາຮຽກເກັບ (Timing)'),
      f('isAmendableAtAccount', 'ແກ້ໄຂໄດ້ຕໍ່ບັນຊີ (Amendable per account)', 'bool'),
      f('isEIRAmortized', 'ຕັດຈ່າຍ EIR (EIR amortized)', 'bool')
    ],
    columns: ['componentId', 'formulaCode', 'defaultValue', 'minValue', 'maxValue', 'timing']
  },
  udes: {
    entity: 'product-ude', functionCode: 'LN_PRODUCT', title: 'ຕົວແປ (UDEs)',
    fields: [
      f('productId', 'ຜະລິດຕະພັນ (Product)', 'select', { ref: productRef }),
      f('udeCode', 'ຕົວແປ (UDE)', 'select', { ref: { entity: 'ude', value: 'udeCode', text: 'udeCode' } }),
      f('defaultValue', 'ຄ່າເລີ່ມຕົ້ນ (Default)', 'money'), f('minValue', 'ຕ່ຳສຸດ (Min)', 'money'), f('maxValue', 'ສູງສຸດ (Max)', 'money'),
      f('isAmendableAtAccount', 'ແກ້ໄຂໄດ້ຕໍ່ບັນຊີ (Amendable per account)', 'bool')
    ],
    columns: ['udeCode', 'defaultValue', 'minValue', 'maxValue', 'isAmendableAtAccount']
  },
  waterfall: {
    entity: 'waterfall-rule', functionCode: 'LN_PRODUCT', title: 'ລຳດັບຕັດຊຳລະ (Repayment waterfall)',
    fields: [
      f('productId', 'ຜະລິດຕະພັນ (Product)', 'select', { ref: productRef }),
      refStatus('accountStatus', 'ສະຖານະບັນຊີ (Account status)'),
      f('priorityOrder', 'ລຳດັບ (Priority)', 'int'),
      f('componentId', 'ອົງປະກອບ (Component)', 'select', { ref: { entity: 'component', text: 'componentCode' } })
    ],
    columns: ['accountStatus', 'priorityOrder', 'componentId']
  }
}

// sec_function code for any loan entity name (used by the pending inbox)
export const functionOf = (entity) => {
  if (entity === 'product' || Object.values(PRODUCT_CHILD_CONFIGS).some(c => c.entity === entity) || entity === 'rate-tier') return 'LN_PRODUCT'
  const cfg = configFor(entity)
  return cfg ? cfg.functionCode : null
}

export const titleOf = (entity) => {
  if (entity === 'product') return 'ຜະລິດຕະພັນ (Product)'
  const child = Object.values(PRODUCT_CHILD_CONFIGS).find(c => c.entity === entity)
  const cfg = child || configFor(entity)
  return cfg ? cfg.title : entity
}
