
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການໝວດສິນຄ້າຫຼັກ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field disabled v-model="form.id" label="* CODE"></v-text-field>
                    <v-text-field v-model="form.categoryName" label="* ຊື່" required :rules="nameRules"></v-text-field>
                    <v-text-field v-model="form.categoryDesc" label="ໝາຍເຫດ"></v-text-field>
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
            form: {
                id: '1XXX',
                categoryName: '',
                categoryDesc: '',
                isActive: true
            },
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 150) || 'Name must be less than 150 characters'
            ],
        };
    },
    async created() {
        this.loadEntry();
    },
    methods: {
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                this.isloading = true
                let api = this.isCreate ? 'api/mainCategory/create' : `api/mainCategory/update/${this.recordId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    await this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        this.$emit('close-dialog')
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');

                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    await this.$axios.put(api, this.form).then(response => {
                        this.refreshData()
                        this.$emit('close-dialog')
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
                await this.$axios.get(`api/mainCategory/find/${this.recordId}`).then(response => {
                    this.form = response.data
                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        refreshData() {
            this.$emit('reload-data')
        }
    }
};
</script>
