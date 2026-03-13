
<template>
    <v-app>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row justify="center">
                    <v-col cols="5" class="text-center">
                        <v-btn rounded fab color="primary">
                            <v-icon>mdi-cash-register</v-icon>
                        </v-btn>
                        <div class="text-center">ຂາຍຫນ້າຮ້ານ</div>
                    </v-col>
                    <v-col cols="1">
            <v-divider vertical></v-divider>
          </v-col>
                    <v-col cols="5" class="text-center">
                        <v-btn rounded fab color="primary">
                            <v-icon>mdi-account-tie</v-icon>
                        </v-btn>
                        <div class="text-center">ບັນຊີ</div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
export default {
    layout: "home",
    data() {
        return {
            items: ['POS', 'SALES', 'INVENTORY', 'SETTINGS'],
        };
    },
};
</script>
  

  