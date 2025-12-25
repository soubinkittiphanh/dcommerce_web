import Swal from 'sweetalert2'
// import api from './api'
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
  // Use 'en-US' or another specific locale to ensure consistent formatting,
  // especially for the decimal separator ('.') and thousands separator (',').
  // The options object ensures exactly 2 digits after the decimal point.
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
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

export const getLocalDate = (utcDateString) => {
  const localDate = new Date(utcDateString)
  return localDate.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }) // "23/12/2025, 19:37:20"
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

// UPDATED: Get today's date in local timezone (not UTC)
export const today = (() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
})();

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

// UPDATED: Convert JS Date to MySQL date format using LOCAL timezone
export const jsDateToMysqlDate = (jsDate) => {
  // Use local timezone methods (not UTC)
  let year = jsDate.getFullYear();
  let month = jsDate.getMonth() + 1;
  let day = jsDate.getDate();
  let hour = jsDate.getHours();
  let minute = jsDate.getMinutes();
  let second = jsDate.getSeconds();

  // Format with leading zeros
  const formattedMonth = String(month).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');
  const formattedHour = String(hour).padStart(2, '0');
  const formattedMinute = String(minute).padStart(2, '0');
  const formattedSecond = String(second).padStart(2, '0');

  // Return date only (remove time if not needed)
  return `${year}-${formattedMonth}-${formattedDay}`;
  
  // If you need datetime format, use this instead:
  // return `${year}-${formattedMonth}-${formattedDay} ${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

export const mysqlDateToDateObject = (mysqlDate) => {
  // *********** this function will return date object from mysql date *********** //
  const dateObj = new Date(mysqlDate.split("T")[0]);
  return dateObj;
}

// UPDATED: Get first day of current month in LOCAL timezone
export const getFirstDayOfMonth = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  console.log("Date found => ", firstDayOfMonth);
  
  // Use local timezone methods
  const year = firstDayOfMonth.getFullYear();
  const month = String(firstDayOfMonth.getMonth() + 1).padStart(2, '0');
  const day = String(firstDayOfMonth.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

// UPDATED: Get date range for last 6 months using LOCAL timezone
export const firstAndLastDateOfLast6Months = () => {
  const today = new Date();
  
  // Get date 6 months ago
  const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, 1);
  
  // Format start date (6 months ago, first day of that month) - LOCAL TIME
  const startYear = sixMonthsAgo.getFullYear();
  const startMonth = String(sixMonthsAgo.getMonth() + 1).padStart(2, '0');
  const startDate = `${startYear}-${startMonth}-01`;
  
  // Format end date (today) - LOCAL TIME
  const endYear = today.getFullYear();
  const endMonth = String(today.getMonth() + 1).padStart(2, '0');
  const endDay = String(today.getDate()).padStart(2, '0');
  const endDate = `${endYear}-${endMonth}-${endDay}`;

  console.log(`LAST 6 MONTHS RANGE: ${startDate} to ${endDate}`);
  return { startDate, endDate };
};

// UPDATED: Alternative version using helper functions
export const firstAndLastDateOfLast6MonthsMySQL = () => {
  const today = new Date();
  
  // Get date 6 months ago
  const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, 1);
  
  // Format using local timezone
  const startYear = sixMonthsAgo.getFullYear();
  const startMonth = String(sixMonthsAgo.getMonth() + 1).padStart(2, '0');
  const startDate = `${startYear}-${startMonth}-01`;
  
  const endYear = today.getFullYear();
  const endMonth = String(today.getMonth() + 1).padStart(2, '0');
  const endDay = String(today.getDate()).padStart(2, '0');
  const endDate = `${endYear}-${endMonth}-${endDay}`;

  console.log(`LAST 6 MONTHS RANGE (MySQL): ${startDate} to ${endDate}`);
  return { startDate, endDate };
};

// UPDATED: Get current year date range using LOCAL timezone
export const firstAndLastDateOfCurrentYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  console.log(`THIS YEAR IS ${year} ${today}`);
  
  const startDate = getMySQLDateOfFirstDayOfYear();
  const endDate = getMySQLDateOfLastDayOfYear();
  
  console.log(`THIS YEAR IS ${startDate} ${endDate}`);
  return { startDate, endDate };
}

// UPDATED: Get first day of year in LOCAL timezone
export const getMySQLDateOfFirstDayOfYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1); // January 1st
  
  // Use local timezone methods
  const month = String(firstDayOfYear.getMonth() + 1).padStart(2, '0');
  const day = String(firstDayOfYear.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

// UPDATED: Get last day of year in LOCAL timezone
export const getMySQLDateOfLastDayOfYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const lastDayOfYear = new Date(year, 11, 31); // December 31st
  
  // Use local timezone methods
  const month = String(lastDayOfYear.getMonth() + 1).padStart(2, '0');
  const day = String(lastDayOfYear.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
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
.price-footer {
float: right;
font-size: 14px;
font-weight: bold;
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

// UPDATED: Calculate days difference using LOCAL timezone
export const dayCount = (fromDate) => {
  // Convert SQL date to local date object
  const [year, month, day] = fromDate.split('-');
  const date1 = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const date2 = new Date(); // Current date in local timezone
  
  // Calculate difference in milliseconds
  const difference = date2.getTime() - date1.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  
  return totalDays;
}

// UPDATED: Get next date using LOCAL timezone
export const getNextDate = (startDate, days) => {
  console.log("DATE =>", startDate, " to=> ", days);
  
  // Parse the date (handle both ISO string and date-only formats)
  const dateString = startDate.split("T")[0];
  const [year, month, day] = dateString.split('-');
  const startDateObject = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  
  // Create next date
  const nextDate = new Date(startDateObject);
  nextDate.setDate(nextDate.getDate() + days);
  
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
    confirmButtonColor: 'primary',
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

// BONUS: Additional timezone-aware utility functions

// Get current date in specific timezone
export const getTodayInTimezone = (timezone = 'Asia/Vientiane') => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return formatter.format(now); // Returns YYYY-MM-DD format
}

// Convert any date to local timezone MySQL format
export const dateToLocalMysqlFormat = (date) => {
  const localDate = new Date(date);
  const year = localDate.getFullYear();
  const month = String(localDate.getMonth() + 1).padStart(2, '0');
  const day = String(localDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Debug timezone information
export const getTimezoneInfo = () => {
  const now = new Date();
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    localTime: now.toString(),
    utcTime: now.toUTCString(),
    isoString: now.toISOString(),
    localDateString: dateToLocalMysqlFormat(now)
  };
}