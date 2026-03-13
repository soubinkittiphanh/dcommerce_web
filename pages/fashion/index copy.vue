<template>
  <div>
    <!-- carousel -->
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-carousel v-model="model" height="700" hide-delimiter-background>
          <v-carousel-item
            v-for="(image, index) in carouselImages"
            :key="index"
          >
            <img
              :src="image"
              width="100%"
              style="max-height: 700px; object-fit: cover"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- title category -->
    <v-row justify="center" class="text-center mt-10">
      <v-col cols="12" sm="4" md="5">
        <v-divider class="grey"></v-divider>
      </v-col>
      <v-col cols="12" sm="4" md="2"
        ><h2 class="mt-n7">ໝວດໝູ່ສິນຄ້າ</h2>
      </v-col>
      <v-col cols="12" sm="4" md="5">
        <v-divider class="grey"></v-divider>
      </v-col>
    </v-row>
    <!-- category card -->
    <v-row justify="center">
      <v-col v-for="card in categoryCards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-center"
            height="200px"
            style="object-fit: cover"
          >
            <v-row justify="end" class="">
              <v-col cols="12" sm="6" md="6">
                <v-card-text class="">
                  <v-card-title>{{ card.title }}</v-card-title>
                  <v-btn class="zoom-out-btn" color="white"
                    >ເລືອກເບິ່ງຊຸດທັງໝົດ dd
                  </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- banner addtional -->
    <v-row class="pt-5 pb-5">
      <v-col cols="12" sm="3" md="3">
        <v-list-item>
          <v-list-item-content>
            <v-icon color="grey darken-2" size="70"
              >mdi-store-check-outline</v-icon
            >
            <h3 class="text-center mb-0 pb-0">ຈອງສິນຄ້າງ່າຍ</h3>
          </v-list-item-content>
        </v-list-item>
        <div class="text-center">
          <span>
            ທ່ານ​ສາ​ມາດ​ຈອງ​ເຄື່ອງ​ນຸ່ງ​ໄດ້​ຢ່າງ​ງ່າຍ​ດາຍ​ດ້ວຍ​ຕົວ​ທ່ານ​ເອງ​ໂດຍ​ຜ່ານ​ຫນ້າ​ເວັບ​​.
          </span>
        </div>
      </v-col>
      <v-divider vertical class="grey mt-4 mb-4"></v-divider>
      <v-col cols="12" sm="3" md="3">
        <v-list-item>
          <v-list-item-content>
            <v-icon color="grey darken-2" size="70"
              >mdi-thumb-up-outline</v-icon
            >
            <h3 class="text-center mb-0 pb-0">ຊຸດງາມຄຸນນະພາບດີ</h3>
          </v-list-item-content>
        </v-list-item>
        <div class="text-center">
          <span>
            ພວກເຮົາບໍລິການໃຫ້ເຊົ່າຊຸດງາມ ຄຸນນະພາບດີ ລາຄາຖືກ ແລະ
            ສິນຄ້າອັບເດດທຸກມື້.
          </span>
        </div>
      </v-col>
      <v-divider vertical class="grey mt-4 mb-4"></v-divider>
      <v-col cols="12" sm="3" md="3">
        <v-list-item>
          <v-list-item-content>
            <v-icon color="grey darken-2" size="70">mdi-seal</v-icon>
            <h3 class="text-center mb-0 pb-0">ຮັບປະກັນຄຸນນະພາບ</h3>
          </v-list-item-content>
        </v-list-item>
        <div class="text-center">
          <span>
            ທຸກໆສິນຄ້າແມ່ນຮັບປະກັນຄຸນນະພາບ ແລະ ໄດ້ຖືກຄັດເລືອກເປັນຢ່າງດີ.
          </span>
        </div>
      </v-col>
      <v-divider vertical class="grey mt-4 mb-4"></v-divider>
      <v-col cols="12" sm="3" md="3">
        <v-list-item>
          <v-list-item-content>
            <v-icon color="grey darken-2" size="70"
              >mdi-truck-fast-outline</v-icon
            >
            <h3 class="text-center mb-0 pb-0">ຈັດສົ່ງໄວທົ່ວປະເທດ</h3>
          </v-list-item-content>
        </v-list-item>
        <div class="text-center">
          <span>
            ພວກເຮົາຈັດສົ່ງສິນຄ້າທຸກໆມື້ທົ່ວປະເທດ.
            ລູກຄ້າຈະໄດ້ຮັບສິນຄ້າຕາມເວລາແນ່ນອນ.
          </span>
        </div>
      </v-col>
    </v-row>
    <!-- new update product title -->
    <v-row justify="center" class="text-center mt-10">
      <v-col cols="12" sm="4" md="5">
        <v-divider class="grey"></v-divider>
      </v-col>
      <v-col cols="12" sm="4" md="2"
        ><h2 class="mt-n7">ສິນຄ້າອັບເດດໃໝ່</h2>
      </v-col>
      <v-col cols="12" sm="4" md="5">
        <v-divider class="grey"></v-divider>
      </v-col>
    </v-row>
    <!-- new update product card -->
    <v-row justify="center" class="text-center">
      <v-col v-for="n in 18" :key="n" cols="12" sm="2" md="2">
        <new-update-product></new-update-product>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-btn class="blue white--text" outlined>
          ເບິ່ງເພີ່ມເຕີມ <v-icon>mdi-arrow-down</v-icon></v-btn
        >
      </v-col>
      <v-col cols="12" sm="12" md="12" class="text-start">
        <span
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</span
        >
      </v-col>
    </v-row>
    <!-- brand image -->
    <v-row justify="center" class="text-center mt-10">
      <v-col
        v-for="(image, index) in brandImage"
        :key="index"
        cols="12"
        sm="3"
        md="3"
      >
        <v-img :src="image" width="250"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import carouselImage1 from '~/assets/img/carousel/1.jpg'
