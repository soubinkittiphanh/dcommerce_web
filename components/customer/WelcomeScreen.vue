<template>
  <div class="welcome-screen">
    <v-row class="fill-height" no-gutters>
      <v-col cols="12" class="left-section">
        <div class="logo-section">
          <div class="company-logo-container">
            <v-progress-circular v-if="companyLogo.loading" indeterminate color="primary" />
            <img v-else-if="logoUrl" :src="logoUrl" class="company-logo-image" />
            <v-icon v-else size="80" color="#01532B">mdi-storefront</v-icon>
          </div>
          <h1 class="store-name">{{ parsedCompanyInfo?.name || storeName }}</h1>

          <div class="payment-methods-preview">
            <div class="payment-method-item">
              <img :src="companyQRImageUrl || bcelQrImage" class="payment-method-logo" />
              <span class="payment-method-name">{{ parsedCompanyInfo?.bank || 'Mobile Banking' }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    
    <div class="powered-by-welcome">
      <div class="powered-by-container-welcome">
        <span class="powered-by-text-welcome">Powered by</span>
        <img src="~/assets/image/Dcommerce-Logo_DC.png" class="dcommerce-logo-welcome" />
        <span class="dcommerce-text-welcome">DCOMMERCE</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['parsedCompanyInfo', 'promotions', 'specialOffers', 'wifiCredentials', 'logoUrl', 'companyLogo', 'storeName', 'bcelQrImage', 'companyQRImageUrl']
}
</script>

<style scoped>
.welcome-screen { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; }
.left-section { display: flex; flex-direction: column; align-items: center; text-align: center; }
.company-logo-image { max-width: 160px; max-height: 120px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.store-name { font-size: 3rem; font-weight: 700; color: #01532B; margin: 1.5rem 0; }
.payment-method-logo { width: 280px; height: 280px; object-fit: contain; border-radius: 12px; }
.powered-by-welcome { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); }
.powered-by-container-welcome { display: flex; align-items: center; gap: 8px; background: white; padding: 8px 16px; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.dcommerce-logo-welcome { height: 16px; }
.dcommerce-text-welcome { font-weight: 700; color: #01532B; }
</style>