import Swal from 'sweetalert2'

export const swalError = (swal, title, message, trandId) => {
  swal({
    icon: 'error',
    title: title,
    // text: message || "ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    html: `
                  <span>
                    <span style="font-weight: bold;">Trace ID:</span><span style="color: red"> ${trandId}</span> <br />
                    <span style="font-weight: bold;">Message:</spn><span style="color: red"> ${message}</span>
                  </span>
                `
  })
}

export const swalErrorNoTrace = (swal, title, message) => {
  swal({
    icon: 'error',
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  })
}

export const swalError2 = (swal, title, message) => {
  swal({
    icon: 'error',
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false

  })
}

export const swalCancle = (swal) => {
  swal({
    icon: 'info',
    title: 'ຍົກເລີກ!',
    text: 'ການຍົເລີກສຳເລັດ',
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  })
}

export const swalSuccess = (swal, title, text) => {
  swal({
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  })
}

export const customSwalSuccess = (swal, title, text) => {
  swal({
    icon: 'success',
    title: title,
    html: text,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  })
}

export const closeSwal = (swal) => {
  Swal.hideLoading()
  Swal.close()
}

export const swalLoading = (swal, title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    // html: html,
    icon: icon,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    onBeforeOpen: () => {
      Swal.showLoading()
    }
  })
}

export const swalConfirm = (swal, title, text, icon, cancelButtonText, confirmButtonText) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    showCancelButton: true,
    cancelButtonText: cancelButtonText || 'ບໍ່',
    confirmButtonText: confirmButtonText || 'ຕົກລົງ'
  })
}

export const getFormatNum = (val) => {
  return new Intl.NumberFormat().format(val)
}

export const swalSuccessBackToMenu = (swal, message, transt24Id, status) => {
  return swal({
    title: 'ແຈ້ງເຕືອນ',
    icon: 'success',
    html: `<span>
                <span style="font-weight: bold;">ເລກທຸລະກຳ:</span><span style="color: orangered"> ${transt24Id}</span><br/>
                <span style="font-weight: bold;">ສະຖານະທຸລະກຳ:</spn>
                <span style="color: ${status === 'AUTHORISE' ? 'green' : 'red'}"> ${message}</span>
            </span>
    `,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    confirmButtonText: 'ກັບສູ່ເມນູຕ່າງໆ'
  })
}

export const customSwalSuccessBackToMenu = (swal, message) => {
  return swal({
    title: 'ແຈ້ງເຕືອນ',
    icon: 'success',
    html: message,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    confirmButtonText: 'ກັບສູ່ເມນູຕ່າງໆ'
  })
}

export const swalWarning = (swal, title, message) => {
  swal({
    icon: 'warning',
    title: title,
    text: message || 'ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ',
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  })
}

export const swalWarningWithHTML = (swal, title, message, amountA, amountB) => {
  swal({
    icon: 'warning',
    title: title,
    text: message || 'ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ',
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    html: `
                  <span>
                    <span style="font-weight: bold;">ຈຳນວນຊຳລະຈາກກົມໂຍທາ:</span><span style="color: darkorange"> ${amountA} ບໍ່ກົງກັບ</span> <br />
                    <span style="font-weight: bold;">ຍອດຊຳລະຈາກກົມອາກອນ:</spn><span style="color: darkorange"> ${amountB}</span>
                  </span>
                `

  })
}

export const swalWarningTraceId = (swal, title, message, trandId) => {
  swal({
    icon: 'warning',
    title: title,
    // text: message || "ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    html: `
                  <span>
                    <span style="font-weight: bold;">Trace ID:</span><span style="color: darkorange"> ${trandId}</span> <br />
                    <span style="font-weight: bold;">Message:</spn><span style="color: darkorange"> ${message}</span>
                  </span>
                `
  })
}

export const swalMsg = (swal, icon, title, message) => {
  swal({
    icon: icon,
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  })
}

export const toastNotification = (swal, icon, title, message, callbackFunc) => {
  swal({
    toast: true,
    position: 'bottom-end',
    timerProgressBar: true,
    icon: icon,
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  }).then((result) => {
    if (result.isConfirmed) {
      callbackFunc()
    }
  })
}



export const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .substr(0, 10)

export const formDate = (date) => {
  if (!date) return null

  const [year, month, day] = date.split('-')
  return `${month}/${day}/${year}`
}
export const parseDate = (date) => {
  console.log("TEST DATE PARSER 1", date);
  if (!date) return null
  console.log("TEST DATE PARSER 2");

  const [month, day, year] = date.split('/')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
export const jsDateToMysqlDate = (jsDate) => {
  let year = jsDate.getFullYear();
  let month = jsDate.getMonth() + 1;
  let day = jsDate.getDate();
  let hour = jsDate.getHours();
  let minute = jsDate.getMinutes();
  let second = jsDate.getSeconds();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  // return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  return `${year}-${month}-${day}`;
}

export const mysqlDateToDateObject = (mysqlDate) => {
  // *********** this fuction will return date object from mysq date *********** //
  const dateObj = new Date(mysqlDate.split("T")[0]);
  return dateObj;
}

export const getFirstDayOfMonth = () => {
  // Create a new Date object with the same year and month as the input date, but with day set to 1
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  console.log("Date found => ", firstDayOfMonth);
  // const mysqlDate = firstDayOfMonth.toISOString().slice(0, 10);
  const year = firstDayOfMonth.getFullYear();
  const month = (firstDayOfMonth.getMonth() + 1).toString().padStart(2, '0');
  const day = firstDayOfMonth.getDate().toString().padStart(2, '0');
  const mysqlDate = `${year}-${month}-${day}`;
  return mysqlDate;
}
export const firstAndLastDateOfCurrentYear = () => {

  const today = new Date();
  const year = today.getFullYear();
  console.log(`THIS YEAR IS ${year} ${today}`);
  // const startDate = new Date(year, 0, 1).toISOString().slice(0, 10);
  // const endDate = new Date(year, 11, 31).toISOString().slice(0, 10);
  const startDate = getMySQLDateOfFirstDayOfYear();
  const endDate = getMySQLDateOfLastDayOfYear();
  console.log(`THIS YEAR IS ${startDate} ${endDate}`);
  return { startDate, endDate };
}

export const getMySQLDateOfFirstDayOfYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const month = firstDayOfYear.getMonth() + 1;
  const day = firstDayOfYear.getDate();
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

export const getMySQLDateOfLastDayOfYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const lastDayOfYear = new Date(year, 11, 31);
  const month = lastDayOfYear.getMonth() + 1;
  const day = lastDayOfYear.getDate();
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

export const ticketHtml = () => {
  return {
    header: ` <!DOCTYPE html>
<html>
<head
<title></title>
<style>
h3, h5 {
margin: 0;
padding: 0;
line-height: 1.5;
}
@font-face {
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-display: swap;
src: url('/notosan/NotoSansLao-Regular.ttf') format('truetype');
}
*{
font-family: 'DM Sans';
}
.ticket {
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;
border-radius: 10px;
margin: 0px;

}

.product-name {
float: left;
font-size: 12px;
}

.price {
float: right;
font-size: 12px;
}
.price-total {
float: right;
}
h3 {
text-align: center;
font-family: 'DM Sans';
}

</style>
</head>`
  }
}

export const hostName = () => {
  // Create a new Date object with the same year and month as the input date, but with day set to 1
  // const baseURL = 'http://localhost:8888' // ***LOCAL UAT*** 
  // const baseURL = 'http://192.168.8.112:8888' // ***LOCAL UAT*** 
  // const baseURL = 'http://192.168.1.8:8888' // ***LOCAL UAT*** 
  // const baseURL = 'http://150.95.31.23:8003' // ***PRODUCTION CHITHANH*** 
  // const baseURL = 'http://150.95.31.23:8006' // ***PRODUCTION laofriend*** 
  // const baseURL = 'http://150.95.31.23:8012' // ***DEMO*** 
  // const baseURL = 'http://150.95.31.23:8005' // ***PRODUCTION OBEE*** 
  // const baseURL = 'http://150.95.31.23:8009' // ***PRODUCTION JNONG*** 
  // const baseURL = 'http://150.95.31.23:8010' // ***PRODUCTION PEEAIR2024*** 
  // const baseURL = 'http://150.95.31.23:8011' // ***PRODUCTION Little boutique2024*** 
  const baseURL = 'http://150.95.31.23:8013' // ***PRODUCTION Tonoo*** 
  // const baseURL = 'http://150.95.31.23:8101' // ***PRODUCTION Woody*** 
  // const baseURL = 'http://150.95.31.23:8004' // ***ONLINE UAT*** 
  // return baseURL;
  // let baseURL = `http://150.95.31.23:${process.env.API_PORT}`;

  // switch (process.env.NODE_ENV) {
  //   case 'production':
  //     baseURL = 'http://150.95.31.23:8011'; // ***PRODUCTION Little boutique2024***
  //     break;
  //   case 'uat':
  //     baseURL = 'http://150.95.31.23:8005'; // ***PRODUCTION OBEE*** (replace with your UAT URL)
  //     break;
  //   case 'demo':
  //     baseURL = 'http://150.95.31.23:8007'; // ***DEMO*** (replace with your demo URL)
  //     break;
  //   // Add more cases for different environments if needed
  //   default:
  //     baseURL = 'http://localhost:8888'; // Default for local development
  // }

  return baseURL;
}
export const mainCompanyInfo = () => {
  // Create a new Date object with the same year and month as the input date, but with day set to 1
  const info = {
    // name: 'PEEAIR4',
    // tel: '02091993749',
    // whatsapp: '+8562091993749',

    // name: 'CHITHANH',
    // tel: '02023378899',
    // whatsapp: '+8562023378899',
    // imageUrl: '',
    // imageName: '',
    // env: ''

    name: 'Tonoo',
    tel: '02023378899',
    whatsapp: '+8562023378899',
    imageUrl: '',
    imageName: '',
    env: ''

    // name: 'Little boutique',
    // tel: '020 58715651',

    // name: 'Woody3',
    // tel: '020 29809752',

    // name: 'DEMO',
    // tel: '020 9999999',
    // whatsapp: '+8562023378899',
    // imageUrl: '',
    // imageName: '',
    // env: ''
  }
  return info;
}
export const dayCount = (fromDate) => {
  const sqlTojsDate = fromDate.split('-')[1] + '/' + fromDate.split('-')[2] + '/' + fromDate.split('-')[0]
  const date1 = new Date(sqlTojsDate);
  const date2 = new Date();
  const difference = date2.getTime() - date1.getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}
export const getNextDate = (startDate, days) => {
  console.log("DATE =>", startDate, " to=> ", days);
  const startDateObject = new Date(startDate.split("T")[0])
  const nextDate = new Date(startDate.split("T")[0]);
  nextDate.setDate(startDateObject.getDate() + days);
  return nextDate;
}

export const generateColorShades = (baseColor) => {
  // Convert the base color to an RGB array
  let rgbBase = hexToRgb(baseColor);

  // Calculate the step size for each shade
  let step = Math.floor(255 / 4);

  // Initialize an empty array to store the shades
  let shades = [];

  // Generate 5 shades, starting with the lightest
  for (let i = 0; i < 5; i++) {
    // Calculate the RGB values for this shade
    let r = Math.max(0, rgbBase[0] - i * step);
    let g = Math.max(0, rgbBase[1] - i * step);
    let b = Math.max(0, rgbBase[2] - i * step);

    // Convert the RGB values back to a hex color code and add it to the array
    shades.push(rgbToHex(r, g, b));
  }

  return shades;
}

// Helper functions to convert between RGB and hex color codes
function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex
}
export const replaceAll = (str, find, replace) => {
  if (undefined == str) return
  return str.toString().replace(new RegExp(find, 'g'), replace);
}


export const confirmSwal = (swal, message, callbackFunc) => {
  // 01532B, D00505
  swal({
    // icon: icon,
    title: 'ກະລຸນາຢືນຢັນ',
    text: message,
    confirmButtonText: 'ຢືນຢັນ',
    confirmButtonColor: '#01532B',
    showCancelButton: true,
    cancelButtonText: 'ອອກ',
    cancelButtonColor: '#D00505',
  }).then((result) => {
    if (result.isConfirmed) {
      callbackFunc()
      // User clicked the "Yes, delete it!" button
      // Perform the deletion action here
    } else {
      // User clicked the "Cancel" button
      // Do nothing or show a different message
    }
  });
}
