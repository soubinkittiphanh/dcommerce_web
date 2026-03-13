
<template>
    <div class="text-center">
        <!-- <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
                Open Dialog
            </v-btn>
        </template> -->
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <!-- <v-card-title>
                <span class="text-h5">ລາຍເດີ {{ riderId }}</span>
            </v-card-title> -->
            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການລາຍເດີ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <!-- <v-form @submit.prevent="handleSubmit" ref="form"> -->
                <v-form ref="form">
                    <v-text-field v-model="form.name" label="* ຊື່" required :rules="nameRules"></v-text-field>
                    <v-text-field v-model="form.tel" label="* ເບີໂທ" required :rules="telRules"></v-text-field>
                    <v-select v-model="form.rating" :items="ratings" label="Rating" required></v-select>
                    <v-checkbox v-model="form.isActive" label="Is Active"></v-checkbox>
                    <!-- <v-btn type="submit" color="primary">Submit</v-btn> -->
                </v-form>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="handleSubmit">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
    props: {
        isCreate: {
            type: Boolean,
            require: true,
            default: true,
        },
        riderId: {
            type: Number,
            require: false,
            default: null,
        }
    },
    data() {
        return {
            form: {
                name: '',
                tel: '',
                rating: 'Gold',
                isActive: true
            },
            isloading: false,
            ratings: [
                'Gold',
                'Silver',
                'Platinum',
                'Diamond',
                'Master'
            ], nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 20) || 'Name must be less than 20 characters'
            ],
            telRules: [
                value => !!value || 'Telephone is required',
                value => /^[0-9]{10}$/.test(value) || 'Telephone must be a valid 10-digit phone number'
            ]
        };
    },
    mounted() {
        this.loadRider();
    },
    methods: {
        handleSubmit() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                // Implement form submission logic here
                console.log("Loading.....");
                this.isloading = true
                let api = this.isCreate ? 'api/rider/create' : `api/rider/update/${this.riderId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    this.$axios.put(api, this.form).then(response => {
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
        loadRider() {
            if (this.riderId && !this.isCreate) {
                this.$axios.get(`api/rider/find/${this.riderId}`).then(response => {

                    this.form.name = response.data["name"]
                    this.form.tel = response.data["tel"]
                    this.form.isActive = response.data["isActive"]

                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        refreshData(){
            this.$emit('reload-data')
        }
    },
    computed: {
        // Add any necessary computed properties here
    }
};
</script>
