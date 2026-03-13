<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    {{ `ກຸ່ມສິນຄ້າຫນ້າເວັບ: ${category.name} ` }}
                </v-chip>
                <!-- {{ JSON.stringify(product) }} -->
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-autocomplete item-text="pro_name" item-value="id" :items="productList" label="ສິນຄ້າ*"
                        v-model="selectProductId"></v-autocomplete>

                </v-form>
                <div>
                    <v-row justify="center" align="center">
                        <v-col cols="12"> <v-btn size="large" variant="outlined" @click="addProductToGroup"
                                class="primary" rounded>
                                <span class="mdi mdi-note-plus-outline"></span>
                                ເພີ່ມສິນຄ້າເຂົ້າກຸ່ມ
                            </v-btn>
                        </v-col>
                        <v-col cols="12">
                            <v-divider></v-divider>
                            <div class="mx-2">ສິນຄ້າ ທີ່ເລືອກ</div>
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-chip v-for="product in localCategory.products" :key="product.id" class="ma-2" color="warning"
                            variant="outlined" @click="removeProductFromGroup(product)">
                            {{ product.id }} - {{ product.pro_name }}
                        </v-chip>
                    </v-row>
                </div>
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
import { swalSuccess, swalError2, getFormatNum } from '~/common'
export default {
    props: {
        category: {
            type: Object,
            require: true,
        },
        isCreate: {
            type: Boolean,
            require: true,
        }
    },
    data() {
        return {
            productList: [],
            selectProductId: null,
            localCategory: this.category,
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 150) || 'Name must be less than 20 characters'
            ],
        };
    },
    // mounted() {
    //     this.loadEntry();
    // },
    async created() {
        // this.
        this.loadEntry();
    },
    methods: {
        async commitRecord() {
            if (!this.isloading) {
                this.isloading = true
                let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/update/${this.localCategory.id}`
                if (this.isCreate) {
                    await this.$axios.post(api, this.localCategory).then(response => {
                        this.refreshData()
                        this.$emit('close-dialog')
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');

                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    console.log(`update category product`);
                    this.localCategory.productList = this.localCategory.products
                    await this.$axios.put(api, this.localCategory).then(response => {
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
        formatNumber(value) {
            return getFormatNum(value)
        },
        addProductToGroup() {
            console.log(`Add product to group handler`);
            if (!this.selectProductId) return
            const newGroup = this.productList.find(el => el.id == this.selectProductId)
            console.log(`Authority ${newGroup.id}`);
            if (this.localCategory.products.length == 0) {
                console.log(`TEHERE IS NO TERMINAL`);
                this.localCategory.products.push(newGroup)
            } else if (this.localCategory.products == 'undefined') {
                this.localCategory.products.push(newGroup)
            } else {
                const group = this.localCategory.products.find(el => el.id == this.selectProductId)
                console.log(`ADD TERMINAL ${group}`)
                if (!group) this.localCategory.products.push(newGroup)
            }
        },
        removeProductFromGroup(group) {
            console.log(`Remove product to group handler`);
            const idx = this.localCategory.products.indexOf(group)
            this.localCategory.products.splice(idx, 1);
        },
        async loadEntry() {
            console.log(`===> Update form record load`);
            await this.$axios.get(`api/product/find`).then(response => {
                this.productList = response.data
                this.selectProductId = this.productList[0]['id']
            }).catch(error => {
                console.log("Cannot fetch data " + error);
            })
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
