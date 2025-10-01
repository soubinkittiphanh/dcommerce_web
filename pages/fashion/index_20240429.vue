
<template>
    <div class="mr-16 ml-16">
        <div class="brands mb-4 mt-2">
            <brands></brands>
        </div>

        <div class="discount-products mb-4">
            <v-card class="pa-6 rounded-lg">
                <v-row>
                    <v-list class="" style="margin-bottom: -10px">
                        <v-list-item>
                            <v-avatar tile color="green rounded-pill" size="40" class="mr-2">
                                <v-icon color="white">mdi-cash-minus</v-icon></v-avatar>
                            <v-list-item-title>
                                <h3>ສິນຄ້າຫຼຸດລາຄາ</h3>
                            </v-list-item-title>
                            <v-list-item-icon> </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                    <v-spacer />
                    <v-btn text color="green" class="green--text mt-3" @click="gotoProductDetail">
                        ເບິ່ງເພີ່ມເຕີມ
                        <v-icon right dark> mdi-arrow-right-circle </v-icon>
                    </v-btn>

                    <v-col cols="12">
                        <v-divider class="mb-2"></v-divider>
                        <div class="row">
                            <div v-for="(item, index) in productList" :key="index" 
                                class="col-12 col-md-2 col-sm-6 col-xs-6 text-center">
                                <discount-products-card :product="item"></discount-products-card>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <div class="banner-1 mb-4">
            <v-card class="rounded-lg">
                <v-img max-width="100%" :src="Banner_1"></v-img>
            </v-card>
        </div>

        <div class="hot-products mb-4">
            <v-card class="pa-6 rounded-lg">
                <v-row>
                    <v-list class="" style="margin-bottom: -10px">
                        <v-list-item>
                            <v-avatar tile color="red rounded-pill" size="40" class="mr-2">
                                <v-icon color="white">mdi-fire</v-icon></v-avatar>
                            <v-list-item-title>
                                <h3>ສີນຄ້າຍອດນິຍົມ</h3>
                            </v-list-item-title>
                            <v-list-item-icon> </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                    <v-spacer />
                    <v-btn text color="red" class="red--text mt-3">
                        ເບິ່ງເພີ່ມເຕີມ
                        <v-icon right dark> mdi-arrow-right-circle </v-icon>
                    </v-btn>

                    <v-col cols="12">
                        <v-divider class="mb-2"></v-divider>
                        <div class="row">
                            <!-- <div v-for="(item, index) in productList" :key="index"
                                class="col-12 col-md-2 col-sm-6 col-xs-6 text-center">
                                <hot-products-card :product-image="item.img_path" :product-name="item.pro_name" :product-price="formatPrice(item.pro_price)"></hot-products-card>
                            </div> -->
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <div class="banner-2 mb-4">
            <v-card class="rounded-lg">
                <v-img max-width="100%" :src="Banner_2"></v-img>
            </v-card>
        </div>

        <div class="new-products mb-4">
            <v-card class="pa-6 rounded-lg">
                <v-row>
                    <v-list class="" style="margin-bottom: -10px">
                        <v-list-item>
                            <v-avatar tile color="blue rounded-pill" size="40" class="mr-2">
                                <v-icon color="white">mdi-new-box</v-icon></v-avatar>
                            <v-list-item-title>
                                <h3>ສິນຄ້າໃໝ່</h3>
                            </v-list-item-title>
                            <v-list-item-icon> </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                    <v-spacer />
                    <!-- <v-btn text color="blue" class="blue--text">
              ເບິ່ງເພີ່ມເຕີມ
              <v-icon right dark> mdi-arrow-right-circle </v-icon>
            </v-btn> -->

                    <v-col cols="12">
                        <v-divider class="mb-2"></v-divider>
                        <div class="row">
                            <!-- <div v-for="(item, index) in productList" :key="index"
                                class="col-12 col-md-2 col-sm-6 col-xs-6 text-center">
                                <new-products-card :product-image="item.img_path" :product-name="item.pro_name" :product-price="formatPrice(item.pro_price)"></new-products-card>
                            </div> -->
                            <div class="col-12 col-md-12 col-sm-6 col-xs-6 text-center">
                                <v-btn class="blue white--text" outlined>
                                    ເບິ່ງເພີ່ມເຕີມ <v-icon>mdi-arrow-down</v-icon></v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <!-- <div class="">
        <v-col cols="12">
          <div class="row">
            <footer></footer>
          </div>
        </v-col>
      </div> -->
    </div>
</template>
  
<script>
import Banner_1 from '~/assets/img/banners/banner_1.png'
import Banner_2 from '~/assets/img/banners/banner_2.png'
import {  getFormatNum } from "~/common";
import { hostName } from '~/common/api'
export default {
    layout: "web",
    data() {
        return {
            isLoading: false,
            Banner_1: Banner_1,
            Banner_2: Banner_2,
            productList: [],
            icons: ['mdi-facebook', 'mdi-whatsapp'],
        }
    },
    computed: {
        host() {
            return hostName()
        }
    },
    async created() {
        await this.loadProduct();

    },
    methods: {
        formatPrice(price) {
            console.log(`Price ${getFormatNum(price)}`);
            return getFormatNum(price)
        },
        gotoProductDetail(productId) {
            this.$router.push({ name: 'product-details', params: { id: productId } });
        },
        async loadProduct() {
            this.isLoading = true
            await this.$axios
                .get('product_mobile_f')
                .then((res) => {
                    // console.log("DATA LENG: ",res.length());
                    // return;
                    this.productList = res.data.map((el) => {
                        return {
                            card_count: el.card_count,
                            categ_name: el.categ_name,
                            cost_price: el.cost_price,
                            id: el.id,
                            img_name: el.img_name,
                            img_path: el.img_path,
                            outlet: el.outlet,
                            outlet_name: el.outlet_name,
                            pro_category: el.pro_category,
                            pro_desc: el.pro_desc,
                            pro_id: el.pro_id,
                            pro_image_path: el.pro_image_path,
                            pro_name: el.pro_name,
                            pro_price: el.pro_price,
                            pro_status: el.pro_status,
                            retail_cost_percent: el.retail_cost_percent,
                            sale_count: el.sale_count,
                            stock_count: el.stock_count,
                        }

                    })
                    console.log("all data1: ", this.productList[0].img_path);
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
        },
    }
}
</script>
  
<style></style>
  