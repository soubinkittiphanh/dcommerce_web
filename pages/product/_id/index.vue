<template>
    <div style="background-color: white;" v-if="productDetail">
        <!-- <v-card class="pa-6 rounded-lg"> -->
        <v-row>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-forward</v-icon>
                </template>
            </v-breadcrumbs>
        </v-row>
        <v-row no-gutters class="mt-2" >
            <v-col cols="12" sm="7" >
                <v-row no-gutters justify="center">
                    <v-col cols="12" sm="12" align-self="start">
                        <!-- <v-list>
                            <v-list-item v-for="(image, index) in productDetail.images" :key="index">
                                <v-img height="20px" width="20px" :src="host + '/' + image.img_path" alt="Thumbnail Image"
                                    aspect-ratio="1" @click="selectedThumbnail = index" :class="{
        'selected-thumbnail': selectedThumbnail === index,
    }" />
                            </v-list-item>
                        </v-list> -->
                        <v-row no-gutters>
                            <!-- <v-col v-for="(image, index) in productDetail.images" :key="index"> -->
                                <v-card v-for="(image, index) in productDetail.images" :key="index">
                                    <v-img  height="50" width="50"  :src="host + '/' + image.img_path"
                                    alt="Thumbnail Image" aspect-ratio="1" @click="selectedThumbnail = index"
                                    :class="{ 'selected-thumbnail': selectedThumbnail === index }" />
                                </v-card>
                            <!-- </v-col> -->
                        </v-row>
                    </v-col>
                    <v-col cols="10" sm="10" class="mt-2">
                        <v-carousel hide-delimiters v-model="selectedThumbnail">
                            <v-carousel-item v-for="(image, index) in productDetail.images" :key="index" :value="index">
                                <img :src="host + '/' + image.img_path" height="100%" alt="Main Image"
                                    contain />
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="5">
                <div class="ml-2">
                    <h3 class="">
                        <!-- Mi Monitor ໜ້າຈໍຄອມ 34 inch Curved Gaming 2K 144Hz Xiaomi -->
                        {{ productDetail.pro_name }}
                    </h3>
                    <div class="price primary--text mt-4 mb-2">
                        <h3> ລາຄາ: {{ formatPrice(productDetail.pro_price) }}</h3>
                    </div>
                    <v-divider class="mb-6 mt-6"></v-divider>
                    <div class="">
                        <v-row>
                            <v-col cols="6">
                                <v-list>
                                    <v-subheader>ຂະໜາດ:</v-subheader>
                                    <v-list-item v-for="(size, index) in sizes" :key="index"
                                        :class="{ 'active-siz': index === activeSizeIndex }" @click="selectSize(index)">
                                        {{ size }}
                                    </v-list-item>
                                </v-list>
                            </v-col>

                            <v-col cols="6">
                                <v-list>
                                    <v-subheader>ສີ:</v-subheader>
                                    <v-list-item v-for="(color, index) in colors" :key="index"
                                        :class="{ 'active-col': index === activeColorIndex }"
                                        @click="selectColor(index)">
                                        <v-avatar size="20" :class="`color-box ${color}`"></v-avatar>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider class="mb-6 mt-6"></v-divider>
                    <div class="buy-product">
                        <div class="wrapper">
                            <button class="btn btn--minus" @click="changeQuantity('-1')" type="button" name="button">
                                -
                            </button>
                            <input class="quantity" type="text" name="name" :value="quantity" />
                            <button class="btn btn--plus" @click="changeQuantity('1')" type="button" name="button">
                                +
                            </button>
                        </div>

                        <v-col cols="12" sm="6">
                            <div class="mt-6">
                                <v-btn block class="ml-n2" color="primary" @click="takeOrder"> ຊື້ເລີຍ</v-btn>
                            </div>
                        </v-col>

                        <div class="mt-6">
                            <v-row align="center" class="social-link">
                                <v-col cols="12">
                                    <span>ແບ່ງປັນຜ່ານ:</span>
                                    <v-btn icon x-large color="blue" @click="shareViaFacebook">
                                        <v-icon>mdi-facebook</v-icon>
                                    </v-btn>
                                    <v-btn icon x-large color="green" @click="shareViaWhatsapp">
                                        <v-icon>mdi-whatsapp</v-icon>
                                    </v-btn>
                                    <!-- <v-btn icon x-large color="purple">
                                        <v-icon>mdi-instagram</v-icon>
                                    </v-btn> -->
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="mt-4 pa-6" cols="12" sm="6">
                <v-list-item-title>
                    <h3>Specification</h3>
                </v-list-item-title>
                <span>
                    <!-- Brand: No <br />
                        Model: Champion Foosball Table <br />Playfield: 20mm thickness MDF
                        with HPL on both sides (Two support bars at the back) <br />
                        Long side aprons: 38mm thickness, 40cm wide MDF with HPL on both
                        sides <br />
                        Legs: 100x80mm rectangle shaped hollow Metal legs <br />
                        Player rods: 3.5mm thickness, Ꝋ15.8mm hollow and Seamless
                        High-strength steel rods <br />
                        Balls: 8pcs <br />
                        Package Dimension: 144 x 75.6 x 90 cm <br />
                        Product Weight: 99kg Package <br />
                        Weight: 108kg -->
                    {{ productDetail.pro_desc }}
                </span>
            </v-col>
            <v-col class="mt-4 pa-6" cols="12" sm="6">

                <!-- <v-list-item-title>
                        <h3>Description</h3>
                    </v-list-item-title>
                    <span class="">ໂຕະເຕະບານ ລຸ້ນທີ່ໃຊ້ແຂ່ງຂັນ ສຳລັບຈັດກິດຈະກຳແຂ່ງຂັນ ຫຼື ຜ່ອນຄ່າຍ
                        ຝຶກທັດສະການຫຼິ້ນບານໃຫ້ຄ່ອງແຄ້ວ ແລະ ມີສະໄຕສ ສາມາດຫຼິ້ນໄດ້ພ້ອມກັນ 4
                        ຄົນ <br />
                        ວັດສະດຸເຮັດຈາກໄມ້ທີ່ແຂງແກ່ນທົນທານ <br />
                        ນ້ຳໜັກ 99 kg <br />
                        ຂະໜາດ 144 x 75.6 x 90 cm <br />
                        ລູກບານ 8 ໜ່ວຍ</span> -->
            </v-col>
        </v-row>
        <!-- </v-card> -->
    </div>
