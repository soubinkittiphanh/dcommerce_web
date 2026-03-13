<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1>ຍິນດີຕ້ອນຮັບ</h1>
        <p>ກະລຸນາເຂົ້າສູ່ລະບົບບັນຊີຂອງທ່ານ</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">ອີເມວ</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="ໃສ່ອີເມວຂອງທ່ານ"
            required
            :disabled="loading"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">ລະຫັດຜ່ານ</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="ໃສ່ລະຫັດຜ່ານຂອງທ່ານ"
            required
            :disabled="loading"
          />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>

        <div class="form-options">
          <label class="checkbox-label">
            <input v-model="form.remember" type="checkbox" />
            <span>ຈື່ຂ້ອຍໄວ້</span>
          </label>
          <nuxt-link to="/forgot-password" class="forgot-link">
            ລືມລະຫັດຜ່ານ?
          </nuxt-link>
        </div>

        <button type="submit" class="login-button" :disabled="loading">
          <span v-if="!loading">ເຂົ້າສູ່ລະບົບ</span>
          <span v-else>ກຳລັງເຂົ້າສູ່ລະບົບ...</span>
        </button>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
      </form>

      <div class="signup-link">
        ຍັງບໍ່ມີບັນຊີ?
        <nuxt-link to="/register">ລົງທະບຽນ</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      errors: {
        email: '',
        password: ''
      },
      errorMessage: '',
      successMessage: '',
      loading: false
    }
  },

  methods: {
    validateForm() {
      this.errors = { email: '', password: '' }
      let isValid = true

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.form.email) {
        this.errors.email = 'ກະລຸນາໃສ່ອີເມວ'
        isValid = false
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'ກະລຸນາໃສ່ອີເມວທີ່ຖືກຕ້ອງ'
        isValid = false
      }

      // Password validation
      if (!this.form.password) {
        this.errors.password = 'ກະລຸນາໃສ່ລະຫັດຜ່ານ'
        isValid = false
      } else if (this.form.password.length < 6) {
        this.errors.password = 'ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ'
        isValid = false
      }

      return isValid
    },

    async handleLogin() {
      this.errorMessage = ''
      this.successMessage = ''

      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        // Replace this with your actual API call
        // Example using Nuxt Auth or axios:
        // await this.$auth.loginWith('local', {
        //   data: {
        //     email: this.form.email,
        //     password: this.form.password
        //   }
        // })

        // Simulated API call
        await this.simulateLogin()

        this.successMessage = 'ເຂົ້າສູ່ລະບົບສຳເລັດ! ກຳລັງໂຫຼດ...'
        
        // Redirect after successful login
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 1500)

      } catch (error) {
        this.errorMessage = error.message || 'ເຂົ້າສູ່ລະບົບບໍ່ສຳເລັດ. ກະລຸນາກວດສອບຂໍ້ມູນຂອງທ່ານ.'
      } finally {
        this.loading = false
      }
    },

    // Simulated login for demonstration
    simulateLogin() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate successful login
          if (this.form.email && this.form.password) {
            resolve({ success: true })
          } else {
            reject(new Error('Invalid credentials'))
          }
        }, 1000)
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 420px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
}

.login-header p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.form-group input {
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.form-group input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.error {
  font-size: 12px;
  color: #e53e3e;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #666;
}

.checkbox-label input[type="checkbox"] {
  cursor: pointer;
}

.forgot-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-button {
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.3s;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  padding: 12px;
  background-color: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 14px;
  text-align: center;
}

.success-message {
  padding: 12px;
  background-color: #efe;
  border: 1px solid #cfc;
  border-radius: 8px;
  color: #3c3;
  font-size: 14px;
  text-align: center;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

.signup-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  margin-left: 5px;
}

.signup-link a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }

  .login-header h1 {
    font-size: 24px;
  }
}
</style>