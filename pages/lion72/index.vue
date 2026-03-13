<template>
    <div>
        <!-- Transaction list -->
        <v-card class="pa-4" v-scroll-y="onScroll"
            style=" height: 42vh; overflow-y: auto; position: fixed; top: 0; left: 0; right: 0; z-index: 1;">
            <!-- Your content goes here -->
            <v-row>
                <v-col cols="6">
                    <v-card height="60" v-for="(txn, i) in oddEvenList['evenIndexList']" :key="i"
                        image="https://cdn.vuetifyjs.com/images/cards/docks.jpg" theme="dark">
                        <v-card-text>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h4>
                                        {{ txn['luckyNumber'] }} {{ txn['normal'] ? 'ລ່າງ' : 'ບົນ' }}
                                    </h4>{{ thoundsandFormatter(txn['amount']) }}
                                </div>
                                <v-btn color="warning" rounded variant="text" @click="removeTransaction(txn)">
                                    <i class="fas fa-trash"></i>
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card height="60" v-for="(txn, i) in oddEvenList['oddIndexList']" :key="i"
                        image="https://cdn.vuetifyjs.com/images/cards/docks.jpg" theme="dark">
                        <v-card-text>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h4>
                                        {{ txn['luckyNumber'] }} {{ txn['normal'] ? 'ລ່າງ' : 'ບົນ' }}
                                    </h4>{{ thoundsandFormatter(txn['amount']) }}
                                </div>
                                <v-btn color="warning" rounded variant="text" @click="removeTransaction(txn)">
                                    <i class="fas fa-trash"></i>
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </v-card>
        <!-- USER INPUT FORM -->
        <v-card style="  height: 15vh; position: fixed; left: 0; right: 0; z-index: 2; margin-top: 40vh; ">
            <!-- Your content goes here -->
            <v-card-text class="ma-0">
                <v-row>
                    <v-col class="pa-0" cols="3">
                        <h2>.</h2>
                        <v-text-field type="number" outlined v-model="luckyNumber" label="* ເລກສ່ຽງ"
                            @input="luckyNumberTypingTrigger" @focus="luckyNumberTypingTrigger">
                        </v-text-field>
                    </v-col>
                    <v-col class="pa-0" cols="3">
                        <h2>ຈຳນວນບົນ</h2>
                        <v-text-field type="number" outlined v-model="amountUp"
                            @input="amountUpTypingTrigger"></v-text-field>
                    </v-col>
                    <v-col class="pa-0" cols="3">
                        <h2>ຈຳນວນລ່າງ</h2>
                        <v-text-field type="number" outlined v-model="amount" @input="amountTypingTrigger"></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <h2>.</h2>
                        <v-btn color="primary" width="20" rounded variant="text" @click="addTransaction">
                            ເພີ່ມ
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <!-- Transaction summary  -->
        <v-card style="  height: 20vh; position: fixed; left: 0; right: 0; z-index: 2; margin-top: 55vh; ">
            <!-- Your content goes here -->
            <v-card-text>
                <v-row>
                    <v-col cols="8">
                        <h2>
                            ຍອດລວມ: {{ ticketTotal }}
                        </h2>
                    </v-col>
                    <v-col cols="4">
                        <v-btn color="primary" variant="text" @click="generateTicket">
                            <h2>
                                ລວມບິນ
                            </h2>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <!-- LuckyNumber option -->
        <v-card v-if="luckyNumberOption" @scroll="onScrollLuckyNumber" class="text-center transparent"
            style="width: 100%;overflow-y: auto; position: fixed;  left: 0; z-index: 2; bottom: 60vh; ">
            <!-- Your content goes here -->
            <v-btn color="primary" rounded variant="text" @click="selectLuckyNumber" class="ma-1">
                {{ luckyNumberOptionLable }}
            </v-btn>
            <v-btn color="primary" rounded variant="text" @click="showPrefixOption" class="ma-1">
                ເພີ່ມຫລັກ
            </v-btn>
        </v-card>
        <!-- Amount option -->
        <v-card v-if="amountOption" @scroll="onScrollAmount" class="text-center transparent"
            style="width:100%; overflow-x: auto;position: fixed; z-index: 2; bottom: 60vh;left: 0;right: 0;">
            <v-btn v-for="( op, i ) in  amountOptionForSelect " :key="i" color="primary" width="20" rounded variant="text"
                @click="selectAmount(op)" class="ma-1">
                {{ thoundsandFormatter(op) }}
            </v-btn>
        </v-card>
        <!-- Amount option up -->
        <v-card v-if="amountOptionUp" @scroll="onScrollAmountUP" class="text-center transparent"
            style="width:100%; overflow-x: auto;position: fixed; z-index: 2; bottom: 60vh;left: 0;right: 0;">
            <v-btn v-for="( op, i ) in  amountOptionForSelect " :key="i" color="primary" width="20" rounded variant="text"
                @click="selectAmountUP(op)" class="ma-1">
                {{ thoundsandFormatter(op) }}
            </v-btn>
        </v-card>
        <!-- PREFIX OPTION -->
        <v-card v-if="prefixOption" class="text-center"
            style="width:35%; overflow-y: auto; position: fixed; margin-left: 40%; z-index: 2; bottom: 60%;">
            <v-card-text>
                <v-text-field type="number" outlined v-model="prefixValue" label="* ຫລັກ">
                </v-text-field>
                <v-btn color="primary" width="20" rounded variant="text" @click="setPrefix(prefixValue)" class="ma-1">
                    ຕົກລົງ
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
  
