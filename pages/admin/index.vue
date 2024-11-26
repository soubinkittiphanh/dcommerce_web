<template>
    <div style="background: #EFF2F9;" class="ma-0">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
            <v-card>
                <v-card-title>ເລືອກ Terminal</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-radio-group v-model="terminalSelected" column>
                        <v-radio v-for="terminal in findAllTerminal" :key="terminal.id"
                            :label="terminal.name + ' - ' + terminal.description" :value="terminal.id"></v-radio>
                        <!-- <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio> -->
                    </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary" rounded variant="text" @click="chooseTerminal">
                        ເລືອກ
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- <h1>Dash board</h1> -->
        <div class="mb-1">
            <v-card class="pa-4" style="background-color: transparent;">
                <v-card-title style="font-weight: bold;font-family: Arial, Helvetica, sans-serif;">
                    SHORTCUT
                </v-card-title>
                <v-row>
                    <v-col :cols="12">
                        <div class="row">
                            <div v-for="(item, index) in menus" :key="index"
                                class="col-12 col-md-4 col-sm-6 col-xs-6 text-center">
                                <Menu :title="item.title" :icon="item.icon" :path="item.path">
                                    <template v-slot:iconSlot>
                                        <img :src="item.svgIcon" height="80">
                                    </template>
                                </Menu>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="mb-1">
            <v-card class="pa-1" style="background-color: transparent;">
                <v-card-title style="font-weight: bold;font-family: Arial, Helvetica, sans-serif;">
                    OVERVIEW
                </v-card-title>
                <v-row>
                    <v-col :cols="12">
                        <div class="row">
                            <div v-for="(item, index) in menusOverview" :key="index"
                                class="col-12 col-md-4 col-sm-6 col-xs-6">
                                <MenuOverview :title="item.title" :icon="item.icon" :path="item.path"
                                    :total="item.total">
                                </MenuOverview>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="mb-2 pa-0">
            <!-- <v-card  >
                <v-card-text class="m-0"> -->
            <v-row class="p-0">
                <v-col cols="6">
                    <!-- <card-grouping>
                        <template v-slot:slot1>
                            <card-on-top :title="options.labels[0]" :value="numberFormatter(series[0])" color="#E6F7FF">
                                <template v-slot:icon>
                                    <v-icon color="#51A5EB">mdi-receipt-text</v-icon>
                                </template>
                            </card-on-top>
                        </template>
                        <template v-slot:slot2>
                            <card-on-top :title="options.labels[1]" :value="numberFormatter(series[1])" color="#FEF0ED">
                                <template v-slot:icon>
                                    <v-icon color="#F7C3B8">mdi mdi-truck-cargo-container</v-icon>
                                </template>
                            </card-on-top>
                        </template>
                        <template v-slot:slot3>
                            <card-on-top :title="options.labels[2]" :value="numberFormatter(series[2])" color="#E7F1F2">
                                <template v-slot:icon>
                                    <v-icon color="#518F8A">mdi mdi-currency-usd</v-icon>
                                </template>
                            </card-on-top>
                        </template>
                        <template v-slot:slot4>
                            <card-on-top :title="options.labels[3]" :value="numberFormatter(series[3])" color="#FBE8EA">
                                <template v-slot:icon>
                                    <v-icon color="#C37D85">mdi mdi-file-document-refresh</v-icon>
                                </template>

                            </card-on-top>
                        </template>
                    </card-grouping> -->
                </v-col>
                <v-col cols="3">
                    <!-- <v-card @click="$router.push('/admin/minstock')">

                        <v-card-title>ລາຍການສິນຄ້າ ໃຫ້ໝົດ</v-card-title>
                        <v-card-text>
                            <v-chip v-for="item in minProductList" :key="item.pro_id" class="ma-2" color="red"
                                text-color="white">
                                {{ item.pro_name }} -
                                <span class="mdi mdi-tag-multiple-outline"></span>
                                <v-icon start icon="mdi-label" style="font-weight: bold;"> {{ item.pro_card_count
                                }}</v-icon>



                            </v-chip>
                        </v-card-text>
                    </v-card> -->
                    <!-- <v-card class="mx-auto" max-width="300">
                        <v-list :items="items" item-title="name" item-value="id"></v-list>
                    </v-card> -->
                    <!-- <v-card class="mx-auto" max-width="300">
                        <v-list :items="minProductList" item-title="pro_name" item-value="pro_id"></v-list>
                    </v-card> -->
                </v-col>
                <v-col cols="3">

                </v-col>
            </v-row>
            <!-- </v-card-text>
            </v-card> -->
        </div>
        <!-- <div>
            <v-row>
                <v-col :cols="6">
                    ....
                </v-col>
                <v-col :cols="6">
                    ....
                </v-col>
            </v-row>
        </div> -->
        <div class="mb-1">
            <v-row>
                <v-col cols="6" md="6" sm="6" xl="6">
                    <v-card>
                        <div ref="chart" style="width: 100%; height: 400px;"></div>
                        <!-- <apexchart :options="pieChartOption" :series="pieChartOption.barSeries"></apexchart> -->
                    </v-card>
                </v-col>
                <v-col cols="6" md="6" sm="6" xl="6" v-if="dailyState">
                    <v-card>
                        <apexchart :options="barOptionsForDailyStat" :series="barSeriesForDailyStat"></apexchart>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div class="mb-1" v-if="dailyState">
            <v-row>
                <v-col cols="6" md="6" sm="6" xl="6">
                    <v-card>
                        <apexchart :options="barOptionsForMonthlyStat" :series="barSeriesForMonthlyStat"></apexchart>
                    </v-card>
                </v-col>

            </v-row>
        </div>
        <div :key="minstockComponentsKey">
            <MinStockCard v-if="currentSelectedLocation" />
        </div>

    </div>