import carouselImage2 from '~/assets/img/carousel/2.jpg'
import carouselImage3 from '~/assets/img/carousel/3.jpg'
import categoryImage1 from '~/assets/img/category/01.jpg'
import categoryImage2 from '~/assets/img/category/02.jpg'
import categoryImage3 from '~/assets/img/category/03.jpg'
import brandImage1 from '~/assets/img/brand/lovelyn.png'
import brandImage2 from '~/assets/img/brand/pachara.png'
import brandImage3 from '~/assets/img/brand/poem.png'
import brandImage4 from '~/assets/img/brand/wdb.png'

export default {
  name: 'IndexPage',
  data() {
    return {
      model: 0,
      brandImage: [brandImage1, brandImage2, brandImage3, brandImage4],
      carouselImages: [carouselImage1, carouselImage2, carouselImage3],
      categoryCards: [
        {
          title: 'ຊຸດແບນ POEM',
          src: categoryImage1,
          flex: 4,
        },
        {
          title: 'ຊຸດ Dress',
          src: categoryImage2,
          flex: 4,
        },
        {
          title: 'ຊຸດ ລາຕີຍາວ',
          src: categoryImage3,
          flex: 4,
        },
        {
          title: 'ຊຸດ ເຊັດ',
          src: categoryImage1,
          flex: 4,
        },
        {
          title: 'ຊຸດ ສູດ',
          src: categoryImage2,
          flex: 4,
        },
        {
          title: 'ຊຸດ ງານປ້າຍ',
          src: categoryImage3,
          flex: 4,
        },
        {
          title: 'ເສື້ອ',
          src: categoryImage1,
          flex: 4,
        },
        {
          title: 'ສິນຄ້າອື່ນໆ',
          src: categoryImage2,
          flex: 4,
        },
        {
          title: 'ສິນຄ້າອື່ນໆໆ',
          src: categoryImage3,
          flex: 4,
        },
      ],
    }
  },
}
</script>

<style>
.zoom-out-btn {
  transition: transform 0.3s;
}

.zoom-out-btn:hover {
  transform: scale(0.9);
}
</style>