</template>

<script>
import {  getFormatNum } from '~/common'
import { hostName } from '~/common/api'
export default {
    layout: "web",
    // async mounted() {
    //     // console.log('FORMDATA ID: ' + this.formData.pro_id)
    //     // this.pro_id = this.$route.params.id
    //     // this.formData.pro_id = this.$route.params.id
    //     console.log(`Mounted: ${this.$route.params.id}`)
    //     await this.loadProductById()
    //     // this.$route.params.id && this.fetchProId(this.$route.params.id)
    // },
    async created() {
        // this.loadEntry();
        await this.loadProductById()
    },
    data() {
        return {
            items: [
                {
                    text: 'ຫນ້າຫຼັກ',
                    disabled: false,
                    href: '/',
                },
                // {
                //     text: 'Category 1',
                //     disabled: false,
                //     href: 'breadcrumbs_link_1',
                // },
                {
                    text: 'ສິນຄ້າ',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
            sizes: ['M', 'L', 'XL'],
            activeSizeIndex: 0, // Set the initial selected size (M)
            colors: ['yellow', 'pink', 'cyan'],
            activeColorIndex: 0, // Set the initial selected color (yellow)
            quantity: 1, // Initial quantity value
            productDetail: null,
            selectedThumbnail: 0, // Initially selected thumbnail
        }
    },

    methods: {
        whatsappTrigger(productLinkId) {
            // TODO: Get whatsapp function done
        },
        shareViaFacebook() {
            const urlToShare = encodeURIComponent(`http://www.dcommerce.la/product/${this.$route.params.id}`);
            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
            window.open(facebookUrl, '_blank');
        },
        shareViaWhatsapp() {
            const urlToShare = encodeURIComponent(`http://www.dcommerce.la/product/${this.$route.params.id}`);
            const text = encodeURIComponent("Here's the text I want to share via WhatsApp!");
            const url = `https://wa.me/?text=${urlToShare}`;
            window.open(url, '_blank');
        },
        takeOrder() {
            const urlToShare = encodeURIComponent(`http://www.dcommerce.la/product/${this.$route.params.id}`);
            const text = encodeURIComponent("ສະບາຍດີ ສົນໃຈສິນຄ້າ");
            const url = `https://wa.me/?text=ສະບາຍດີ ສົນໃຈສິນຄ້າ\n ${urlToShare}`;
            window.open(url, '_blank');
        },
        formatPrice(price) {
            console.log(`Price ${getFormatNum(price)}`);
            return getFormatNum(price)
        },
        selectSize(index) {
            this.activeSizeIndex = index
            // You can add logic to handle the selected size here
        },
        selectColor(index) {
            this.activeColorIndex = index
            // You can add logic to handle the selected color here
        },

        changeQuantity: function (num) {
            this.quantity += +num
            console.log(this.quantity)
            !isNaN(this.quantity) && this.quantity > 0
                ? this.quantity
                : (this.quantity = 0)
        }, async loadProductById() {
            this.isLoading = true
            await this.$axios
                .get(`/product/find/${this.$route.params.id}`)
                .then((res) => {
                    this.productDetail = res.data
                    console.log("all data1: ", this.productDetail);
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
        },
    },
    computed: {
        host() {
            return hostName()
        }
    },
}
</script>

<style>
.active-col {
    background-color: #c0ffec;
}

.active-siz {
    background-color: #c0ffec;
}

/* Product Quantity */
.wrapper {
    height: 40px;
    display: flex;
}

.quantity {
    border: none;
    text-align: center;
    width: 70px;

    font-size: 16px;
    color: #43484d;
    font-weight: 300;
    border: 1px solid #e1e8ee;
}

.btn {
    border: 1px solid #e1e8ee;
    width: 50px;
    background-color: #e1e8ee;
    /*   border-radius: 6px; */
    cursor: pointer;
}

button:focus,
input:focus {
    outline: 0;
}

.selected-thumbnail {
    border: 2px solid #3498db;
}
</style>