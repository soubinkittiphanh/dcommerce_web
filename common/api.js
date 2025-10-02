


export const hostName = () => {
  // const baseURL = 'http://150.95.31.23:8003' // *** CHITHAN
  // const baseURL = 'http://150.95.31.23:8010' // *** THE PEEAIR
  // const baseURL = 'http://150.95.31.23:8015' // *** THE CORNERS
  // const baseURL = 'http://150.95.31.23:8017' //  *** PHAIVANH PHARMACY
  // const baseURL = 'http://150.95.31.23:8018' //  *** BMART
  // const baseURL = 'http://150.95.31.23:8019' //  *** TP AUTO PART
  // const baseURL = 'http://150.95.31.23:8020' //  *** KSOUK
  // const baseURL = 'http://150.95.31.23:8021' //  *** carcare sokpaluang
  const baseURL = 'http://150.95.31.23:8014' //  *** DEMO1
  //const baseURL = 'http://150.95.31.23:8918' //  *** TAIPHUAN
  // const baseURL = 'http://localhost:8888' // ***Demo 1*** 
  return baseURL;
}

export const mainCompanyInfoV1 = (store) => {
  
  return store.getters.findAllCompany[0]
}

export const mainCompanyInfo = (store) => {

  // const info = {
  //   name: '',
  //   tel: '',
  //   whatsapp: '+',
  //   imageUrl: '',
  //   imageName: '',
  //   address: 'SAPHANTHONG ONLINE',
  //   ticketLogo: 'BWLOGO_DC.jpeg',
  //   companyLogo: 'company_logo_DC.jpeg',
  //   dcLogo: 'Dcommerce-Logo_DC.png',
  //   env: ''
  // }
  // const info = {
  //   name: 'ຮ້ານຂາຍຢາ ໄພວັນ ຟາມາຊີ',
  //   tel: '020 55 627 486',
  //   whatsapp: '+85620 55 627 486',
  //   imageUrl: '',
  //   imageName: '',
  //   address: 'SAPHANTHONG ONLINE',
  //   ticketLogo: 'BWLOGO_PHAIVANH.jpeg',
  //   companyLogo: 'company_logo_phaivanh.jpeg',
  //   dcLogo: 'Dcommerce-Logo-phaivanh.pnga',
  //   dcLogo: 'PWT.png',
  //   env: ''
  // }
  // const info = {
  //   name: '',
  //   tel: '',
  //   whatsapp: '',
  //   imageUrl: '',
  //   imageName: '',
  //   address: '',
  //   ticketLogo: 'TTP_AUTO.jpeg',
  //   companyLogo: 'TTP_AUTO.jpeg',
  //   dcLogo: 'Dcommerce-Logo_DC.png',
  //   env: ''
  // }



  // const info = {
  //   name: 'THE CORNERS',
  //   tel: '020 2698 3331',
  //   whatsapp: '+8562023378899',
  //   imageUrl: '',
  //   imageName: '',
  //   address: '3 ແຍກອາໄພ່ LPB',
  //   ticketLogo: 'BWLOGO_the_conners.jpeg',
  //   companyLogo: 'company_logo_DC.jpeg',
  //   dcLogo: 'Dcommerce-Logo_DC.png',
  //   env: ''
  // }

  // const info = {
  //   name: 'PEEAIR',
  //   tel: '020 2698 3331',
  //   whatsapp: '+8562023378899',
  //   imageUrl: '',
  //   imageName: '',
  //   address: '3 ແຍກອາໄພ່ LPB',
  //   ticketLogo: 'BWLOGO_the_conners.jpeg',
  //   companyLogo: 'company_logo_DC.jpeg',
  //   dcLogo: 'Dcommerce-Logo_DC.png',
  //   env: ''
  // }
  // const info = {
  //   name: 'BMART',
  //   tel: '020 2698 3331',
  //   whatsapp: '+8562023378899',
  //   imageUrl: '',
  //   imageName: '',
  //   address: '3 ແຍກອາໄພ່ LPB',
  //   ticketLogo: 'BWLOGO_BMART.png',
  //   companyLogo: 'company_logo_BMART.jpeg',
  //   dcLogo: 'Dcommerce-Logo_DC.png',
  //   env: ''
  // }
  const info = {
    name: 'ໄທພວນ',
    tel: '020 2383 8999',
    whatsapp: '+8562002023838999',
    imageUrl: '',
    imageName: '',
    address: '3 ແຍກອາໄພ່ LPB',
    ticketLogo: 'TAIPHUAN.png',
    companyLogo: 'TAIPHUAN.png',
    dcLogo: 'Dcommerce-Logo_DC.png',
    env: ''
  }
  return info;
}
