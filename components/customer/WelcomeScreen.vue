<template>
  <div class="welcome-screen">
    <v-row class="fill-height" no-gutters>
      <v-col cols="12" class="left-section">
        <div class="logo-section">
          <div v-if="(logoUrl && !logoError) || companyLogo.loading" class="company-logo-container">
            <v-progress-circular v-if="companyLogo.loading" indeterminate color="primary" />
            <img v-else-if="logoUrl && !logoError" :src="logoUrl" class="company-logo-image" @error="logoError = true" />
          </div>
          <h1 class="store-name">{{ parsedCompanyInfo?.name || storeName }}</h1>

          <div v-if="(qr1 && !qr1Error) || (qr2 && !qr2Error)" class="payment-methods-preview" :class="{ 'dual-qr': hasTwoQrs }">
            <div v-if="qr1 && !qr1Error" class="payment-method-item">
              <img :src="qr1" class="payment-method-logo" @error="qr1Error = true" />
              <span class="payment-method-name">{{ parsedCompanyInfo?.bank || 'Mobile Banking' }}</span>
            </div>
            <div v-if="qr2 && !qr2Error" class="payment-method-item">
              <img :src="qr2" class="payment-method-logo" @error="qr2Error = true" />
              <span class="payment-method-name">{{ parsedCompanyInfo?.bank2 || 'Mobile Banking 2' }}</span>
            </div>
          </div>
          <div v-else class="welcome-message-container">
            <h1 class="welcome-text primary--text" :style="{ color: ($vuetify.theme.themes.light && $vuetify.theme.themes.light.primary) || '#01532B' }">
              {{ parsedCompanyInfo?.customer_welcome_text || companyLogo?.company?.customer_welcome_text || 'ຍິນດີຕ້ອນຮັບ' }}
            </h1>
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
  props: ['parsedCompanyInfo', 'promotions', 'specialOffers', 'wifiCredentials', 'logoUrl', 'companyLogo', 'storeName', 'bcelQrImage', 'bcelQrImage2', 'companyQRImageUrl', 'companyQRImageUrl2'],
  data() {
    return {
      logoError: false,
      qr1Error: false,
      qr2Error: false,
    }
  },
  computed: {
    qr1() {
      return this.companyQRImageUrl || this.bcelQrImage
    },
    qr2() {
      return this.companyQRImageUrl2 || this.bcelQrImage2
    },
    hasTwoQrs() {
      return !!(this.qr1 && this.qr2)
    }
  }
}
</script>

<style scoped>
.welcome-screen { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; background: white; }
.left-section { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; height: 100%; }
.company-logo-image { max-width: 160px; max-height: 120px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.store-name { font-size: 3.5rem; font-weight: 700; color: #01532B; margin: 1.5rem 0; font-family: 'noto sans lao', sans-serif; }

.payment-methods-preview { 
  display: flex; 
  justify-content: center; 
  gap: 3rem; 
  width: 100%;
  max-width: 1200px;
  margin-top: 1rem;
}

.payment-method-item { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 1rem;
}

.payment-method-logo { 
  width: 320px; 
  height: 320px; 
  object-fit: contain; 
  border-radius: 12px; 
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  background: white;
  padding: 10px;
  border: 1px solid #eee;
}

.payment-method-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #666;
  font-family: 'noto sans lao', sans-serif;
}

.welcome-message-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem;
}

.welcome-text {
  font-size: clamp(8rem, 15vw, 11rem);
  font-weight: 800;
  width: 100%;
  text-align: center;
  line-height: 1.2;
  font-family: 'noto sans lao', sans-serif;
  letter-spacing: 2px;
  animation: fadeInWelcome 1.2s ease-out;
}

@keyframes fadeInWelcome {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.powered-by-welcome { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); }
.powered-by-container-welcome { display: flex; align-items: center; gap: 8px; background: white; padding: 10px 20px; border-radius: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.dcommerce-logo-welcome { height: 20px; }
.dcommerce-text-welcome { font-weight: 700; color: #01532B; letter-spacing: 1px; }
</style>