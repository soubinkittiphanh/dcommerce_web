// ~/util/barcodePrinter.js

/**
 * Generates HTML for 2x2cm barcode
 */
export const getBarcode2by2cmHtml = (formattedPrice, barcodeImage, currency = '') => {
  const priceDisplay = currency ? `${formattedPrice} ${currency}` : formattedPrice
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
              Price: ${priceDisplay}
              <img src="${barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              Price: ${priceDisplay}
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
export const getBarcode3by2cmHtml = (formattedPrice, barcodeImage, currency = '') => {
  const priceDisplay = currency ? `${formattedPrice} ${currency}` : formattedPrice
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
        Price:${priceDisplay}
      <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        Price:${priceDisplay}
        <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        Price:${priceDisplay}
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
 * Generates HTML for Normal barcode optimized for 20mm * 40mm
 * Fixed horizontal centering and minimized vertical gap.
 */
export const getBarcodeNormalHtml = (formattedPrice, barcodeImage, name = '', currency = '') => {
  const priceDisplay = currency ? `${formattedPrice} ${currency}` : formattedPrice
  return `
  <!DOCTYPE html>
<html>
<head>
<style>
  @font-face {
    font-family: 'DM Sans';
    src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
  }

  @page {
    size: 40mm 20mm;
    margin: 0;
  }

  body {
    margin: 0;
    width: 40mm;
    height: 20mm;
    font-family: 'DM Sans', sans-serif;

    display: flex;
    justify-content: center;  /* horizontal center */
    align-items: center;      /* vertical center */
  }

  .container {
    width: 100%;
    text-align: center;
  }

  .price {
    font-size: 7pt;
    font-weight: bold;
    line-height: 1;
    margin: 0;
  }

  .name {
    font-size: 7pt;
    line-height: 1;
    margin: 0;
  }

  .barcode-img {
    width: 40mm;
    height: 11mm;
    display: block;
    margin: 1px auto 0 auto; /* small gap from text */
  }
</style>
</head>
<body>
  <div class="container">
    <div class="price">Price: ${priceDisplay}</div>
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