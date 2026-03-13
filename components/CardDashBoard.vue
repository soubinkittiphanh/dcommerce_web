<template>
  <div>
    <v-card class="mx-auto" color="#73c883" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-chat </v-icon>
            <span >ຮ້ານ PEEAIR4</span>
          </v-card-title>

          <v-card-text >
            COD ຈຳນວນ {{ this.getFormatNum(countCODByOutlet1.total) }} ອໍເດີ
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img class="elevation-6" alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>ຍອດລວມ {{ this.getFormatNum(countCODByOutlet1.totalAmount) }}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-card-actions>
        </v-card>
  </div>
</template>

<script>
export default {
props:{
    detail: {
            type: String,
            default: '',
        },
}
}
</script>

<style>

</style>