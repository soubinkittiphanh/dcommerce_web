<template>
    <div>
        <v-dialog v-model="ticketPreviewDialog" max-width="524">
            <div :key="previewDialogKey">
                <v-card class="pa-2">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-row>ວັນທີ: {{ customerForm.txn_date }} </v-row>
                                <v-row>ຮ້ານ: {{ currentTerminal['location']['company']['name'] }}</v-row>
                                <v-row>ເບີໂທ: {{ currentTerminal['location']['company']['tel'] }}</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-row>ຼູ້ຮັບ: {{ customerForm.name }}</v-row>
                                <v-row>ໂທ: {{ customerForm.tel }}</v-row>
                                <v-row>ຂົນສົ່ງ: {{ currentShipping }}</v-row>
                                <v-row>ບ່ອນສົ່ງ: {{ customerForm.address }} - {{ currentGeo }}</v-row>
                                <v-row v-if="currentShipping != 'RIDER'">ຄ່າຝາກ: {{
                                    customerForm.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' :
                                        'ຕົ້ນທາງ'
                                    }}</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row v-for="prod in cartOfProduct" :key="prod['id']">
                            {{ prod['pro_name'] }}
                            <v-spacer></v-spacer>
                            {{ currentPayment == 'COD' ? formatNumber(prod['localPrice']) + ' X ' : '' }}
                            {{ prod['qty'] }}
                        </v-row>
                        <v-row v-if="customerForm.discount > 0 && currentPayment == 'COD'">
                            ສ່ວນຫລຸດ
                            <v-spacer></v-spacer>
                            - {{ formatNumber(customerForm.discount) }}
                        </v-row>
                        <v-row v-if="customerForm.rider_fee > 0">
                            ຄ່າສົ່ງ
                            <v-spacer></v-spacer>
                            {{ formatNumber(customerForm.rider_fee) }}
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row v-if="currentPayment == 'COD' || currentShipping == 'RIDER'">
                            <v-spacer></v-spacer>
                            ລວມ({{ currentPayment }}): {{ formatNumber(ticketTotal) }}
                        </v-row>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn rounded color="warning" @click="ticketPreviewDialog = false">Cancel</v-btn>
                        <v-btn rounded color="primary" @click="submit">Post</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>

        <v-card>
            <v-card-title>
                <v-row>
                    <v-chip class="ma-2" color="primary" label text-color="white">
                        <v-icon start>mdi-label</v-icon>
                        ຂໍ້ມູນການຈັດສົ່ງ
                    </v-chip>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col cols="4">
                            <v-menu v-model="dateMenu" :close-on-content-click="false" transition="scale-transition"
                                offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field :value="formattedDate" label="ວັນທີ*" hint="ວັນ/ເດືອນ/ປີ (DD/MM/YYYY)"
                                        persistent-hint prepend-inner-icon="mdi-calendar" readonly v-bind="attrs"
                                        v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="customerForm.txn_date"
                                    @input="dateMenu = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.name" label="ຊືລູກຄ້າ"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.tel" label="*ເບີໂທລູກຄ້າ"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.address" label="*ບ່ອນສົ່ງ"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="abbr" item-value="id" :items="geographyList" label="ແຂວງ*"
                                v-model="customerForm.geoId" clearable placeholder="ເລືອກແຂວງ"
                                :rules="[v => !!v || 'ກະລຸນາເລືອກແຂວງ']"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-radio-group v-model="customerForm.shipping_fee_by" row align="center">
                                <v-label>ຄ່າຝາກ:</v-label>
                                <v-radio label="ຕົ້ນທາງ" value="source"></v-radio>
                                <v-radio label="ປາຍທາງ" value="destination"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-autocomplete item-text="name" item-value="id" :items="shippingList" label="ຂົນສົ່ງ*"
                                v-model="customerForm.shippingId" clearable placeholder="ເລືອກວິທີຂົນສົ່ງ"
                                :rules="[v => !!v || 'ກະລຸນາເລືອກວິທີຂົນສົ່ງ']" :error="shippingError"
                                :error-messages="shippingErrorMessage" @input="clearShippingError">
                                <template v-slot:no-data>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                ບໍ່ມີຂໍ້ມູນຂົນສົ່ງ
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="name" item-value="id" :items="riderList" label="Rider"
                                v-model="customerForm.riderId" clearable placeholder="ເລືອກ Rider"></v-autocomplete>
                        </v-col>
                        <!-- <v-col cols="4">
                            <v-autocomplete 
                                item-text="name" 
                                item-value="id" 
                                :items="riderList" 
                                label="Rider*"
                                v-model="customerForm.riderId"
                                clearable
                                placeholder="ເລືອກ Rider"
                                :rules="[v => !!v || 'ກະລຸນາເລືອກ Rider']"
                            ></v-autocomplete>
                        </v-col> -->
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.rider_fee" label="ຄ່າສົ່ງ" type="number" min="0"
                                step="0.01" placeholder="0.00"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <!-- Empty column for spacing -->
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="payment_code" item-value="id" :items="paymentList"
                                label="ການຊຳລະ*" v-model="paymentSelected" clearable placeholder="ເລືອກວິທີຊຳລະ"
                                :rules="[v => !!v || 'ກະລຸນາເລືອກວິທີຊຳລະ']"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.discount" label="ສ່ວນຫລຸດ" type="number" min="0"
                                step="0.01" placeholder="0.00"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn rounded @click="previewTicket" color="primary">Print preview</v-btn>
                <v-spacer></v-spacer>
                <v-btn rounded @click="caputreStateOfDeliveryForm" color="warning">Close</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { getFormatNum, swalError2 } from '~/common'

