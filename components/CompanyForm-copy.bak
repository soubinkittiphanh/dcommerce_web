
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການ ສາຂາ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field  :disabled="!isCreate" v-model="form.mnemonic" label="* Code" required :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.name" label="* ຊື່" required :rules="nameRules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.tel" label=" ເບີໂທ" required :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.email" label=" ອີເມວ" required :rules="nameRules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.address" label=" ທີ່ຢູ່" required :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.province" label=" ເມືອງ" required :rules="nameRules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.district" label=" ແຂວງ" required :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-checkbox v-model.number="form.isActive" label="Is Active"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.bank" label=" ຊື່ທະນາຄານ" ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.accountName" label=" ຊື່ບັນຊີ" ></v-text-field>
                        </v-col>
            
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="form.accounts" label="ເລກບັນຊີ (ຂັ້ນຫລາຍບັນຊີດ້ວຍ ເຄື່ອງໝາຍ | )" ></v-text-field>
                        </v-col>
           
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
            form: {
                "id": null,
                "mnemonic": "BNK",
                "name": "Dcommerce",
                "tel": "123-456-7890",
                "email": "info@abccorp.com",
                "address": "123 Main St",
                "province": "Ontario",
                "district": "Toronto",
                "village": "Downtown",
                "remark": "This is a sample company",
                "bank": "ທະນາຄານ BCEL",
                "accounts": "",
                isActive: true
            },
            items: ['Gold', 'Silver', 'Platinum', 'Diamond', 'Master'],
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 100) || 'Name must be less than 20 characters'
            ],
        };
    },
    // mounted() {
    //     this.loadEntry();
    // },
    async created() {
        this.loadEntry();
    },
    methods: {
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/company/create' : `api/company/update/${this.recordId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    await this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
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
        async loadEntry() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                await this.$axios.get(`api/company/find/${this.recordId}`).then(response => {
                    // this.form.name = response.data["name"]
                    // this.form.code = response.data["code"]
                    // this.form.isActive = response.data["isActive"]
                    this.form = response.data
                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        // Add any necessary computed properties here
    }
};
</script>