<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
export default {
    layout: "login",
    // middleware: 'auths',
    data() {
        return {
            prefixOption: false,
            prefixValue: "",
            timeoutId: null,
            amountUpTimeoutId: null,
            luckyNumberTimeoutId: null,
            amountOptionUp: false,
            amountOption: false,
            luckyNumberOption: false,
            luckyNumberOptionForSelect: [],
            amountOptionForSelect: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
            transactionList: [
                // { luckyNumber: '00', amount: 1000, normal: true, },
            ],
            maxLength: 3,
            luckyNumber: '',
            amount: 0,
            amountUp: 0,
            screenWidth: 0,
            screenHeight: 0,
            rules: {
                maxLength: (v) => v.length <= 5 || 'Maximum length is 5 characters',
            },
        };
    },
    mounted() {
        this.getScreenSize();
        // Listen for window resize events to update the screen size dynamically
        window.addEventListener('resize', this.getScreenSize);
    },
    beforeDestroy() {
        // Remove the resize event listener when the component is destroyed
        window.removeEventListener('resize', this.getScreenSize);
    },
    computed: {
        oddEvenList() {
            const oddIndexList = [];
            const evenIndexList = [];

            this.transactionList.forEach((item, index) => {
                if (index % 2 === 0) {
                    evenIndexList.push(item);
                } else {
                    oddIndexList.push(item);
                }
            });
            return {
                oddIndexList,
                evenIndexList
            }
        },
        ticketTotal() {
            const totalPrice = this.transactionList.reduce((total, item) => {
                return total + item['amount'];
            }, 0);
            return this.thoundsandFormatter(totalPrice)
        },
        luckyNumberOptionLable() {
            let label = "";
            const lastItemIndex = this.luckyNumberOptionForSelect.length - 1;
            for (let i = 0; i < this.luckyNumberOptionForSelect.length; i++) {
                label += this.luckyNumberOptionForSelect[i];
                if (i < lastItemIndex) {
                    label += ",";
                }
            }
            return label;
        }

    },
    methods: {
        showPrefixOption() {
            this.prefixOption = true
            this.luckyNumberTypingTrigger()
        },
        amountTypingTrigger() {
            console.log(`Amount is typing...`);
            this.amountOption = true;
            this.luckyNumberOption = false;
            // Clear existing timeout
            if (this.timeoutId !== null) {
                clearTimeout(this.timeoutId);
            }

            // Set a new timeout using debounce
            this.timeoutId = setTimeout(() => {
                console.log(`******Reset auto suggest*******`);
                this.timeoutId = null;
                this.amountOption = false;
            }, 2500);
        },
        amountUpTypingTrigger() {
            console.log(`Amount up is typing...`);
            this.amountOptionUp = true;
            this.amountOption = false;
            // *********** close lucky number popup ***********
            this.luckyNumberOption = false;
            // *********** close lucky number popup ***********

            // Clear existing timeout
            if (this.amountUpTimeoutId !== null) {
                clearTimeout(this.amountUpTimeoutId);
            }

            // Set a new timeout using debounce
            this.amountUpTimeoutId = setTimeout(() => {
                console.log(`******Reset auto suggest*******`);
                this.amountUpTimeoutId = null;
                this.amountOptionUp = false;
            }, 2500);
        },
        luckyNumberTypingTrigger() {
            console.log(`LuckyNumber is typing...`);
            // this.luckyNumberOptionForSelect.length = 0;
            this.luckyNumberOption = true;
            this.amountOption = false;
            // Clear existing timeout
            if (this.luckyNumberTimeoutId !== null) {
                clearTimeout(this.luckyNumberTimeoutId);
            }

            this.luckyNumberTimeoutId = setTimeout(() => {
                console.log(`******Reset auto suggest*******`);
                this.luckyNumberTimeoutId = null
                this.luckyNumberOption = false

            }, 5000)

            // Logic to take related lucky number to option
            const foundLuckyNumberGroup = this.findLuckyNumberGrouping(this.luckyNumber.substring(this.luckyNumber.length - 2), this.luckyNumber.length);
            if (foundLuckyNumberGroup != undefined) {
                console.log(`GROUP INDEX FOUND ${foundLuckyNumberGroup.toString()}`);
                let prefix = ""
                if (this.luckyNumber.length > 2) {
                    prefix = this.luckyNumber.substring(0, this.luckyNumber.length - 2)
                    const listOptionWithPrefix = []
                    for (const iterator of foundLuckyNumberGroup) {
                        listOptionWithPrefix.push(prefix + iterator)
                    }
                    this.luckyNumberOptionForSelect = listOptionWithPrefix
                } else {
                    this.luckyNumberOptionForSelect = foundLuckyNumberGroup

                }
            }
        },
        selectAmount(amount) {
            console.log(`AMOUNT BELOW SELECTED ${amount}`);
            this.amountOption = false
            this.amount = amount
        },
        selectAmountUP(amount) {
            console.log(`AMOUNT UP SELECTED ${amount}`);
            this.amountOptionUp = false
            this.amountUp = amount
        },
        selectLuckyNumber() {
            if(this.amount < 1000 || this.amountUp < 1000) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ")
            if (this.amount < 1000) {
                // return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ")
                if (this.amountUp > 0) this.selectLuckyNumberUP()
                return
            }
            for (const iterator of this.luckyNumberOptionForSelect) {
                if (iterator.length > this.maxLength) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ")
                const existTxn = this.transactionList.find(el => el['luckyNumber'] == iterator && el['normal'] == true)
                if (existTxn != undefined) {
                    existTxn['amount'] += parseInt(this.amount, 10);
                    continue
                }
                this.transactionList.push(
                    { luckyNumber: iterator, amount: this.amount, normal: true },
                )
            }
            if (this.amountUp > 0) this.selectLuckyNumberUP()
            this.luckyNumberOption = false
        },
        selectLuckyNumberUP() {
            if (this.amountUp < 1000) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ")
            for (const iterator of this.luckyNumberOptionForSelect) {
                if (iterator.length > this.maxLength) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ")
                const existTxn = this.transactionList.find(el => el['luckyNumber'] == iterator && el['normal'] == false)
                if (existTxn != undefined) {
                    existTxn['amount'] += parseInt(this.amountUp, 10);
                    continue
                }
                this.transactionList.push(
                    { luckyNumber: iterator, amount: parseInt(this.amountUp, 10), normal: false },
                )
            }
            this.luckyNumberOption = false
        },
        getScreenSize() {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
        },
        thoundsandFormatter(val) {
            return getFormatNum(val)
        },
        setPrefix(prefixNumber) {
            const optionWithPrefix = [];
            for (const iterator of this.luckyNumberOptionForSelect) {
                optionWithPrefix.push(prefixNumber + iterator)
            }
            this.luckyNumberOptionForSelect = optionWithPrefix;
            console.log(`OPTION WITH PREFIX IS ${JSON.stringify(this.luckyNumberOptionForSelect)}`);
            // Clear existing timeout
            if (this.luckyNumberTimeoutId !== null) {
                clearTimeout(this.luckyNumberTimeoutId);
            }
            this.luckyNumberOption = true;
            this.luckyNumberTimeoutId = setTimeout(() => {
                console.log(`******Reset auto suggest*******`);
                this.luckyNumberTimeoutId = null
                this.luckyNumberOption = false
            }, 5000)
            this.prefixOption = false;
        },
        addTransaction() {
            // Dupplicate check
            if (this.amount > 0) {
                if (this.luckyNumber.length > this.maxLength) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ")
                const existTxn = this.transactionList.find(el => el['luckyNumber'] == this.luckyNumber && el['normal'] == true)
                if (existTxn != undefined) {
                    existTxn['amount'] += parseInt(this.amount, 10);
                } else {
                    this.transactionList.push(
                        { luckyNumber: this.luckyNumber, amount: this.amount, normal: true },
                    )
                }

            }
            // AMOUNT UPPER ADD
            if (this.amountUp > 0) {
                if (this.amountUp < 1000) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ")
                const existTxnUP = this.transactionList.find(el => el['luckyNumber'] == this.luckyNumber && el['normal'] == false)
                if (existTxnUP != undefined) {
                    return existTxnUP['amount'] += parseInt(this.amountUp, 10);
                }
                this.transactionList.push(
                    { luckyNumber: this.luckyNumber, amount: parseInt(this.amountUp, 10), normal: false },
                )
            }
        },
        removeTransaction(element) {
            const indexInOddList = this.transactionList.findIndex((item) => item.luckyNumber === element['luckyNumber'] && item.normal == element['normal']);
            this.transactionList.splice(indexInOddList, 1)
        },
        onScrollAmount() {
            console.log(`Amount is scrolling ...`);
            this.amountTypingTrigger()
        },
        onScrollAmountUP() {
            console.log(`Amount is scrolling ...UP`);
            this.amountUpTypingTrigger()
        },
        onScrollLuckyNumber() {
            console.log(`Lucky number is scrolling ...`);
            this.luckyNumberTypingTrigger()
        },
        onScroll() {
            // this.amountTypingTrigger()
            console.log(`ON SCROLL TRIGGER`);
        },
        findLuckyNumberGrouping(groupOf) {
            const luckyNumberGroupList = [
                ['01', '41', '81'],
                ['02', '42', '82'],
                ['03', '43', '83'],
                ['04', '44', '84'],
                ['05', '45', '85'],
                ['06', '46', '86'],
                ['07', '47', '87'],
                ['08', '48', '88'],
                ['09', '49', '89'],
                ['10', '50', '90'],
                ['11', '51', '91'],
                ['12', '52', '92'],
                ['13', '53', '93'],
                ['14', '54', '94'],
                ['15', '55', '95'],
                ['16', '56', '96'],
                ['17', '57', '97'],
                ['18', '58', '98'],
                ['19', '59', '99'],
                ['00', '20', '60'],
                ['21', '61'],
                ['22', '62'],
                ['23', '63'],
                ['24', '64'],
                ['25', '65'],
                ['26', '66'],
                ['27', '67'],
                ['28', '68'],
                ['29', '69'],
                ['30', '70'],
                ['31', '71'],
                ['32', '72'],
                ['33', '73'],
                ['34', '74'],
                ['35', '75'],
                ['36', '76'],
                ['37', '77'],
                ['38', '78'],
                ['39', '79'],
                ['40', '80']
            ]
            return luckyNumberGroupList.find(group => group.includes(groupOf))
        },
        generateTicket() {
            this.$router.push({
                path: '/lion72/ticket',
                query: { txn: this.transactionList }
            });
        }

    },
}
</script>