export default {
    name: 'delivery-form',

    async created() {
        // Load the delivery info form from state
        this.customerForm = JSON.parse(JSON.stringify(this.$store.state.customerForm))
        console.log(`Customer information load from state \n${JSON.stringify(this.customerForm)}`);

        const today = new Date().toISOString().substr(0, 10);
        this.customerForm.txn_date = today;
        console.log(`PRODUCT ${this.cartOfProduct[0]['pro_name']}`);

        // Clear any pre-selected shipping values to force manual selection
        this.customerForm.shippingId = null;
        this.customerForm.riderId = null;
        this.customerForm.geoId = null;

        await this.loadRider()
        await this.loadGeo()
        await this.loadShipping()
        await this.loadPayment()

        // Only set payment if there's a current selection from store, otherwise leave null
        this.paymentSelected = this.currentSelectedPayment || null
    },

    beforeDestroy() {
        console.log(`Before close dialog...`);
    },

    watch: {
        paymentSelected(value) {
            console.log(`New data payment selected ${value}`);
            if (value) {
                this.addSelectedPayment(value)
            }
        }
    },

    computed: {
        generateCustomerObjec() {
            const customerInfo = {
                name: this.customerForm.name,
                branch: this.currentTerminal['location']['company']['name'],
                branchTel: this.currentTerminal['location']['company']['tel'],
                tel: this.customerForm.tel,
                shippingFeeBy: this.customerForm.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' : 'ຕົ້ນທາງ',
                address: this.customerForm.address + ' - ' + this.currentGeo,
                shipping: this.currentShipping,
                payment: this.currentPayment,
                riderFee: this.customerForm.rider_fee,
                geoId: this.customerForm.geoId,
            }
            return customerInfo;
        },
        ticketTotal() {
            let total = 0;
            for (const iterator of this.cartOfProduct) {
                total += iterator['localPrice'] * iterator['qty']
            }
            return (total + (+this.customerForm.rider_fee)) - this.customerForm.discount;
        },
        currentTerminal() {
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        currentGeo() {
            const geo = this.geographyList.find(el => el.id == this.customerForm.geoId)
            if (geo == undefined) return ''
            return geo['description']
        },
        currentShipping() {
            const shipping = this.shippingList.find(el => el.id == this.customerForm.shippingId)
            if (shipping == undefined) return ''
            return shipping['name']
        },
        currentPayment() {
            const payment = this.paymentList.find(el => el.id == this.currentSelectedPayment)
            if (payment == undefined) return ''
            return payment['payment_code']
        },
        formattedDate() {
            // 1. Check if it exists
            // 2. Ensure it is a string (to avoid errors if it's a Date object or null)
            if (!this.customerForm.txn_date || typeof this.customerForm.txn_date !== 'string') {
                return '';
            }

            const [year, month, day] = this.customerForm.txn_date.split('-');
            return `${day}/${month}/${year}`;
        },
        ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
    },

    data() {
        return {
            dateMenu: false,
            geographyList: [],
            paymentList: [],
            previewDialogKey: 1,
            ticketPreviewDialog: false,
            riderList: [],
            shippingList: [],
            paymentSelected: null, // Start with null to force manual selection
            shippingError: false,
            shippingErrorMessage: '',
            // Customer form with all shipping-related fields set to null initially
            customerForm: {
                name: '',
                tel: '',
                address: '',
                rider_fee: 0,
                txn_date: null,
                shipping_fee_by: 'destination',
                shippingId: null, // Force manual selection
                riderId: null,    // Force manual selection
                geoId: null,      // Force manual selection
                discount: 0,
            }
        }
    },

    methods: {
        ...mapActions(['addSelectedPayment', 'assignCustomerFormAction']),

        submit() {
            if (!this.validateForm()) {
                return;
            }

            console.log(this.customerForm)
            const payload = {
                customerForm: this.customerForm,
                customerInfo: this.generateCustomerObjec
            }
            this.caputreStateOfDeliveryForm()
            this.$emit('post-transaction', payload)
        },

        validateForm() {
            // Check required shipping selection
            if (!this.customerForm.shippingId) {
                this.shippingError = true;
                this.shippingErrorMessage = 'ກະລຸນາເລືອກວິທີຂົນສົ່ງ';
                swalError2(this.$swal, "ກະລຸນາເລືອກວິທີຂົນສົ່ງ");
                return false;
            }

            // if (!this.customerForm.riderId) {
            //     swalError2(this.$swal, "ກະລຸນາເລືອກ Rider");
            //     return false;
            // }

            if (!this.customerForm.geoId) {
                swalError2(this.$swal, "ກະລຸນາເລືອກແຂວງ");
                return false;
            }

            if (!this.paymentSelected) {
                swalError2(this.$swal, "ກະລຸນາເລືອກວິທີຊຳລະ");
                return false;
            }

            return true;
        },

        clearShippingError() {
            this.shippingError = false;
            this.shippingErrorMessage = '';
        },

        caputreStateOfDeliveryForm() {
            this.assignCustomerFormAction(this.customerForm)
            this.$emit('close-dialog')
        },

        formatNumber(val) {
            return getFormatNum(val)
        },

        previewTicket() {
            if (!this.customerForm.tel) return swalError2(this.$swal, "ກະລຸນາໃສ່ເບີໂທ")
            if (!this.customerForm.address) return swalError2(this.$swal, "ກະລຸນາໃສ່ທີ່ຢູ່")

            // Validate shipping selection before preview
            if (!this.validateForm()) {
                return;
            }

            this.previewDialogKey += 1;
            this.ticketPreviewDialog = true
        },

        async loadRider() {
            try {
                const res = await this.$axios.get('/api/rider/find');
                this.riderList = res.data;
                // Do NOT auto-select first rider - keep it null for manual selection
                console.log('Riders loaded, no auto-selection applied');
            } catch (er) {
                swalError2(this.$swal, "Error loading riders", er);
            }
        },

        async loadPayment() {
            this.paymentList = []
            try {
                const res = await this.$axios.get('/api/paymentMethod/find');
                this.paymentList = res.data;
                // Do NOT auto-select first payment method
                console.log('Payment methods loaded, no auto-selection applied');
            } catch (er) {
                swalError2(this.$swal, "Error loading payment methods", er);
            }
        },

        async loadGeo() {
            try {
                const res = await this.$axios.get('/api/geography/find');
                this.geographyList = res.data;
                for (const iterator of this.geographyList) {
                    iterator['abbr'] += ' - '.concat(iterator['description'])
                }
                // Do NOT auto-select first geography
                console.log('Geography loaded, no auto-selection applied');
            } catch (er) {
                swalError2(this.$swal, "Error loading geography", er);
            }
        },

        async loadShipping() {
            try {
                const res = await this.$axios.get('/api/shipping/find');
                this.shippingList = res.data;
                // Do NOT auto-select first shipping method - this is the key change
                console.log('Shipping methods loaded, no auto-selection applied');
            } catch (er) {
                swalError2(this.$swal, "Error loading shipping methods", er);
            }
        }
    }
}
</script>

<style scoped>
/* Optional: Add some visual indication for required fields */
.v-text-field--outlined.error--text .v-label {
    color: #ff5252 !important;
}
</style>