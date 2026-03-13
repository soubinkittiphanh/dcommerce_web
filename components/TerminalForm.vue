
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title>
                <!-- <span class="text-h5">Terminal </span> -->
                <v-chip class="ma-2" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    Terminal
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <!-- <v-text-field v-model="form.code" label="* Code" required :rules="nameRules"></v-text-field> -->
                    <v-text-field  v-model.number="form.code" label="* code" required :disabled="!this.isCreate"></v-text-field>
                    <v-text-field v-model="form.name" label="* ຊື່" required :rules="nameRules"></v-text-field>
                    <v-text-field v-model="form.description" label="Remark" ></v-text-field>
                    <v-text-field v-model.number="form.saleRate" label="* SaleRate" required ></v-text-field>
                    <v-autocomplete item-text="name" item-value="id" :items="locationList"
                                                label="Stock take location*"
                                                v-model="form.locationId"></v-autocomplete>
                    <!-- <v-text-field v-model="form.rate" label="* ອັດຕາແລກປ່ຽນ" required></v-text-field> -->
                    <v-checkbox v-model.number="form.isActive" label="Is Active"></v-checkbox>
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
            locationList:[],
            form: {
                description: '',
                name: '',
                code: 1001,
                saleRate: 0,
                isActive: true,
                locationId:1
            },
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 20) || 'Name must be less than 20 characters'
            ],
        };
    },
    // mounted() {
    //     this.loadEntry();
    // },
    async created() {
        this.loadEntry();
        this.loadLocation();

    },
    methods: {
        async loadLocation(item) {
            this.isloading = true
            await this.$axios
                .get(`api/location/find`)
                .then((res) => {
                    this.locationList = res.data.map(el => el)
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
                })
            this.isloading = false

        },
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/terminal/create' : `api/terminal/update/${this.recordId}`
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
                await this.$axios.get(`api/terminal/find/${this.recordId}`).then(response => {
                    this.form.code = response.data["code"]
                    this.form.name = response.data["name"]
                    this.form.description = response.data["description"]
                    this.form.saleRate = response.data["saleRate"]
                    this.form.locationId = response.data["locationId"]
                    this.form.isActive = response.data["isActive"]
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
