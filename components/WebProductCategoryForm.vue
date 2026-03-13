<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    {{ `ສິນຄ້າ: ${product.pro_name} ລາຄາ: ${formatNumber(product.pro_price)}` }}
                </v-chip>
                <!-- {{ JSON.stringify(product) }} -->

            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-autocomplete item-text="name" item-value="id" :items="categoryList" label="ໝວດສິນຄ້າຫນ້າເວັບ*"
                        v-model="selectCategoryId"></v-autocomplete>

                </v-form>
                <div>
                    <v-row justify="center" align="center">
                        <v-col cols="12">
                            <v-btn size="large" variant="outlined" @click="addProductToGroup" class="primary" rounded>
                                <span class="mdi mdi-note-plus-outline"></span>
                                ເພີ່ມກຸ່ມ
                            </v-btn>
                        </v-col>
                        <v-col cols="12">
                        <v-divider></v-divider>
                        <div class="mx-2">ກຸ່ມສິນຄ້າຫນ້າເວັບ ທີ່ເລືອກ</div>
                        <v-divider></v-divider>
                    </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-chip v-for="group in localProduct.webProductGroups" :key="group.id" class="ma-2"
                            color="warning" variant="outlined" @click="removeProductFromGroup(group)">
                            {{ group.id }} - {{ group.name }}
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
        product: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {
            categoryList: [],
            selectCategoryId: null,
            localProduct: this.product,
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
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/product_set_groups/${this.product.id}`
                console.log("API => ", api);
                if (this.isCreate) {
                    await this.$axios.post(api, this.localProduct).then(response => {
                        this.refreshData()
                        this.$emit('close-dialog')
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');

                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    this.localProduct.groupList = this.localProduct.webProductGroups
                    await this.$axios.put(api, this.localProduct).then(response => {
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
            if (!this.selectCategoryId) return
            const newGroup = this.categoryList.find(el => el.id == this.selectCategoryId)
            console.log(`Authority ${newGroup.id}`);
            if (this.localProduct.webProductGroups.length == 0) {
                console.log(`TEHERE IS NO TERMINAL`);
                this.localProduct.webProductGroups.push(newGroup)
            } else if (this.localProduct.webProductGroups == 'undefined') {
                this.localProduct.webProductGroups.push(newGroup)
            } else {
                const group = this.localProduct.webProductGroups.find(el => el.id == this.selectCategoryId)
                console.log(`ADD TERMINAL ${group}`)
                if (!group) this.localProduct.webProductGroups.push(newGroup)
            }
        },
        removeProductFromGroup(group) {
            console.log(`Remove product to group handler`);
            const idx = this.localProduct.webProductGroups.indexOf(group)
            this.localProduct.webProductGroups.splice(idx, 1);
        },
        async loadEntry() {
            console.log(`===> Update form record load`);
            await this.$axios.get(`api/webproductgroup/find`).then(response => {
                this.categoryList = response.data
                this.selectCategoryId = this.categoryList[0]['id']
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
