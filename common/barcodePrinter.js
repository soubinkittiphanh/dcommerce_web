import JsBarcode from 'jsbarcode'

/**
 * Parses barcode size string (e.g. '60x30' or '40x20')
 * Returns width, height in mm and scale factor relative to 40x20
 */
export const parseBarcodeSize = (spfValue) => {
  const defaultSize = { width: 40, height: 20, scale: 1 }
  if (!spfValue) return defaultSize

  // Clean value: remove all spaces, convert to lowercase
  const cleanVal = String(spfValue).replace(/\s+/g, '').toLowerCase()
  const parts = cleanVal.split(/[x*]/)
  const width = parseFloat(parts[0]) || 40
  const height = parseFloat(parts[1]) || 20
  const scale = Math.min(width / 40, height / 20)

  return { width, height, scale }
}

/**
 * Generates base64 barcode image URL synchronously using canvas
 */
export const generateBarcodeDataUrl = (value, width = 40, height = 20) => {
  const scale = Math.min(width / 40, height / 20)
  const canvas = document.createElement('canvas')
  JsBarcode(canvas, String(value), {
    format: 'CODE128',
    displayValue: true,
    fontSize: Math.round(12 * scale),
    width: scale >= 1.5 ? 2 : 1,
    height: Math.round(13 * scale),
    margin: 5
  })
  return canvas.toDataURL()
}

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
 * Generates HTML for a batch of barcodes (roll-printer friendly with page breaks)
 */
export const getBarcodeBatchHtml = (items, sizeStr = '') => {
  let spfValue = sizeStr
  if (typeof window !== 'undefined' && window.$nuxt && window.$nuxt.$store) {
    try {
      const spfList = window.$nuxt.$store.getters.findSPF || []
      console.log('[BarcodePrint] SPF List from Vuex:', JSON.stringify(spfList))
      if (!spfValue) {
        const found = spfList.find(
          s =>
            s.code &&
            s.code.toUpperCase() === 'BARCODE.SIZE' &&
            (s.isActive === true || s.isActive === 1 || String(s.isActive).toUpperCase() === 'Y')
        )
        console.log('[BarcodePrint] Found BARCODE.SIZE record:', JSON.stringify(found))
        if (found && found.value) {
          spfValue = found.value
        }
      }
    } catch (e) {
      console.error('[BarcodePrint] Error fetching BARCODE.SIZE from SPF:', e)
    }
  }

  const { width, height, scale } = parseBarcodeSize(spfValue)
  console.log('[BarcodePrint] Parsed dimensions:', { width, height, scale, finalSpfValue: spfValue })

  const labelsHtml = items.map(item => {
    const priceDisplay = item.currency ? `${item.formattedPrice} ${item.currency}` : item.formattedPrice
    return `
      <div class="label-page">
        <div class="price">Price: ${priceDisplay}</div>
        <div class="name">${item.name || ''}</div>
        <img src="${item.barcodeImage}" class="barcode-img">
      </div>
    `
  }).join('')

  return `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Barcode Print</title>
  <style>
    @font-face {
      font-family: 'DM Sans';
      src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
    }

    @page {
      size: ${width}mm ${height}mm;
      margin: 0;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: ${width}mm;
      height: ${height}mm;
      font-family: 'DM Sans', sans-serif;
    }

    .label-page {
      width: ${width}mm;
      height: ${height}mm;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      page-break-after: always;
      break-after: page;
      overflow: hidden;
    }

    .label-page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }

    .price {
      font-size: ${7 * scale}pt;
      font-weight: bold;
      line-height: 1.1;
      margin: 0;
    }

    .name {
      font-size: ${7 * scale}pt;
      line-height: 1.1;
      margin: 0;
    }

    .barcode-img {
      width: ${width}mm;
      height: ${11 * scale}mm;
      display: block;
      margin: 1px auto 0 auto;
    }
  </style>
  </head>
  <body>
    ${labelsHtml}
  </body>
  </html>
  `
}

/**
 * Generates HTML for Normal barcode optimized for dynamic sizes configured via SPF.
 */
export const getBarcodeNormalHtml = (formattedPrice, barcodeImage, name = '', currency = '') => {
  return getBarcodeBatchHtml([{ formattedPrice, barcodeImage, name, currency }])
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