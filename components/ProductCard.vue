<template>
    <v-hover v-slot="{ hover }" open-delay="400">
        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" @click="productDetail" class="mx-auto"
            max-width="344">
            <v-img :src="'https://nodejsclusters-99563-0.cloudclusters.net/' + productItem.img_path" height="200px"
                cover></v-img>
            <v-card-title class="subtitle-2">{{ productItem.title }}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0">
                    <v-rating :value="productItem.sale_count / 2" color="amber" dense half-increments readonly size="14">
                    </v-rating>

                </v-row>
                <v-row>

                    <div class="grey--text ml-4">
                        {{ 10 * 10 }} % | {{ productItem.pro_name }}
                    </div>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-btn color="#FFA500">
                    Add to cart
                </v-btn>

                <v-btn color="#FFA500">
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    props: ["productItem"],
    data() {
        return {
            show: false,
        }
    },
    methods: {
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        productDetail() {
            // this.$router.push(`/admin/product/${idx.pro_id}`)
            this.$router.push(`/product/${this.productItem.pro_id}`)
            this.$store.dispatch('assignProductDetail', this.productItem)
        }
    }

}
</script>