# DCommerce POS & ERP - Coding Standards & Architecture

## Stack Overview
- **Framework**: Nuxt 2 (Vue 2.7+ with Options API)
- **UI Library**: Vuetify 2.x (`v-btn`, `v-dialog`, `v-data-table`, `v-select`, `v-date-picker`, etc.)
- **Icons**: FontAwesome (`fas fa-*`, `far fa-*`) & Material Design Icons (`@mdi/font`)
- **Desktop Runtime**: Electron (`electron`, `main.js`, `preload.js`)
- **State & HTTP**: Vuex Store (`store/`), Nuxt Axios (`$axios`)
- **Utilities**: `moment` (date handling), `sweetalert2` / `vue-sweetalert2`, `lodash`

---

## Code Style & Conventions

### 1. Vue 2 Component Pattern (Options API)
Always adhere to the standard Vue 2 Options API structure:
```javascript
export default {
  name: 'ComponentName',
  components: {},
  props: {
    visible: { type: Boolean, default: false },
    itemData: { type: Object, default: () => ({}) }
  },
  emits: ['close', 'save', 'refresh'],
  data() {
    return {
      loading: false,
      isSubmitting: false,
      formData: { ... },
      formErrors: []
    }
  },
  computed: {
    isFormValid() { ... }
  },
  watch: {
    visible(val) { ... }
  },
  created() {},
  mounted() {},
  methods: {
    async handleSave() { ... }
  }
}
```

### 2. Localization & Lao Language
- The primary UI language for business forms and alerts is **Lao** (ພາສາລາວ) with English subtitles/hints where helpful.
- Preserve standard Lao terminology:
  - `ບັນທຶກ` (Save), `ແກ້ໄຂ` (Edit), `ລຶບ` (Delete), `ຍົກເລີກ` (Cancel)
  - `ພິມບິນ` (Print Bill/Receipt), `ລາຍຮັບ` (Income/Receipt), `ລາຍຈ່າຍ` (Expense)
  - `ສຳເລັດ` (Success), `ກຳລັງດຳເນີນການ` (Processing/Pending)

### 3. Currency & Number Formatting
- The system deals with multi-currency (LAK, THB, USD, CNY).
- Always format currency values cleanly with thousands separators (e.g. `1,000,000 ₭` or formatted via project helper functions).
- Do not round currency intermediate calculations prematurely.

### 4. API Calls & Error Handling
- Use `async/await` with `try...catch...finally` blocks.
- Track submitting/loading flags (`loading = true`, `isSubmitting = true`) to prevent double-submissions.
- Display errors using `Swal.fire` (SweetAlert2) or `$toast`.

### 5. Electron vs Web Runtime Safety
- Always guard Electron-specific APIs (NFC readers, direct serial/USB ESCPOS printer communication) with runtime checks to avoid breaking standard browser mode:
```javascript
if (window && window.process && window.process.type) {
  // Electron environment
}
```
