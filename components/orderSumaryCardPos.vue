<template>
    <v-card class="ml-4">
        <v-card-title>{{this.orderDetail.title}}</v-card-title>
        <!-- <v-divider></v-divider> -->
        <div class="pa-4">

            <v-row>
                <v-col cols="6" lg="6" style="text-align: left;">ຈຳນວນ</v-col>
                <v-col cols="6" lg="6" style="text-align: right;">{{ this.orderDetail.amount }} ອໍເດີ</v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="6" lg="6" style="text-align: left;">ມູນຄ່າ</v-col>
                <v-spacer></v-spacer>
                <v-col cols="6" lg="6" style="text-align: right;">{{ this.orderDetail.sale }}</v-col>
            </v-row>
        </div>
        <v-divider></v-divider>
        <!-- <v-row>
            <v-col cols="6" lg="6">ສ່ວນຫລຸດ</v-col>
            <v-col cols="6" lg="6">{{ this.orderDetail.discount }}</v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col cols="6" lg="6">COD/RIDER FEE</v-col>
            <v-col cols="6" lg="6">{{ this.orderDetail.gross }}</v-col>
        </v-row> -->
        <!-- <v-divider></v-divider> -->
        <!-- <v-row v-if="showTotal">
            <v-col cols="6" lg="6">ຈຳນວນເງິນທີ່ໄດ້ຮັບຈາກລູກຄ້າ</v-col>
            <v-col cols="6" lg="6">{{ gross}}</v-col>
        </v-row> -->
    </v-card>
</template>
<script>
export default {
    props: {
        orderDetail: {
            type: Object,
            default: '',
        },
        showTotal: {
            type: Boolean,
            default: false,
        },
        gross:{
            type: String,
            default:'0'
        }
        
    },
}
</script>