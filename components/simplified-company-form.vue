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
                    <!-- Basic Company Information -->
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

                    <!-- Profile Image Section using reusable component -->
                    <image-upload
                        :entity-id="form.id || recordId"
                        :image-path="form.profile_image_path"
                        :base-url="$axios.defaults.baseURL"
                        upload-endpoint="api/company/upload-profile-image/:id"
                        delete-endpoint="api/company/delete-profile-image/:id"
                        header-text="ຮູບໂປຣໄຟລ໌ບໍລິສັດ"
                        :show-upload-section="!isCreate || form.id"
                        @upload-success="onImageUploadSuccess"
                        @delete-success="onImageDeleteSuccess"
                        @upload-error="onImageError"
                        @delete-error="onImageError"
                    />

                    <!-- Show message if company needs to be saved first -->
                    <v-alert
                        v-if="isCreate && !form.id"
                        type="info"
                        text
                        dense
                        class="mt-3"
                    >
                        ກະລຸນາບັນທຶກຂໍ້ມູນບໍລິສັດກ່ອນອັບໂຫລດຮູບໂປຣໄຟລ໌
                    </v-alert>
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
import ImageUpload from '~/components/ImageUpload.vue'

export default {
    components: {
        ImageUpload
    },
    
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
                "profile_image_path": null,
                isActive: true
            },
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 100) || 'Name must be less than 20 characters'
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
                let api = this.isCreate ? 'api/company/create' : `api/company/update/${this.recordId}`
                console.log("API => ", api);
                
                try {
                    let response
                    if (this.isCreate) {
                        response = await this.$axios.post(api, this.form)
                        // Update form with returned data (including ID)
                        this.form = { ...this.form, ...response.data }
                    } else {
                        response = await this.$axios.put(api, this.form)
                    }
                    
                    this.refreshData()
                    swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                } catch (error) {
                    console.log("Error: ", error);
                    swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                } finally {
                    this.isloading = false
                }
            }
        },

        async loadEntry() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                try {
                    const response = await this.$axios.get(`api/company/find/${this.recordId}`)
                    this.form = response.data
                } catch (error) {
                    console.log("Cannot fetch data " + error);
                }
            }
        },

        // Image upload event handlers
        onImageUploadSuccess(responseData) {
            console.log('Image uploaded successfully:', responseData)
            // Update form with new image path
            if (responseData.profile_image_path) {
                this.form.profile_image_path = responseData.profile_image_path
            }
            this.refreshData()
        },

        onImageDeleteSuccess() {
            console.log('Image deleted successfully')
            // Clear image path from form
            this.form.profile_image_path = null
            this.refreshData()
        },

        onImageError(error) {
            console.error('Image operation error:', error)
            // Error handling is already done by the ImageUpload component
            // Additional custom error handling can be added here if needed
        },

        refreshData() {
            this.$emit('reload-data')
        }
    }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>