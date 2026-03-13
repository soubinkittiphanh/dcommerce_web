// ~/util/barcodePrinter.js

/**
 * Generates HTML for 2x2cm barcode
 */
export const getBarcode2by2cmHtml = (formattedPrice, barcodeImage) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${formattedPrice}
              <img src="${barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${formattedPrice}
              <img src="${barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `
}

/**
 * Generates HTML for 3x2cm barcode
 * (Note: Your original code defined this but didn't use it in the print function, 
 * but I have included it here just in case)
 */
export const getBarcode3by2cmHtml = (formattedPrice, barcodeImage) => {
  return `
      <!DOCTYPE html>
          <html>
          <head>
          <title></title>
          <style>
          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
      <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
        <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
        <img src="${barcodeImage}">
    </td>
  </tr>
</table>
</div>
</body>
</html>
`
}

/**
 * Generates HTML for Normal barcode
 */
// export const getBarcodeNormalHtml = (formattedPrice, barcodeImage) => {
//   return `
//           <!DOCTYPE html>
//           <html>
//           <head>
//           <title></title>
//           <style>
//           @font-face {
//             font-family: 'DM Sans';
//             font-style: normal;
//             font-weight: 400;
//             font-display: swap;
//             src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
//         }
//           *{
//             font-family: 'DM Sans';
//           }
//         </style>
//             </head>
//             <body>
//                 <div style="text-align: center;">
//                     <table style="width: 200px; text-align: center;" >
//                         <tr>
//                           <td style="width: 500px; height: 15px;font-size:8px;">
//                             ລາຄາ:${formattedPrice}
//                             </br>
//                             <img src="${barcodeImage}">
//                           </td>               
//                         </tr>
//                       </table>
//                 </div>
//             </body>
//             </html>
//         `
// }

/**
 * Generates HTML for Normal barcode optimized for 20mm * 40mm
 * Fixed horizontal centering and minimized vertical gap.
 */
export const getBarcodeNormalHtml = (formattedPrice, barcodeImage, name = '') => {
  return `
          <!DOCTYPE html>
          <html>
          <head>
          <style>
            @font-face {
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
            }
            
            @page {
              size: 40mm 20mm;
              margin: 0;
            }

            body {
              margin: 0;
              padding: 0;
              width: 40mm;
              height: 20mm;
              display: flex;
              flex-direction: column;
              justify-content: flex-start; 
              align-items: center; /* Centers items horizontally in flex */
              font-family: 'DM Sans', sans-serif;
              overflow: hidden;
              background-color: white;
            }

            .container {
              width: 40mm;
              display: block;
              text-align: center; /* Forces inline content like text to center */
              padding-top: 1mm;
            }

            .price {
              display: block;
              width: 100%;
              font-size: 10pt;
              font-weight: bold;
              text-align: center;
              line-height: 1.0; 
              margin: 0;
              padding: 0;
              white-space: nowrap;
            }

            .name {
              display: block;
              width: 100%;
              font-size: 8pt;
              font-weight: normal;
              text-align: center;
              line-height: 1.0;
              margin: 0;
              padding: 0;
              white-space: nowrap;
            }

            .barcode-img {
              display: block;
              width: 38mm;
              height: 12mm; 
              margin: -2px auto 0 auto; 
              image-rendering: pixelated;
              vertical-align: top;
            }
          </style>
          </head>
          <body>
              <div class="container">
                  <div class="price">ລາຄາ: ${formattedPrice}</div>
                  <div class="name">${name}</div>
                  <img src="${barcodeImage}" class="barcode-img">
              </div>
          </body>
          </html>
        `
}

export const executePrintWindow = (htmlContent) => {
  const printWin = window.open(
    '',
    '',
    'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
  )
  printWin.document.open()
  printWin.document.write(htmlContent)

  setTimeout(() => {
    printWin.print()
    printWin.close()
  }, 1000)
}