<template>
  <v-dialog v-model="internalShow" max-width="600" persistent>
    <v-card>
      <v-card-title class="bg-primary text-white">
        <v-icon class="mr-2" color="white">mdi-note-text</v-icon>
        {{ title }}
      </v-card-title>

      <v-card-text class="pt-4">
        <v-textarea
          v-model="internalNotes"
          :label="label"
          :placeholder="placeholder"
          variant="outlined"
          rows="5"
          counter
          :maxlength="maxLength"
          :hint="hint"
          persistent-hint
          auto-grow
          @keydown.ctrl.enter="saveNotes"
          @keydown.meta.enter="saveNotes"
        >
          <template v-slot:prepend>
            <v-icon color="primary">mdi-pencil</v-icon>
          </template>
        </v-textarea>

        <!-- Quick Notes Chips -->
        <div v-if="showQuickNotes" class="mt-3">
          <div class="text-subtitle-2 mb-2 font-weight-medium">
            Quick Notes:
          </div>
          <v-chip-group column>
            <v-chip
              v-for="quickNote in quickNotesList"
              :key="quickNote"
              @click="addQuickNote(quickNote)"
              color="primary"
              variant="outlined"
              size="small"
              class="cursor-pointer"
            >
              <v-icon size="small" class="mr-1">mdi-plus-circle-outline</v-icon>
              {{ quickNote }}
            </v-chip>
          </v-chip-group>
        </div>

        <!-- Custom Quick Notes -->
        <div v-if="customQuickNotes && customQuickNotes.length > 0" class="mt-3">
          <div class="text-subtitle-2 mb-2 font-weight-medium">
            Custom Notes:
          </div>
          <v-chip-group column>
            <v-chip
              v-for="note in customQuickNotes"
              :key="note"
              @click="addQuickNote(note)"
              color="secondary"
              variant="outlined"
              size="small"
              class="cursor-pointer"
            >
              <v-icon size="small" class="mr-1">mdi-star-outline</v-icon>
              {{ note }}
            </v-chip>
          </v-chip-group>
        </div>

        <!-- Current Notes Display -->
        <v-alert
          v-if="existingNotes && existingNotes !== internalNotes"
          type="info"
          variant="tonal"
          class="mt-3"
          density="compact"
        >
          <div class="text-subtitle-2 font-weight-medium mb-1">
            Previous Notes:
          </div>
          <div class="text-body-2">{{ existingNotes }}</div>
        </v-alert>

        <!-- Character Count Info -->
        <div class=" text-grey mt-2">
          {{ internalNotes ? internalNotes.length : 0 }} / {{ maxLength }} characters
          <span v-if="internalNotes && internalNotes.length > maxLength * 0.8" class="warning--text">
            ({{ maxLength - internalNotes.length }} remaining)
          </span>
        </div>
      </v-card-text>

      <v-card-actions class="px-4 pb-4">
        <v-btn 
          color="grey" 
          variant="text" 
          @click="closeDialog"
          :disabled="loading"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="internalNotes"
          color="error"
          variant="text"
          @click="clearNotes"
          :disabled="loading"
        >
          <v-icon class="mr-1" size="small">mdi-delete</v-icon>
          Clear
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          @click="saveNotes"
          :disabled="!internalNotes || internalNotes.trim() === ''"
          :loading="loading"
        >
          <v-icon class="mr-1" size="small">mdi-content-save</v-icon>
          Save Notes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NotesDialog',

  props: {
    show: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String,
      default: ''
    },
    existingNotes: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'Add Notes'
    },
    label: {
      type: String,
      default: 'Notes'
    },
    placeholder: {
      type: String,
      default: 'Enter notes here...'
    },
    hint: {
      type: String,
      default: 'These notes will be saved'
    },
    maxLength: {
      type: Number,
      default: 500
    },
    showQuickNotes: {
      type: Boolean,
      default: true
    },
    quickNotes: {
      type: Array,
      default: () => [
        'No ice',
        'Extra spicy',
        'Less sugar',
        'Allergic to nuts',
        'Take away',
        'Urgent order',
        'VIP customer',
        'No MSG',
      ]
    },
    customQuickNotes: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      internalNotes: ''
    }
  },

  computed: {
    internalShow: {
      get() {
        return this.show
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },

    quickNotesList() {
      return this.quickNotes
    }
  },

  watch: {
    show(newVal) {
      if (newVal) {
        // Load notes when dialog opens
        this.internalNotes = this.notes || ''
      }
    },
    
    notes(newVal) {
      this.internalNotes = newVal || ''
    }
  },

  methods: {
    addQuickNote(note) {
      if (this.internalNotes && !this.internalNotes.includes(note)) {
        // Add with separator if there's existing content
        const separator = this.internalNotes.trim().endsWith('.') || 
                         this.internalNotes.trim().endsWith(';') ? ' ' : '; '
        this.internalNotes = this.internalNotes.trim() + separator + note
      } else if (!this.internalNotes) {
        this.internalNotes = note
      }
    },

    clearNotes() {
      this.internalNotes = ''
      this.$emit('update:notes', '')
    },

    saveNotes() {
      const trimmedNotes = this.internalNotes.trim()
      
      if (!trimmedNotes) {
        this.$emit('show-message', 'Please enter some notes', 'warning', 'mdi-alert')
        return
      }

      this.$emit('save', trimmedNotes)
      this.$emit('update:notes', trimmedNotes)
    },

    closeDialog() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  opacity: 0.8;
}
</style>