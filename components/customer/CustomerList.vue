<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card>
            <v-card-title>
                <v-row align="center">
                    <v-col cols="12" sm="4" md="4" class="text-left py-0">
                        ເລືອກລູກຄ້າ
                    </v-col>
                    <v-col cols="12" sm="4" md="4" class="text-center py-0">
                        <v-btn color="success" small dark @click="showCustomerForm = true">
                            <v-icon left>mdi-account-plus</v-icon>
                            ເພີ່ມລູກຄ້າໃໝ່
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" class="py-0">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details />
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-divider></v-divider>
                    <v-data-table :headers="headers" :items="customerList" :search="search">
                        <template v-slot:[`item.id`]="{ item }">
                            <v-btn @click="selectCustomer(item)">
                                <i class="mdi mdi-account-plus"></i>
                                ເລືອກ
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-container>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn> -->
                <v-btn color="blue darken-1" text @click="$emit('close-dialog')">
                    ປິດ
                </v-btn>
            </v-card-actions>
        </v-card>

        <!-- Create Customer Dialog -->
        <v-dialog v-model="showCustomerForm" max-width="800px" persistent>
            <customer-form @close-dialog="showCustomerForm = false" @reload-data="onCustomerCreated" />
        </v-dialog>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'
import CustomerForm from './CustomerForm.vue'
import { swalError2 } from '~/util/myUtil'

export default {
    components: {
        CustomerForm,
    },
    //   There are several types available for Vue.js props:

    // 1. `String`: Expects a string value.
    // 2. `Number`: Expects a numeric value.
    // 3. `Boolean`: Expects a boolean value.
    // 4. `Array`: Expects an array value.
    // 5. `Object`: Expects an object value.
    // 6. `Function`: Expects a function value.
    // 7. `Symbol`: Expects a symbol value.
    // 8. `Date`: Expects a date value.
    // 9. `RegExp`: Expects a regular expression value.

    // You can also create custom types by passing a validator function to the `validator` property of the prop object.
    // props: {
    //     amount: {
    //         type: Number,
    //         require: true,
    //         default: 0,
    //     },
    //     orderId: {
    //         type: Number,
    //         require: true,
    //     },
    //     lockingSessionId: {
    //         type: String,
    //         require: true,
    //     }
    // },
    // computed: {

    // },

    data() {
        return {
            customerList: [],
            isloading: false,
            search: '',
            showCustomerForm: false,
            headers: [
                { text: "ຊື່ລູກຄ້າ", value: "name" },
                { text: "Grade", value: "grade" },
                { text: "Points", value: "loyaltyPoints" },
                { text: "ບໍລິສັດ", value: "company" },
                { text: "ທີ່ຢູ່", value: "address" },
                { text: "ເບີໂທ", value: "telephone" },
                { text: "-", value: "id" },
            ],

        }
    },

    async mounted() {
        await this.loadCustomer()
    },
    computed: {
        ...mapGetters(['currentSelectedCustomer']),
        customer() {
            return this.currentSelectedCustomer
        }
    },
    methods: {
        ...mapActions(['addCustomer']),
        selectCustomer(customer) {
            this.addCustomer(customer);
            this.$emit('close-dialog')
        },
        async loadCustomer() {
            this.isloading = true
            await this.$axios
                .get('api/client/find/active')
                .then((res) => {
                    this.customerList = res.data.map((el) => {
                        return el;
                    })
                })
                .catch((er) => {
                    console.log('Error: ' + er)
                    swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", er.response.data)
                })
            this.isloading = false
        },
        async onCustomerCreated() {
            this.showCustomerForm = false
            await this.loadCustomer()
        },
    },
}
</script>