</template>

<script>
import { generateColorShades, firstAndLastDateOfCurrentYear, getFirstDayOfMonth, today, getFormatNum } from '~/common'
import CardOnTop from '~/components/dashboard/CardOnTop.vue'
import CardGrouping from '~/components/dashboard/CardGrouping.vue'
import CampaignCard from '~/components/card/campaignCard.vue'
import MinStockCard from '~/components/minStockCard'
import MenuOverview from '~/components/menuOverview'
import { mapActions, mapGetters } from 'vuex'
// import ECharts from 'echarts'
// import { ECharts } from 'echarts'
import * as ECharts from 'echarts';

export default {
    components: { CardOnTop, CampaignCard, CardGrouping, MenuOverview, MinStockCard },
    middleware: 'auths',
    data() {
        return {
            terminalDialog: false,
            terminalSelected: null,
            // displayMinstock:false,
            barOptionsForMonthlyStat: {
                colors: [],
                chart: {
                    type: 'line',
                    height: 'auto'
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }, dataLabels: {
                        style: {
                            fontSize: '12px',
                        },
                        formatter: function (val) {
                            return val.toFixed(2);
                        },
                    },
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: [
                    ],
                    style: {
                        fontFamily: 'noto sans lao',
                        fontSize: '16',
                        fontWeight: 'bold'
                    }

                }, yaxis: {
                    title: {
                        text: 'Sales (in thousands)'
                    },
                    labels: {
                        formatter: function (value) {
                            return value.toLocaleString(); // use toLocaleString() method to format numbers with 1000 separators
                        }
                    }
                },
                title: {
                    text: 'ສະຖິຕິການຂາຍໃນປີ',
                    style: {
                        fontFamily: 'noto sans lao',
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            barSeriesForMonthlyStat: [{
                data: []

            }],
            menus: [
                {
                    title: 'POS',
                    // icon: 'mdi-network-pos',
                    svgIcon: require('~/assets/icons/cashier_2.svg'),
                    path: '/pos/minimart',
                },
                {
                    title: 'Invoice',
                    // icon: 'mdi-file-document-multiple',
                    svgIcon: require('~/assets/icons/invoice.svg'),
                    path: '/admin/ordersFromPos'
                },
                {
                    title: 'ລູກຫນີ້',
                    // icon: 'mdi-credit-card-refresh-outline',
                    svgIcon: require('~/assets/icons/pay-card.svg'),
                    path: '/admin/ordersFromPosCredit'
                },
                // {
                //     title: 'Stock',
                //     // icon: 'mdi-warehouse',
                //     svgIcon: require('~/assets/icons/stock.svg'),
                //     path: '/admin/product/productlist'
                // },
                {
                    // title: 'ລາຍການ ການຂາຍ',
                    title: 'ລາຍງານ ລູກຄ້າຕິດຫນີ້ ', //231001 CR By Bae
                    // icon: 'mdi-warehouse',
                    svgIcon: require('~/assets/icons/responsive.svg'),
                    // path: '/admin/ordersFromPos'
                    path: '/admin/ordersFromPosSummaryByCustomer' //231001 CR By Bae
                },
                {
                    title: 'Customer',
                    // icon: 'mdi-warehouse',
                    svgIcon: require('~/assets/icons/patient.svg'),
                    path: '/admin/client'
                },
                // {
                //     title: 'ຄົ້ນຫາອິນວອຍຄ້າງຈ່າຍ',
                //     // icon: 'mdi-warehouse',
                //     svgIcon: require('~/assets/icons/account-clock.svg'),
                //     path: '/admin/ordersFromPosSummaryByCustomer'
                // },
            ],
            yearlySale: [],
            menusOverview: [
                {
                    title: 'ຍອດຂາຍມື້ນິ (KIP)',
                    icon: 'mdi-calendar',
                    path: '',
                    total: '0',
                },
                {
                    title: 'ຍອດຂາຍເດືອນນີ້ - ' + '( ' + new Date().toDateString().split(" ")[1] + '/' + new Date().toDateString().split(" ")[3] + ' ) KIP',
                    icon: 'mdi-calendar',
                    path: '',
                    total: '0',
                },
                {
                    title: 'ຍອດຂາຍໝົດປີ - ' + new Date().toDateString().split(" ")[3] + ' KIP',
                    icon: 'mdi-calendar',
                    path: '',
                    total: '0',
                },

            ],
            saleValue: 0,
            // minProductList: [{
            //     pro_name:'',
            //     pro_id:1
            // }],

            minstockComponentsKey: 1,
            isloading: false,
            dailyState: false,
            series: [0, 0],
            options: {
                chart: {
                    type: 'donut',
                }, responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                labels: ['CASH', 'COD'],
                title: {
                    text: 'ອໍເດີ ປະເພດ'
                },

                annotations: {
                    points: [
                    ]
                },
            },
            peeair: {
                series: [],
                options: {
                    colors: ['#FF4560', '#775DD0'],
                },
            },

            pieChartOption: {
                // plotOptions: {
                //     pie: {
                //         customScale: 0.9
                //     }
                // },
                title: {
                    text: 'ໝວດສິນຄ້າຂາຍດີ',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                    },
                    style: {
                        fontFamily: 'noto sans lao',
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                },
                labels: [
                ],

                barSeries: [],
                // theme: {
                //     monochrome: {
                //         enabled: true,
                //         color: '#01532B',
                //     }
                // },
                chart: {
                    type: 'pie',
                    height: 'auto',
                },
            },
            barSeriesForDailyStat: [{
                data: []

            }],
            //ກາບຍອດຂາຍແຕ່ລະມື ເປັນ ຮູບທຽນ
            barOptionsForDailyStat: {
                colors: [],
                chart: {
                    type: 'line',
                    height: 'auto'
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }, dataLabels: {
                        style: {
                            fontSize: '12px',
                        },
                        formatter: function (val) {
                            return val.toFixed(2);
                        },
                    },
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: [
                    ],
                    style: {
                        fontFamily: 'noto sans lao',
                        fontSize: '16',
                        fontWeight: 'bold'
                    }

                }, yaxis: {
                    title: {
                        text: 'Sales (in thousands)'
                    },
                    labels: {
                        formatter: function (value) {
                            return value.toLocaleString(); // use toLocaleString() method to format numbers with 1000 separators
                        }
                    }
                },
                title: {
                    text: 'ສະຖິຕິການຂາຍໃນເດືອນ',
                    style: {
                        fontFamily: 'noto sans lao',
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            }
        };
    },
    async created() {
        await this.loadSaleStatistic()
        this.generateDailyStatisticSale()
        this.init();
    }, async mounted() {

        await this.loadTopSale()
        await this.paymentGroup()
    },
    computed: {
        ...mapGetters(['findAllTerminal', 'findSelectedTerminal', 'currentSelectedLocation', 'findAllLocation']),
        totalSaleYTD() {
            const totalPrice = this.yearlySale.reduce((total, item) => {
                // discountTotal+=item.discount
                // return total + item.total - item.discount;//OLD VERSION 240106
                // return total + item.total; //Total field already exclude discount
                let rider_fee = 0;
                let cod_fee = 0;
                if (item.dynamic_customer) {
                    rider_fee = item.dynamic_customer.rider_fee
                    cod_fee = item.dynamic_customer.cod_fee
                }
                return total += item.total + rider_fee - cod_fee
            }, 0);
            console.log(`YTD SALE ${totalPrice}`);
            return getFormatNum(totalPrice)
        },
        totalSaleMTD() {
            console.log(`====> TD ${today.split('-')[1]}`);
            const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == today.split('-')[1])
            const totalPrice = monthSaleList.reduce((total, item) => {
                // discountTotal+=item.discount
                // return total + item.total - item.discount; //OLD VERSION 240106
                // return total + item.total; //Total field already exclude discount
                let rider_fee = 0;
                let cod_fee = 0;
                if (item.dynamic_customer) {
                    rider_fee = item.dynamic_customer.rider_fee
                    cod_fee = item.dynamic_customer.cod_fee
                }
                return total += item.total + rider_fee - cod_fee
            }, 0);
            console.log(`MTD SALE ${totalPrice}`);
            return getFormatNum(totalPrice)
        },
        txnSaleMTD() {
            const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == today.split('-')[1])
            const dailyTransactions = monthSaleList.reduce((acc, transaction) => {
                const date = transaction.bookingDate;
                const index = acc.findIndex((item) => item.date === date);
                let rider_fee = 0;
                let cod_fee = 0;
                if (transaction.dynamic_customer) {
                    rider_fee = transaction.dynamic_customer.rider_fee
                    cod_fee = transaction.dynamic_customer.cod_fee
                }
                if (index === -1) {
                    acc.push({ date, transactions: [transaction], totalSale: transaction.total + rider_fee - cod_fee });
                } else {
                    acc[index].transactions.push(transaction);
                    acc[index].totalSale += transaction.total + rider_fee - cod_fee;
                }
                return acc;
            }, []);

            return dailyTransactions;
        },
        totalSaleTD() {
            const todaySaleList = this.yearlySale.filter(el => el.bookingDate == today)
            const totalPrice = todaySaleList.reduce((total, item) => {
                // discountTotal+=item.discount
                // return total + item.total - item.discount; //OLD VERSION 240106
                // return total + item.total; //Total field already exclude discount
                let rider_fee = 0;
                let cod_fee = 0;
                if (item.dynamic_customer) {
                    rider_fee = item.dynamic_customer.rider_fee
                    cod_fee = item.dynamic_customer.cod_fee
                }
                return total += item.total + rider_fee - cod_fee

            }, 0);
            console.log(`TD SALE ${totalPrice}`);
            return getFormatNum(totalPrice)
        },
    },
    methods: {
        ...mapActions(['setSelectedTerminal', 'setSelectedLocation', 'initProduct']),
        async chooseTerminal() {
            // this.displayMinstock = false
            this.setSelectedTerminal(this.terminalSelected)
            console.log(`LOCATION LIST ${this.findAllLocation.length}`);
            const location = this.findAllLocation.find(el => el.id == this.findAllTerminal.find(el => el.id == this.terminalSelected)['locationId'])
            if (!location) {
                console.log(`LOCATION IS !TRUE`);
            }
            console.log(`LOCATION IS ${location}`);
            console.log(`LOCATION FOUND ${location['id']}`);

            this.setSelectedLocation(location)
            console.log(`Location id ${location.id}`);
            this.minstockComponentsKey += 1;
            // this.displayMinstock = true
            this.terminalDialog = false
            await this.loadProduct(location.id)
        },
        async loadProduct(locationId) {
            this.isloading = true
            this.productList = [];
            await this.$axios
                .get(`product_f/${locationId}`)
                .then((res) => {
                    this.initProduct(res.data)
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isloading = false
        },
        numberFormatter(value) {
            return getFormatNum(value)
        },

        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        async loadTopSale() {
            this.isloading = true
            await this.$axios
                // .get('api/topsale/?top=' + 5) // For delivery sale system
                .get('api/topsaleMinimart/?top=' + 5)
                .then((res) => {
                    // ************** PIE FROM ECHARTS *************//
                    const chart = ECharts.init(this.$refs.chart)
                    const option = {
                        title: {
                            text: 'ສິນຄ້າຂາຍດີຕາມໝວດ',
                            subtext: '-',
                            left: 'center',
                            textStyle: {
                                fontFamily: 'noto sans lao'
                            }
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left'
                        },
                        series: [
                            {
                                name: 'Access From',
                                type: 'pie',
                                radius: '50%',
                                data: [
                                    // { value: 0, name: 'Search Engine' },
                                    // { value: 0, name: 'Direct' },
                                    // { value: 0, name: 'Email' },
                                    // { value: 0, name: 'Union Ads' },
                                    // { value: 0, name: 'Video Ads' }
                                ],
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    // ************** PIE FROM ECHARTS *************//
                    console.log("Data ", res.data[0]);
                    res.data.map((el) => {
                        const entry = {
                            name: el.categ_name + ' ' + getFormatNum(el.total_sale),
                            value: +el.sale_count
                        }
                        option.series[0].data.push(entry)
                    })


                    chart.setOption(option)

                }).catch(err => {
                    console.log('error', err);
                });
            this.isloading = false
        },
        // http://localhost:8080/api/sale/sumsaleYearly?date={"startDate":"2023-01-01","endDate":"2023-12-31"}

        async loadSaleStatistic() {
            const date = firstAndLastDateOfCurrentYear()
            this.isloading = true
            await this.$axios
                .get('api/sale/sumsaleYearly', { params: { date } })
                .then((res) => {
                    this.yearlySale = []
                    for (const iterator of res.data) {
                        this.yearlySale.push(iterator)
                    }
                    this.menusOverview[2]['total'] = this.totalSaleYTD
                    this.menusOverview[1]['total'] = this.totalSaleMTD
                    this.menusOverview[0]['total'] = this.totalSaleTD
                    console.log("Lend of sale yearly " + this.yearlySale.length);
                    this.monthGroupSale()
                }).catch(err => {
                    console.log('error', err);
                });
            this.isloading = false
        },
        async generateDailyStatisticSale() {
            this.isloading = true
            for (const iterator of this.txnSaleMTD) {
                this.barOptionsForDailyStat.colors.push(this.getRandomColor) // ******* Original
                this.barSeriesForDailyStat[0].data.push(iterator['totalSale'])
                this.barOptionsForDailyStat.xaxis.categories.push(iterator['date'])
            }
            this.dailyState = true
            this.isloading = false
        },
        monthGroupSale() {
            let groupedTransactions = {};

            this.yearlySale.forEach(transaction => {
                const date = new Date(transaction.bookingDate);
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                const key = `${year}-${month.toString().padStart(2, '0')}`;

                if (!groupedTransactions[key]) {
                    groupedTransactions[key] = { total: 0, transactions: [] };
                }

                let rider_fee = 0;
                let cod_fee = 0;
                if (transaction.dynamic_customer) {
                    rider_fee = transaction.dynamic_customer.rider_fee
                    cod_fee = transaction.dynamic_customer.cod_fee
                }
                groupedTransactions[key].total += transaction.total + rider_fee - cod_fee;
                groupedTransactions[key].transactions.push(transaction);
                console.log('datat add===>');
            });
            console.log('====> my chart' + groupedTransactions);
            const keyList = Object.keys(groupedTransactions)
            for (const iterator of keyList) {
                console.log("*****ETERATOR*****" + iterator);
                this.barOptionsForMonthlyStat.colors.push(this.getRandomColor) // ******* Original
                this.barSeriesForMonthlyStat[0].data.push(groupedTransactions[iterator]['total'])
                this.barOptionsForMonthlyStat.xaxis.categories.push(iterator)
            }
            // for (const key in groupedTransactions) {
            //     console.log(`Month: ${groupedTransactions['2023-07']}`);
            //     console.log(`Total: ${groupedTransactions[key].total}`);
            //     console.log("Transactions:");
            //     groupedTransactions[key].transactions.forEach(transaction => {
            //         console.log(`  ID: ${transaction.id}, Date: ${transaction.date}, Amount: ${transaction.amount}`);
            //     });
            //     console.log("--------------------");
            // }
            return groupedTransactions;
        },
        async paymentGroup() {
            this.isloading = true
            await this.$axios
                .get('api/cod_n_cash_report')
                .then((res) => {
                    this.series = res.data.series;
                    this.options.labels = res.data.labels
                }).catch(err => {
                    console.log('error', err);
                });
            this.isloading = false
        },
        init() {
            console.log("Init function");
            const series2 = [66, 33]
            this.peeair.options = {
                title: {
                    text: 'GreenWood',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                    },
                },
                labels: [
                    ` COD ${series2[0]} ບິນ `,
                    ` ORDER ${series2[1]} ບິນ`,
                ],
                chart: {
                    type: 'pie',
                    width: '100%',
                    height: '400px',
                },

            }
            this.peeair.series = series2;
        }
    }

}
</script>
