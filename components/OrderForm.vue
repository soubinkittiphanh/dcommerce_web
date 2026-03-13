
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການອໍເດີ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <!-- SENDER INFORMATION -->
                    <!-- <v-row justify="center" align="center">
                        <v-divider></v-divider>
                        <div class="mx-2">
                            <h3>
                                ຂໍ້ມູນລູກຄ້າ ຜູ້ຝາກເຄື່ອງ
                            </h3>
                        </div>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.sender.telephone" label="* ເບີໂທລູກຄ້າ"
                                @input="senderTelephoneTypingHandler"></v-text-field>
                            <v-row v-if="isSenderTyping">
                                <v-col cols="12">
                                    <v-card v-for="client in clientOption" :key="client['id']">
                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="8">
                                                    {{ client['name'].concat(' - ').concat(client['telephone']) }}
                                                </v-col>
                                                <v-col cols="2" align-self="center">
                                                    <v-btn color="primary" rounded variant="text"
                                                        @click="selectedClientNew(client['id'], true)">
                                                        <i class="fa-regular fa-circle-check"></i>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.sender.name" label="* ຊື່ລູກຄ້າ"></v-text-field>
                        </v-col>
                    </v-row> -->
                    <!-- SENDER INFORMATION -->
                    <v-row justify="center" align="center">
                        <v-divider></v-divider>
                        <div class="mx-2">
                            <h3>
                                ຂໍ້ມູນລູກຄ້າ
                            </h3>
                        </div>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.client.telephone" label="* ເບີໂທລູກຄ້າ"
                                @input="clientTelephoneTypingHandler"></v-text-field>
                            <v-row v-if="!isSenderTyping">
                                <v-col cols="12">
                                    <v-card v-for="client in clientOption" :key="client['id']">
                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="8">
                                                    {{ client['name'].concat(' - ').concat(client['telephone']) }}
                                                </v-col>
                                                <v-col cols="2" align-self="center">
                                                    <v-btn color="primary" rounded variant="text"
                                                        @click="selectedClientNew(client['id'], false)">
                                                        <i class="fa-regular fa-circle-check"></i>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.client.name" label="* ຊື່ລູກຄ້າ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-text-field type="date" label="ວັນທີ*" v-model="form.bookingDate"
                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                        </v-col>
                        <v-col cols="3">

                            <v-text-field v-model="form.name" label="* ລາຍການເຄື່ອງ" required
                                :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.note" label="ຄຳອະທິບາຍ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-autocomplete item-text="name" item-value="id" :items="vendorList" label="ຜູ້ສະໜອງສິນຄ້າ"
                                v-model="form.vendorId"></v-autocomplete>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="form.refNumber" label="Order No."></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="form.trackingNumber" label="Tracking No."></v-text-field>
                        </v-col>
                        <v-col cols="ໂ">
                            <v-text-field v-model="form.link" label="ລິ້ງສິນຄ້າ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <v-text-field v-model="form.price" label="* ລາຄາສິນຄ້າ"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-autocomplete @input="currencyChange(true)" item-text="code" item-value="id"
                                :items="currencyList" label="ສະກຸນເງິນ*" v-model="form.currencyId"></v-autocomplete>
                        </v-col>
                        <v-col cols="2">
                            <v-text-field disabled v-model="form.priceRate" label="ອັດຕາແລກປ່ຽນ"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <!-- <v-select v-model="form.status" :items="status" label="ສະຖານະເຄື່ອງ" required></v-select>
                             -->
                             <v-autocomplete  item-text="name"
                                item-value="code" :items="status" label="ສະຖານະເຄື່ອງ*"
                                v-model="form.status"></v-autocomplete>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <v-text-field v-if="!isStatusOrdered" v-model="form.shippingFee"
                                label="* ຄ່າຂົນສົ່ງ"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-autocomplete v-if="!isStatusOrdered" @input="currencyChange(false)" item-text="code"
                                item-value="id" :items="currencyList" label="ສະກຸນເງິນ*"
                                v-model="form.shippingFeeCurrencyId"></v-autocomplete>
                        </v-col>
                        <v-col cols="2">
                            <v-text-field v-if="!isStatusOrdered" disabled v-model="form.shippingRate"
                                label="*ອັດຕາແລກປ່ຽນ"></v-text-field>
                        </v-col>
                        <!-- DESTINATION WAREHOUSE -->
                        <!-- <v-col cols="6">
                            <v-autocomplete item-text="name" item-value="id" :items="locationList" label="ສາງປາຍທາງ*"
                            v-model="form.endLocationId"></v-autocomplete>
                            <v-file-input :rules="masterRules.imageRule" ref="filesfield" multiple
                            accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar"
                            prepend-icon="mdi-camera" label="ຮູບພາບ" @change="onFilesChange"></v-file-input>
                        </v-col> -->
                        <!-- DESTINATION WAREHOUSE -->
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <v-checkbox v-model.number="form.isActive" label="ໃຊ້ງານຢູ່"></v-checkbox>
                        </v-col>
                        <v-col cols="10"></v-col>
                    </v-row>
                </v-form>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
