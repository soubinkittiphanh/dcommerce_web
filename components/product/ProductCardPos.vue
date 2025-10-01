<template>
    <div>
        <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 0" outlined  @click="addProduct(product)">
                <!-- max-width="250" max-height="100" -->
                <v-img   max-height="200px"
                    :src="`${host}/uploads/${imagePath}`" :lazy-src="`${host}/uploads/${imagePath}`">
                </v-img>

                <v-card-text class="text-start">
                    <div class="font-weight-meduim primary--text">
                        {{ productName }} 
                    </div>
                    <div class="font-weight-meduim primary--text"> Stock: {{ stock }} </div>
                    <div class="font-weight-meduim primary--text"> ລາຄາ: {{ formatNumber(product.localPrice) }}</div>
                    <!-- <div class="font-weight-meduim primary--text"> local ລາຄາ: {{ formatNumber(product.localPrice) }}</div> -->
                </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>
  
<script>
import { mapMutations, mapState,mapGetters,mapActions } from 'vuex'
import { getFormatNum } from '../../common/index'
import { hostName } from '~/common/api'
export default {
    name: 'product-card-pos', 
    props: {
        imagePath: {
            type: String,
            default: '',
        },
        productName: {
            type: String,
            default: '',
        },
        product: {
            type: Object,
            default: null,
        },
        stock: {
            type: Number,
            default: 0,
        },

    },
     
    computed: {
        host() {
            return hostName()
        }
    },
    methods:{
        ...mapActions(['addProduct']),
        formatNumber(val){
            return getFormatNum(val)
        }
    }
}
</script>
  
<style scoped>

/* .v-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

/* .v-card v-img {
  max-width: 100;
  height: auto;
  margin: 0 auto;
} */

</style>