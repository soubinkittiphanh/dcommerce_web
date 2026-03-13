<template>
    <v-card>
        <v-row class="ma-1">
            <v-col cols="4">ວັນທີ: {{ todayDate }}</v-col>
            <v-col cols="4">ເວລາ: {{ currentTime }}</v-col>
            <v-col cols="4" class="text-right">
                <span class="mdi mdi-check-circle-outline" style="color: green; font-size: 44px;"></span>
            </v-col>
        </v-row>
        <v-card-text>
            <v-divider></v-divider>
            <v-row no-gutters>
                <v-col cols="3" class="text-right">
                    <h4>
                        ເລກສ່ຽງ
                    </h4>
                </v-col>
                <v-col cols="3" class="text-right">
                    <h4>
                        ຈຳນວນ
                    </h4>
                </v-col>
                <v-col cols="3" class="text-right">
                    <h4>
                        ເລກສ່ຽງ
                    </h4>
                </v-col>
                <v-col cols="3" class="text-right">
                    <h4>
                        ຈຳນວນ
                    </h4>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row no-gutters>
                <v-col cols="6">
                    <v-row v-for="(txn, i) in oddEvenList['evenIndexList']" :key="i" no-gutters>
                        <v-col cols="6" class="text-right">{{ txn['normal'] ? 'ລ່າງ' : 'ບົນ' }}-{{ txn['luckyNumber']
                        }}</v-col>
                        <v-col cols="6" class="text-right">{{ thoundsandFormatter(txn['amount']) }}</v-col>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-row v-for="(txn, i) in oddEvenList['oddIndexList']" :key="i" no-gutters>
                        <v-col cols="6" class="text-right">{{ txn['normal'] ? 'ລ່າງ' : 'ບົນ' }}-{{ txn['luckyNumber']
                        }}</v-col>
                        <v-col cols="6" class="text-right">{{ thoundsandFormatter(txn['amount']) }}</v-col>
                    </v-row>
                </v-col>

                <!-- 
                <v-col cols="3" class="text-right">{{ txn['luckyNumber'] }}</v-col>
                <v-col cols="3" class="text-right">{{ thoundsandFormatter(txn['amount']) }}</v-col>
                <v-col cols="3" class="text-right">{{ txn['luckyNumber'] }}</v-col>
                <v-col cols="3" class="text-right">{{ thoundsandFormatter(txn['amount']) }}</v-col> -->
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="6" class="text-left">
                    <v-btn color="primary" rounded variant="text" @click="goHome" class="ma-1">
                        <span  class="mdi mdi-arrow-left" ></span>
                    </v-btn>
                   
                </v-col>
                <v-col cols="6" class="text-right">
                    <h4>
                        ຍອດລວມ: {{ ticketTotal }}
                    </h4>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
  
<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
export default {
    layout: "login",
    data() {
        return {
            transactionList: [
                { luckyNumber: '00', amount: 1000 },
                { luckyNumber: '210', amount: 1000 },
                { luckyNumber: '602', amount: 2000 },
                { luckyNumber: '62', amount: 10000 },
                { luckyNumber: '60', amount: 100000 },
                { luckyNumber: '602', amount: 1000 },
            ],
        };
    },
    mounted() {
        this.transactionList = this.$route.query.txn;
        // Do something with the parameters
    },
    methods: {
        thoundsandFormatter(val) {
            return getFormatNum(val)
        }, goHome() {
            this.$router.push({
                path: '/lion72',
            });
        }
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
        }, todayDate() {
            const today = new Date();
            const day = today.getDate().toString().padStart(2, '0');
            const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            const year = today.getFullYear();

            return `${day}/${month}/${year}`;
        },
        currentTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour12: false });
            return timeString;
        }
    }
};
</script>
  
<style scoped>
.zigzag-footer {
    position: relative;
}

.zigzag-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    background: white;
    /* Adjust the background color based on your design */
    z-index: -1;
}
</style>
  