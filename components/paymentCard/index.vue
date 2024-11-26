<template>
    <div>
        <v-hover v-slot:default="{ hover }" open-delay="100">
        <v-card :elevation="hover ? 16 : 0" @click="selectePaymentMethod(id)" class="rounded-card" rounded
            :style="id != currentPayment ? `background-color: #F5F5F5;` : `background-color: #08A045;`">
            <!-- <v-img 
                    :src="imageSvg"  height="80">
                </v-img> -->

            <v-card-text class="text-center">
                <div>
                    <!-- <v-icon> {{ icon }} </v-icon> -->
                    <!-- <v-avatar color="primary" size="100"> -->
                    <!-- <img :src="~/assets/icons/cashier.svg" height="80"> -->
                    <!-- <img :src="`${icon}`" height="80"> -->
                    <!-- <img :src="imageSvg" height="80"> -->
                    <slot name="iconSlot"></slot>
                    <!-- <MySvgIcon /> -->
                    <!-- <v-icon dark size="50">
                                {{icon}}
                            </v-icon> -->
                    <!-- </v-avatar> -->
                    <!-- <v-btn class="ma-2" color="indigo" :icon="icon"></v-btn> -->
                </div>
                <!-- <div> -->
                    <!-- <v-chip class="ma-2" style="background-color: transparent; outline: 1px solid gray;"
                            variant="outlined"> -->
                    {{ title }}
                    <!-- </v-chip> -->
                <!-- </div> -->
            </v-card-text>
        </v-card>
        </v-hover>
    </div>
</template>
  
<script>
// import MySvgIcon from '~/assets/icons/cashier.svg'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'menu-card',
    components: {
        // MySvgIcon
    },
    props: {

        title: {
            type: String,
            default: '',
        },
        path: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        id: {
            type: Number,
            default: 0,
        },

    },
    data() {
        return {
            imageSvg: require('~/assets/icons/cashier.svg'),
            imageSrc: require('@/assets/image/pos-terminal.png'),
        };
    },
    computed: {
        ...mapGetters(['cartOfProduct', 'currenctSelectedCategoryId', 'currentSelectedCustomer', 'currentSelectedPayment']),
        currentPayment() {
            return this.currentSelectedPayment
        },
    },
    methods: {
        ...mapActions(['deleteProduct', 'addProduct', 'clearCart', 'updateSelectedCategoryId', 'deleteProductFromCart', 'addSelectedPayment', 'addCustomer']),
        selectePaymentMethod(id) {
            console.log("selected payment ", id);
            this.addSelectedPayment(id)
            console.log("SAATE ", this.currentPayment);
        },

    }
}
</script>
<style scoped></style>
