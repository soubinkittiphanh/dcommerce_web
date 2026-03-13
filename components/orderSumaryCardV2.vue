<template>
    <v-card class="ml-4">
        <v-card-title>{{ this.orderDetail.title }}</v-card-title>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="orderDetail" >

                </v-data-table>
            </v-col>
        </v-row>

    </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        orderDetail: {
            type: Array,
        },
        showTotal: {
            type: Boolean,
            default: false,
        },
        gross: {
            type: String,
            default: '0'
        }

    },
    data() {
        return {
            headers: [
                { text: 'ລາຍການ', value: 'name' },
                { text: 'ຈຳນວນ', value: 'value' },
                { text: 'ມູນຄ່າ ກີບ', value: 'amount' },
                { text: 'ມູນຄ່າ ບາດ', value: 'amountTHB' },
                { text: 'ຄ່າຂົນສົ່ງ ກີບ', value: 'deliveryFee' },
                { text: 'ຄ່າຂົນສົ່ງ ບາດ', value: 'deliveryFeeTHB' },
            ],
            headerStyle: {
                backgroundColor: '#2196f3', // change to your desired color
                color: 'white', // change to the text color you want
                fontWeight: 'bold' // change to the font weight you want
            }
        }
    },
    computed:{
        headerList(){
            for (const iterator of object) {
                
            }
        },


    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>