import { debounce } from 'lodash'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        isCreate: {
            type: Boolean,
            require: true,
            default: true,
        },
        recordId: {
            type: Number,
            require: false,
            default: 0,
        }
    },
    data() {
        return {
            timeoutId: null,
            isSenderTyping: true,
            clientOption: [],
            vendorList: [],
            locationList: [],
            barcode:'',
            form: {
                bookingDate: '',
                currencyId: 1,
                vendorId: 1,
                priceRate: 1,
                endLocationId: 1,
                shippingFeeCurrencyId: 1,
                shippingRate: 1,
                shippingFee: 0,
                note: '',
                name: '',
                refNumber: '',
                trackingNumber: '',
                link: '',
                price: 0,
                isActive: true,
                status: 'ORDERED',
                client: {
                    id: null,
                    name: '',
                    telephone: ''
                },
                sender: {
                    id: null,
                    name: '',
                    telephone: ''
                }
            },
            // status: [
            //     'ORDERED',
            //     'RECEIVED',
            //     'INVOICED',
            // ],
            status: [
                {'name':'ຍັງບໍ່ເຂົ້າສາງ','code':'ORDERED'},
                {'name':'ເຄື່ອງເຂົ້າສາງ','code':'RECEIVED'},
                {'name':'ຮັບແລ້ວ','code':'INVOICED'},
            ],
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 20) || 'Name must be less than 20 characters'
            ],
            masterRules: {
                imageRule: [
                    (files) => {
                        let fileSize = 0
                        let totalSize = 0
                        if (files) {
                            files.forEach((el) => {
                                fileSize += el.size
                                console.log('Size: ' + el.size)
                            })
                            totalSize = fileSize / files.length
                            console.log('File size: aaa' + files.length + " Each: " + totalSize || 0);
                        } else {
                            console.log('File: ' + files)
                        }

                        console.log('Total: ' + totalSize)
                        return totalSize < 2000000 || "ຂະຫນາດເກີນ"
                    },
                ],
            },
        };
    },

    watch: {

    },
    async mounted() {
        if (this.isCreate) {
            const today = new Date().toISOString().substr(0, 10);
            this.form.bookingDate = today;
            console.log(`******** DEFAULT CURRENCY ${this.currencyList[0]['id']}*******`);
            this.form.currencyId = this.currencyList[0]['id'];
            this.form.shippingFeeCurrencyId = this.currencyList[0]['id'];
        }
        await this.loadEntry();
        await this.loadLocation();
        this.loadVendor();
        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        handleKeyDown(event) {
            console.log(`BACORD SCANING....`);
            if (this.timer) {
                clearInterval(this.timer)
            }
            if (event.key == 'Enter') {
                if (this.barcode) {
                    // ************ Find product from this barcode and add to cart ************ //
                    // this.findProductFromBarcode(this.barcode)
                    // Handle barcode [Receiving, Invoicing]
                    console.log(`BACORD SCAN RESULT: ${this.barcode}`);
                    // if(this.isCreate) return
                    this.form.trackingNumber = this.barcode.toUpperCase()
                    // this.findOrderByTrackingNumber(this.barcode)
                }
                this.barcode = '';
                return
            }
            if (event.key != 'Shift') {
                this.barcode += event.key;
            }
            this.timer = setInterval(() => this.barcode = '', 20);
        },
        selectedClientNew(newVal, isSender) {
            const newClient = this.findAllClient.find(el => el.id == newVal)
            if (newClient != undefined) {
                if (!isSender) {
                    this.form.client.id = newClient['id']
                    this.form.client.name = newClient['name']
                    this.form.client.telephone = newClient['telephone']

                } else {
                    this.form.sender.id = newClient['id']
                    this.form.sender.name = newClient['name']
                    this.form.sender.telephone = newClient['telephone']
                }
                this.clientOption = []
                this.timeoutId = setTimeout(() => {
                    console.log(`******Reset auto suggest*******`);
                }, 2000)


            }
        },
        async loadVendor() {
            await this.$axios.get("api/vendor/find").then(response => {
                this.isloading = true
                this.vendorList = response.data
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        },
        async onFilesChange() {
            // await this.$axios.get("api/vendor/find").then(response => {
            //     this.isloading = true
            //     this.vendorList = response.data
            // }).catch(error => {
            //     console.log("Error ", error);
            // })
            // this.isloading = false
        },
        currencyChange(isPrice) {
            if (isPrice) {
                const currency = this.currencyList.find(el => el['id'] == this.form.currencyId);
                if (!currency) return
                this.form.priceRate = currency['rate'];
            } else {
                const currency = this.currencyList.find(el => el['id'] == this.form.shippingFeeCurrencyId);
                if (!currency) return
                this.form.shippingRate = currency['rate'];
            }
        },
        clientList(custTel) {
            return this.findAllClient.filter(el => el.telephone.includes(custTel))
        },


        senderTelephoneTypingHandler(telephone) {
            console.log('User finished typing! Input value: ' + telephone)
            // If using manual typing and not select from auto suggest 
            // we will remove sender id, so api will create new customer auto
            this.form.sender.id = null
            if (this.clientList(telephone) != undefined) {
                this.isSenderTyping = true
                this.clientOption = this.clientList(telephone)
                console.log(`*****${this.clientOption.length}*****`);
                if (this.timeoutId == null) {
                    this.timeoutId = setTimeout(() => {
                        console.log(`******Reset auto suggest*******`);
                        this.clientOption = []
                        this.isSenderTyping = false
                    }, 5000)
                }

            }
        },
        clientTelephoneTypingHandler(telephone) {
            // If using manual typing and not select from auto suggest 
            // we will remove client id, so api will create new customer auto
            this.form.client.id = null
            console.log('User finished typing! Input value: ' + telephone)
            if (this.clientList(telephone) != undefined) {
                this.isSenderTyping = false
                this.clientOption = this.clientList(telephone)
                console.log(`*****${this.clientOption.length}*****`);
                if (this.timeoutId == null) {
                    this.timeoutId = setTimeout(() => {
                        console.log(`******Reset auto suggest*******`);
                        this.clientOption = []
                        this.isSenderTyping = false
                    }, 5000)
                }
            }
        },

        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/order/create' : `api/order/update/${this.recordId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    // this.form.client = this.customerObject()
                    this.form.userId = this.user.id
                    this.form.locationId = this.currentTerminal['locationId']
                    await this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    this.form.userId = this.user.id
                    this.form.locationId = this.currentTerminal['locationId']
                    await this.$axios.put(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                }
                this.isloading = false
            }

        },
        async loadLocation() {
            if (this.isloading) return
            this.isloading = true
            try {
                const response = await this.$axios.get(`api/location/find`)
                this.locationList = response.data
            } catch (error) {
                swalError2(this.$swal, 'Error', 'Could no load data ' + error)
                console.log('Error ===>: ' + error)
            }
            this.isloading = false
        },
        async loadEntry() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                this.isloading = true
                try {
                    const response = await this.$axios.get(`api/order/find/${this.recordId}`)
                    this.form = response.data
                    if (!response.data.sender) {
                        console.log(`SENDER IS NULL ${response.data.sender}`);
                        this.form.sender = {
                            id: null,
                            name: '',
                            telephone: ''
                        }
                    }


                } catch (error) {
                    console.log("Cannot fetch data " + error);
                    return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                }

            }

        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        isStatusOrdered() {
            return this.form.status == 'ORDERED' ? true : false
        },
        currentTerminal() {
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        user() {
            return this.$auth.user || ''
        },
        currencyList() {
            return this.findAllCurrency
        },
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),

    },
};
</script>
