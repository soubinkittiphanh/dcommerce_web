<template>
  <v-dialog v-model="show" max-width="600px" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ isEdit ? 'Edit SPF' : 'Add SPF' }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="formData.code" :rules="codeRules" label="Code *" required outlined
                  :disabled="isEdit" hint="Code cannot be changed after creation" persistent-hint></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field v-model="formData.value" label="Value" outlined></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea v-model="formData.remark" label="Remark" outlined rows="3"></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-switch v-model="formData.isActive" label="Active" color="success" hide-details class="mt-0"></v-switch>
              </v-col>

              <!-- SHOW_VAT_TICKET Quick Guide / Note -->
              <v-col cols="12" class="pt-2">
                <v-alert
                  dense
                  outlined
                  color="info"
                  class="rounded-lg mb-0"
                  icon="mdi-receipt-text-outline"
                >
                  <div class="font-weight-bold subtitle-2 info--text">
                    Note: SHOW_VAT_TICKET (80mm Receipt VAT)
                  </div>
                  <div class="caption grey--text text--darken-3 mt-1">
                    <div>• <strong>Code:</strong> <code>SHOW_VAT_TICKET</code></div>
                    <div>• <strong>Value:</strong> <code>Y</code> = ສະແດງ VAT ໃນໃບບິນ (Show), <code>N</code> = ເຊື່ອງ VAT (Hide)</div>
                    <div>• <strong>Remark:</strong> ຄວບຄຸມການສະແດງ / ເຊື່ອງ ອາກອນ (VAT) ໃນໃບບິນ 80mm (Default: Y)</div>
                  </div>
                  <div v-if="!isEdit && formData.code !== 'SHOW_VAT_TICKET'" class="mt-2">
                    <v-btn
                      x-small
                      color="info"
                      outlined
                      @click="setVatTicketPreset"
                    >
                      <v-icon x-small left>mdi-plus</v-icon>
                      Use SHOW_VAT_TICKET Preset
                    </v-btn>
                  </div>
                </v-alert>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text :loading="saving" :disabled="!valid" @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SpfDialog',

  props: {
    value: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      valid: false,
      saving: false,
      formData: {
        code: '',
        value: '',
        remark: '',
        isActive: true
      },

      codeRules: [
        v => !!v || 'Code is required',
        v => (v && v.length >= 2) || 'Code must be at least 2 characters',
        v => /^[A-Za-z0-9._-]+$/.test(v) || 'Code can only contain letters, numbers, dots, underscores, and hyphens'
      ]
    }
  },

  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },

    isEdit() {
      return !!(this.item && this.item.id)
    }
  },

  watch: {
    item: {
      handler(newItem) {
        if (newItem) {
          this.formData = {
            id: newItem.id || null,
            code: newItem.code || '',
            value: newItem.value || '',
            remark: newItem.remark || '',
            isActive: newItem.isActive !== undefined ? newItem.isActive : true
          }
        } else {
          this.resetForm()
        }
      },
      immediate: true
    },

    show(newVal) {
      if (!newVal) {
        this.resetForm()
      }
    }
  },

  methods: {
    resetForm() {
      this.formData = {
        code: '',
        value: '',
        remark: '',
        isActive: true
      }
      if (this.$refs.form) {
        this.$refs.form.resetValidation()
      }
    },

    setVatTicketPreset() {
      this.formData = {
        code: 'SHOW_VAT_TICKET',
        value: 'Y',
        remark: 'ຄວບຄຸມການສະແດງ ຫຼື ເຊື່ອງ ອາກອນ (VAT) ໃນໃບບິນ 80mm (Y: ສະແດງ, N: ເຊື່ອງ)',
        isActive: true
      }
    },

    close() {
      this.$emit('close')
    },

    async save() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.saving = true
      try {
        this.$emit('save', { ...this.formData })
      } catch (error) {
        console.error('Save error:', error)
      } finally {
        this.saving = false
      }
    }
  }
}
</script>