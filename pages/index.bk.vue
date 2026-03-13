<template>

    <div class="mx-3">
        <h2 class="mt-2 grey--text"> ໝວດສິນຄ້າຂາຍດີ</h2>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" v-for="productItem in productList" :key="productItem.img_path">
                    <product-card :productItem="productItem" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
    //   middleware: 'auths',
    components: {
        // Carousel3d,
        // Slide,
    },
    layout: "products",
    data: () => {
        return {
            notCodData: [],
            productList: [],
            peeAirOutlet: "PEEAIR4",
            greewoodOutlet: "Green",
            deletedCardData: [],
            isLoading: false,
        }
    },
    async created() {
        await this.getData()
    },
    computed: {

        dateNow() {
            const sqlDatetimeNow = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ');
            const fdate = sqlDatetimeNow.substring(0, 11);
            // const tdate=sqlDatetimeNow.substring(0,11);
            return fdate;
        }


    },
    methods: {

        async getData() {
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

    },
}
</script>

<style scoped>

</style>
