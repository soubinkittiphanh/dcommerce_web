<template>
    <div>
        <v-dialog v-model="isLoading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title class="px-0 pt-0 text-h6 font-weight-bold">
                ຍົກເລີກບິນ
            </v-card-title>
            <v-alert
                v-if="errorMessage"
                type="error"
                dense
                text
                dismissible
                class="mb-3"
                @input="errorMessage = ''"
            >
                {{ errorMessage }}
            </v-alert>
            <v-form ref="myform" @submit.prevent="submitForm">
                <v-text-field :value="id" disabled label="ເລກທີອໍເດີ "></v-text-field>
                <v-text-field v-model="form.remark" label="ເຫດຜົນການຍົກເລີກ" :rules="nameRules"></v-text-field>
                <v-text-field v-model="form.cancel_fee" label="ຄ່າທຳນຽມ"></v-text-field>
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="warning" text rounded @click="closeDialog">
                    ປິດ
                </v-btn>
                <v-btn class="primary" text rounded :loading="isLoading" @click="submitForm">
                    ຢືນຢັນ
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common/index'
export default {
    props: {
        id: {
            type: Number,
            required: false,
            default: null,
        },
        customerId: {
            type: Number,
            required: false,
            default: null,
        }
    },
    data() {
        return {
            isLoading: false,
            errorMessage: '',
            form: {
                isActive: false,
                remark: '',
                cancel_fee: 0,
            },
            nameRules: [
                value => !!value || 'ກະລຸນາ ໃສ່ເຫດຜົນ',
                value => (value && value.toString().length <= 100) || 'Reason must be less than 100 characters'
            ],
        };
    },
    computed: {
        user() {
            return this.$auth.user || ''
        }
    },
    watch: {
        id() {
            this.errorMessage = ''
            this.form.remark = ''
            this.form.cancel_fee = 0
        }
    },
    methods: {
        closeDialog() {
            this.errorMessage = ''
            this.$emit('close-dialog')
        },
        async submitForm() {
            if (this.$refs.myform.validate() && !this.isLoading) {
                this.isLoading = true
                this.errorMessage = ''
                try {
                    this.form.customerId = this.customerId;
                    const response = await this.$axios.put(`api/sale/reverse/${this.id}`, this.form)
                    
                    if (response && response.data && response.data.success === false) {
                        const message = response.data.message || response.data.error || 'User group is not authorized to reverse transactions / ທ່ານບໍ່ມີສິດໃນການຍົກເລີກລາຍການຂາຍ'
                        this.errorMessage = message
                        swalError2(this.$swal, 'Error', message)
                        return
                    }

                    if (response && response.status === 200) {
                        this.refreshData()
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        this.closeDialog()
                    }
                } catch (error) {
                    const message =
                        error.response?.data?.message ||
                        error.response?.data?.error ||
                        (typeof error.response?.data === 'string' ? error.response.data : null) ||
                        error.message ||
                        'Something went wrong'
                    this.errorMessage = message
                    swalError2(this.$swal, 'Error', message)
                } finally {
                    this.isLoading = false
                }
            }
        },
        refreshData() {
            this.$emit('reload-data')
            this.$emit('refresh')
        }
    },
};
</script>
