export const defaultTicket = (params) => {
    const {
        productCart,
        findAllProduct,
        formatNumber,
        discount,
        currencyList,
        grandTotal,
        companyLogo,
        lastTransactionSaleHeaderId,
        currentTerminal,
        user,
        ticketCommon,
        currentPaymentCode,
        cashReceived,
        changes
    } = params;

    let txnListHtml = "";
    for (const iterator of productCart) {
        const product = findAllProduct.find((el) => el.id == iterator.id);
        const quantity = iterator.qty;
        const total = iterator.qty * iterator.localPrice;

        txnListHtml += `
            <div class="ticket">
                <div class="product-name">${product.pro_name}</div>
                <div class="price">${formatNumber(total)}</div>
            </div>
            <div class="product-name">${quantity} X ${formatNumber(iterator.localPrice)}</div>
            <br>
        `;
    }

    const discountHtml = `
        <div class="ticket">
            <div class="product-name">ສ່ວນຫລຸດ</div>
            <div class="price"> - ${formatNumber(discount)}</div>
        </div>
    `;

    const today = new Date();
    let totalHtml = "";
    for (const iterator of currencyList) {
        totalHtml += `
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-footer">${iterator.code} ${formatNumber((grandTotal - discount) / iterator.rate)}</div>
            </div>
        `;
    }

    const windowContent = `
        ${ticketCommon.header}
        <body>
            <h3>ໃບຮັບເງິນ / Receipt ${companyLogo}</h3>
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="flex: 0 0 auto;">
                    <img src="${companyLogo}" alt="Logo" width="100" height="100">
                </div>
                <div style="flex: 1; text-align: right;">
                    <h5>ວັນທີ: ${today.toLocaleString()}</h5>
                    <h5>ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
                    <h5>ເບີໂທຮ້ານ: ${currentTerminal.location.company.tel}</h5>
                    <h5>ຜູ້ຂາຍ: ${user.cus_name}</h5>
                </div>
            </div>
            <hr style="margin-top: 20px;">
            ${txnListHtml}
            ${discount > 0 ? discountHtml : ""}
            <hr>
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${currentPaymentCode}</h5></div>
            </div>
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-total"><h5>ຮັບຊຳລະ: ${formatNumber(cashReceived)}</h5></div>
            </div>
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-total"><h5>ເງິນທອນ: ${changes}</h5></div>
            </div>
            ${totalHtml}
            <h2 style="text-align: center; margin-top: 50px;">THANK YOU</h2>
        </body>
    `;

    const printWin = window.open("", "", "left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0");
    printWin.document.open();
    printWin.document.write(windowContent);

    setTimeout(() => {
        printWin.print();
        printWin.close();
    }, 1000);
};

export const customerTicket = (params) => {
    const {
        productCart,
        findAllProduct,
        formatNumber,
        discount,
        currencyList,
        grandTotal,
        companyLogo,
        lastTransactionSaleHeaderId,
        currentTerminal,
        user,
        ticketCommon,
        currentPaymentCode,
        cashReceived,
        changes
    } = params;

    let txnListHtml = "";
    for (const iterator of productCart) {
        const product = findAllProduct.find((el) => el.id == iterator.id);
        const quantity = iterator.qty;
        const total = iterator.qty * iterator.localPrice;

        txnListHtml += `
            <div class="ticket">
                <div class="product-name">${product.pro_name}</div>
                <div class="price">${formatNumber(total)}</div>
            </div>
            <div class="product-name">${quantity} X ${formatNumber(iterator.localPrice)}</div>
            <br>
        `;
    }

    const discountHtml = `
        <div class="ticket">
            <div class="product-name">ສ່ວນຫລຸດ</div>
            <div class="price"> - ${formatNumber(discount)}</div>
        </div>
    `;

    const today = new Date();
    let totalHtml = "";
    for (const iterator of currencyList) {
        totalHtml += `
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-footer">${iterator.code} ${formatNumber((grandTotal - discount) / iterator.rate)}</div>
            </div>
        `;
    }

    const windowContent = `
        ${ticketCommon.header}
        <body>
            <h3>ໃບຮັບເງິນ / Receipt</h3>
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="flex: 0 0 auto;">
                    <img src="${companyLogo}" alt="Logo" width="100" height="100">
                </div>
                <div style="flex: 1; text-align: right;">
                    <h5>ວັນທີ: ${today.toLocaleString()}</h5>
                    <h5>ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
                    <h5>ເບີໂທຮ້ານ: ${currentTerminal.location.company.tel}</h5>
                    <h5>ຜູ້ຂາຍ: ${user.cus_name}</h5>
                </div>
            </div>
            <hr style="margin-top: 20px;">
            ${txnListHtml}
            ${discount > 0 ? discountHtml : ""}
            <hr>
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${currentPaymentCode}</h5></div>
            </div>
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-total"><h5>ຮັບຊຳລະ: ${formatNumber(cashReceived)}</h5></div>
            </div>
            <div class="ticket">
                <div class="product-name"></div>
                <div class="price-total"><h5>ເງິນທອນ: ${changes}</h5></div>
            </div>
            ${totalHtml}
            <h2 style="text-align: center; margin-top: 50px;">THANK YOU</h2>
        </body>
    `;

    const printWin = window.open("", "", "left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0");
    printWin.document.open();
    printWin.document.write(windowContent);

    setTimeout(() => {
        printWin.print();
        printWin.close();
    }, 1000);
};
