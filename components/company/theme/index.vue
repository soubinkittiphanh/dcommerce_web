<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <!-- Toolbar -->
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="closeDialog">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
                    <v-icon class="mr-2">mdi-palette</v-icon>
                    ຈັດການສີທີມບໍລິສັດ
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="resetToDefault">
                        <v-icon left>mdi-restore</v-icon>
                        ຄ່າເລີ່ມຕົ້ນ
                    </v-btn>
                    <v-btn dark text @click="saveTheme" :loading="saving">
                        <v-icon left>mdi-content-save</v-icon>
                        ບັນທຶກ
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <!-- Loading Overlay -->
            <v-overlay :value="loading" absolute>
                <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
            </v-overlay>

            <!-- Content -->
            <v-container fluid class="pa-6">
                <v-row>
                    <!-- Left Side - Color Controls -->
                    <v-col cols="12" md="6">
                        <v-card elevation="2">
                            <v-card-title class="primary--text">
                                <v-icon color="primary" class="mr-2">mdi-format-color-fill</v-icon>
                                ການຕັ້ງຄ່າສີ
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form">
                                    <!-- Enable Theme Toggle -->
                                    <v-row>
                                        <v-col cols="12">
                                            <v-switch
                                                v-model="themeForm.theme_enabled"
                                                label="ເປີດໃຊ້ງານສີທີມແບບກຳນົດເອງ"
                                                color="primary"
                                                inset
                                            ></v-switch>
                                            <v-alert
                                                v-if="!themeForm.theme_enabled"
                                                type="info"
                                                text
                                                dense
                                            >
                                                ເມື່ອປິດການໃຊ້ງານ ລະບົບຈະໃຊ້ສີເລີ່ມຕົ້ນ
                                            </v-alert>
                                        </v-col>
                                    </v-row>

                                    <v-divider class="my-4"></v-divider>

                                    <!-- Light Theme Colors -->
                                    <v-subheader class="pl-0 subtitle-1 font-weight-bold">
                                        <v-icon left>mdi-white-balance-sunny</v-icon>
                                        Light Theme
                                    </v-subheader>

                                    <v-row>
                                        <!-- Primary Color -->
                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                                v-model="themeForm.theme_primary_color"
                                                label="Primary Color"
                                                :disabled="!themeForm.theme_enabled"
                                                outlined
                                                dense
                                                :rules="colorRules"
                                            >
                                                <template v-slot:prepend>
                                                    <v-menu offset-y :close-on-content-click="false">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-avatar
                                                                size="36"
                                                                :color="themeForm.theme_primary_color"
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                style="cursor: pointer; border: 2px solid #ccc"
                                                            ></v-avatar>
                                                        </template>
                                                        <v-color-picker
                                                            v-model="themeForm.theme_primary_color"
                                                            mode="hexa"
                                                            :disabled="!themeForm.theme_enabled"
                                                        ></v-color-picker>
                                                    </v-menu>
                                                </template>
                                            </v-text-field>
                                        </v-col>

                                        <!-- Secondary Color -->
                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                                v-model="themeForm.theme_secondary_color"
                                                label="Secondary Color"
                                                :disabled="!themeForm.theme_enabled"
                                                outlined
                                                dense
                                                :rules="colorRules"
                                            >
                                                <template v-slot:prepend>
                                                    <v-menu offset-y :close-on-content-click="false">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-avatar
                                                                size="36"
                                                                :color="themeForm.theme_secondary_color"
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                style="cursor: pointer; border: 2px solid #ccc"
                                                            ></v-avatar>
                                                        </template>
                                                        <v-color-picker
                                                            v-model="themeForm.theme_secondary_color"
                                                            mode="hexa"
                                                            :disabled="!themeForm.theme_enabled"
                                                        ></v-color-picker>
                                                    </v-menu>
                                                </template>
                                            </v-text-field>
                                        </v-col>

                                        <!-- Light Primary Color -->
                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                                v-model="themeForm.theme_lightprimary_color"
                                                label="Light Primary Color"
                                                :disabled="!themeForm.theme_enabled"
                                                outlined
                                                dense
                                                :rules="colorRules"
                                            >
                                                <template v-slot:prepend>
                                                    <v-menu offset-y :close-on-content-click="false">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-avatar
                                                                size="36"
                                                                :color="themeForm.theme_lightprimary_color"
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                style="cursor: pointer; border: 2px solid #ccc"
                                                            ></v-avatar>
                                                        </template>
                                                        <v-color-picker
                                                            v-model="themeForm.theme_lightprimary_color"
                                                            mode="hexa"
                                                            :disabled="!themeForm.theme_enabled"
                                                        ></v-color-picker>
                                                    </v-menu>
                                                </template>
                                            </v-text-field>
                                        </v-col>

                                        <!-- Danger Color -->
                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                                v-model="themeForm.theme_danger_color"
                                                label="Danger Color"
                                                :disabled="!themeForm.theme_enabled"
                                                outlined
                                                dense
                                                :rules="colorRules"
                                            >
                                                <template v-slot:prepend>
                                                    <v-menu offset-y :close-on-content-click="false">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-avatar
                                                                size="36"
                                                                :color="themeForm.theme_danger_color"
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                style="cursor: pointer; border: 2px solid #ccc"
                                                            ></v-avatar>
                                                        </template>
                                                        <v-color-picker
                                                            v-model="themeForm.theme_danger_color"
                                                            mode="hexa"
                                                            :disabled="!themeForm.theme_enabled"
                                                        ></v-color-picker>
                                                    </v-menu>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-divider class="my-4"></v-divider>

                                    <!-- Dark Theme Colors (Optional) -->
                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <div>
                                                    <v-icon left>mdi-weather-night</v-icon>
                                                    <span class="subtitle-1 font-weight-bold">Dark Theme (ທາງເລືອກ)</span>
                                                </div>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row>
                                                    <!-- Dark Primary Color -->
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field
                                                            v-model="themeForm.theme_dark_primary"
                                                            label="Dark Primary Color"
                                                            :disabled="!themeForm.theme_enabled"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="optionalColorRules"
                                                        >
                                                            <template v-slot:prepend>
                                                                <v-menu offset-y :close-on-content-click="false">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-avatar
                                                                            size="36"
                                                                            :color="themeForm.theme_dark_primary || '#333'"
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                            style="cursor: pointer; border: 2px solid #ccc"
                                                                        ></v-avatar>
                                                                    </template>
                                                                    <v-color-picker
                                                                        v-model="themeForm.theme_dark_primary"
                                                                        mode="hexa"
                                                                        :disabled="!themeForm.theme_enabled"
                                                                    ></v-color-picker>
                                                                </v-menu>
                                                            </template>
                                                        </v-text-field>
                                                    </v-col>

                                                    <!-- Dark Secondary Color -->
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field
                                                            v-model="themeForm.theme_dark_secondary"
                                                            label="Dark Secondary Color"
                                                            :disabled="!themeForm.theme_enabled"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="optionalColorRules"
                                                        >
                                                            <template v-slot:prepend>
                                                                <v-menu offset-y :close-on-content-click="false">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-avatar
                                                                            size="36"
                                                                            :color="themeForm.theme_dark_secondary || '#555'"
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                            style="cursor: pointer; border: 2px solid #ccc"
                                                                        ></v-avatar>
                                                                    </template>
                                                                    <v-color-picker
                                                                        v-model="themeForm.theme_dark_secondary"
                                                                        mode="hexa"
                                                                        :disabled="!themeForm.theme_enabled"
                                                                    ></v-color-picker>
                                                                </v-menu>
                                                            </template>
                                                        </v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>

                                    <!-- Color Presets -->
                                    <v-divider class="my-4"></v-divider>
                                    <v-subheader class="pl-0 subtitle-1 font-weight-bold">
                                        <v-icon left>mdi-palette-swatch</v-icon>
                                        ຊຸດສີແນະນຳ
                                    </v-subheader>
                                    <v-row>
                                        <v-col
                                            v-for="(preset, index) in colorPresets"
                                            :key="index"
                                            cols="6"
                                            sm="4"
                                            md="3"
                                        >
                                            <v-card
                                                outlined
                                                hover
                                                @click="applyPreset(preset)"
                                                :disabled="!themeForm.theme_enabled"
                                                class="preset-card"
                                            >
                                                <v-card-text class="pa-2 text-center">
                                                    <div class="d-flex justify-center mb-2">
                                                        <v-avatar
                                                            size="24"
                                                            :color="preset.primary"
                                                            class="mr-1"
                                                        ></v-avatar>
                                                        <v-avatar
                                                            size="24"
                                                            :color="preset.secondary"
                                                        ></v-avatar>
                                                    </div>
                                                    <div class="caption">{{ preset.name }}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Right Side - Preview -->
                    <v-col cols="12" md="6">
                        <v-card elevation="2" class="sticky-preview">
                            <v-card-title class="primary--text">
                                <v-icon color="primary" class="mr-2">mdi-eye</v-icon>
                                ຕົວຢ່າງ
                            </v-card-title>
                            <v-card-text>
                                <v-alert type="info" text dense class="mb-4">
                                    ກົດປຸ່ມ "ທົດສອບສີ" ເພື່ອເບິ່ງຕົວຢ່າງສີກ່ອນບັນທຶກ
                                </v-alert>

                                <v-btn
                                    color="primary"
                                    block
                                    class="mb-4"
                                    @click="previewTheme"
                                    :disabled="!themeForm.theme_enabled"
                                >
                                    <v-icon left>mdi-play</v-icon>
                                    ທົດສອບສີ
                                </v-btn>

                                <!-- Preview Components -->
                                <div class="preview-container pa-4">
                                    <v-card outlined class="mb-4">
                                        <v-card-title :style="{ backgroundColor: previewColors.primary, color: 'white' }">
                                            Primary Color Example
                                        </v-card-title>
                                        <v-card-text>
                                            <v-btn color="primary" class="mr-2 mb-2 mt-4">Primary Button</v-btn>
                                            <v-btn color="secondary" class="mr-2 mb-2 mt-4">Secondary Button</v-btn>
                                            <v-btn color="primary" outlined class="mr-2 mb-2 mt-4">Outlined</v-btn>
                                            <v-btn color="primary" text class="mr-2 mb-2 mt-4">Text Button</v-btn>
                                        </v-card-text>
                                    </v-card>

                                    <v-card outlined class="mb-4">
                                        <v-card-text>
                                            <v-chip color="primary" class="mr-2 mb-2" label>
                                                <v-icon left small>mdi-label</v-icon>
                                                Primary Chip
                                            </v-chip>
                                            <v-chip color="secondary" class="mr-2 mb-2" label>Secondary Chip</v-chip>
                                            <v-chip :color="previewColors.lightprimary" class="mr-2 mb-2">Light Primary</v-chip>
                                            <v-chip :color="previewColors.danger" class="mr-2 mb-2" text-color="white">
                                                <v-icon left small>mdi-alert</v-icon>
                                                Danger
                                            </v-chip>
                                        </v-card-text>
                                    </v-card>

                                    <v-card outlined class="mb-4">
                                        <v-card-text>
                                            <v-progress-linear
                                                color="primary"
                                                value="75"
                                                height="25"
                                                class="mb-2"
                                            >
                                                <template v-slot:default="{ value }">
                                                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                                                </template>
                                            </v-progress-linear>

                                            <v-progress-circular
                                                :value="75"
                                                color="secondary"
                                                size="50"
                                                width="5"
                                            >75</v-progress-circular>
                                        </v-card-text>
                                    </v-card>

                                    <v-alert type="success" text>Success Alert</v-alert>
                                    <v-alert type="info" text>Info Alert</v-alert>
                                    <v-alert type="warning" text>Warning Alert</v-alert>
                                    <v-alert type="error" text>Error Alert</v-alert>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'

export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        companyId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            loading: false,
            saving: false,
            themeForm: {
                theme_primary_color: '#01532B',
                theme_secondary_color: '#337555',
                theme_lightprimary_color: '#80a995',
                theme_danger_color: '#D00505',
                theme_dark_primary: null,
                theme_dark_secondary: null,
                theme_enabled: true
            },
            previewColors: {
                primary: '#01532B',
                secondary: '#337555',
                lightprimary: '#80a995',
                danger: '#D00505'
            },
            colorPresets: [
                {
                    name: 'Default Green',
                    primary: '#01532B',
                    secondary: '#337555',
                    lightprimary: '#80a995',
                    danger: '#D00505'
                },
                {
                    name: 'Ocean Blue',
                    primary: '#006BA6',
                    secondary: '#0496FF',
                    lightprimary: '#7FB8D4',
                    danger: '#D00000'
                },
                {
                    name: 'Purple Dream',
                    primary: '#5A189A',
                    secondary: '#9D4EDD',
                    lightprimary: '#C77DFF',
                    danger: '#E63946'
                },
                {
                    name: 'Sunset Orange',
                    primary: '#D2691E',
                    secondary: '#FF8C00',
                    lightprimary: '#FFA54F',
                    danger: '#DC143C'
                },
                {
                    name: 'Forest',
                    primary: '#2D6A4F',
                    secondary: '#52B788',
                    lightprimary: '#95D5B2',
                    danger: '#C1121F'
                },
                {
                    name: 'Royal',
                    primary: '#1A1A40',
                    secondary: '#27374D',
                    lightprimary: '#526D82',
                    danger: '#DC3545'
                },
                {
                    name: 'Pink Lady',
                    primary: '#C73E8D',
                    secondary: '#E75DA5',
                    lightprimary: '#F988C1',
                    danger: '#DC2626'
                },
                {
                    name: 'Teal',
                    primary: '#008080',
                    secondary: '#20B2AA',
                    lightprimary: '#7FFFD4',
                    danger: '#DC143C'
                }
            ],
            colorRules: [
                v => !!v || 'ກະລຸນາເລືອກສີ',
                v => /^#[0-9A-F]{6}$/i.test(v) || 'ຮູບແບບສີບໍ່ຖືກຕ້ອງ (ຕ້ອງເປັນ #RRGGBB)'
            ],
            optionalColorRules: [
                v => !v || /^#[0-9A-F]{6}$/i.test(v) || 'ຮູບແບບສີບໍ່ຖືກຕ້ອງ (ຕ້ອງເປັນ #RRGGBB)'
            ]
        }
    },
    computed: {
        dialog: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    },
    watch: {
        value(newVal) {
            if (newVal) {
                this.loadTheme()
            }
        }
    },
    methods: {
        async loadTheme() {
            this.loading = true
            try {
                const response = await this.$axios.get(`api/company/find/${this.companyId}`)
                const company = response.data

                // Load theme data from company
                this.themeForm = {
                    theme_primary_color: company.theme_primary_color || '#01532B',
                    theme_secondary_color: company.theme_secondary_color || '#337555',
                    theme_lightprimary_color: company.theme_lightprimary_color || '#80a995',
                    theme_danger_color: company.theme_danger_color || '#D00505',
                    theme_dark_primary: company.theme_dark_primary || null,
                    theme_dark_secondary: company.theme_dark_secondary || null,
                    theme_enabled: company.theme_enabled !== false
                }

                // Set preview colors
                this.previewColors = {
                    primary: this.themeForm.theme_primary_color,
                    secondary: this.themeForm.theme_secondary_color,
                    lightprimary: this.themeForm.theme_lightprimary_color,
                    danger: this.themeForm.theme_danger_color
                }

            } catch (error) {
                console.error('Error loading theme:', error)
                this.$toast.error('ບໍ່ສາມາດໂຫລດຂໍ້ມູນທີມໄດ້')
            } finally {
                this.loading = false
            }
        },

        async saveTheme() {
            if (!this.$refs.form.validate()) {
                this.$toast.error('ກະລຸນາກວດສອບຂໍ້ມູນໃຫ້ຖືກຕ້ອງ')
                return
            }

            this.saving = true
            try {
                await this.$axios.put(`api/company/company-theme/${this.companyId}`, this.themeForm)

                swalSuccess(this.$swal, 'ສຳເລັດ', 'ບັນທຶກສີທີມສຳເລັດແລ້ວ')
                
                // Apply theme immediately
                this.applyThemeToVuetify()
                
                this.$emit('theme-updated')
                this.closeDialog()

            } catch (error) {
                console.error('Error saving theme:', error)
                swalError2(this.$swal, 'ຜິດພາດ', 'ບໍ່ສາມາດບັນທຶກສີທີມໄດ້')
            } finally {
                this.saving = false
            }
        },

        previewTheme() {
            this.previewColors = {
                primary: this.themeForm.theme_primary_color,
                secondary: this.themeForm.theme_secondary_color,
                lightprimary: this.themeForm.theme_lightprimary_color,
                danger: this.themeForm.theme_danger_color
            }

            // Temporarily apply to Vuetify for preview
            this.$vuetify.theme.themes.light.primary = this.themeForm.theme_primary_color
            this.$vuetify.theme.themes.light.secondary = this.themeForm.theme_secondary_color
            this.$vuetify.theme.themes.light.lightprimary = this.themeForm.theme_lightprimary_color
            this.$vuetify.theme.themes.light.danger = this.themeForm.theme_danger_color

            this.$toast.success('ກຳລັງສະແດງຕົວຢ່າງສີ')
        },

        applyThemeToVuetify() {
            if (this.themeForm.theme_enabled) {
                this.$vuetify.theme.themes.light.primary = this.themeForm.theme_primary_color
                this.$vuetify.theme.themes.light.secondary = this.themeForm.theme_secondary_color
                this.$vuetify.theme.themes.light.lightprimary = this.themeForm.theme_lightprimary_color
                this.$vuetify.theme.themes.light.danger = this.themeForm.theme_danger_color

                if (this.themeForm.theme_dark_primary) {
                    this.$vuetify.theme.themes.dark.primary = this.themeForm.theme_dark_primary
                    this.$vuetify.theme.themes.dark.secondary = this.themeForm.theme_dark_secondary
                }
            }
        },

        applyPreset(preset) {
            this.themeForm.theme_primary_color = preset.primary
            this.themeForm.theme_secondary_color = preset.secondary
            this.themeForm.theme_lightprimary_color = preset.lightprimary
            this.themeForm.theme_danger_color = preset.danger

            this.$toast.success(`ນຳໃຊ້ຊຸດສີ "${preset.name}" ແລ້ວ`)
        },

        resetToDefault() {
            this.themeForm = {
                theme_primary_color: '#01532B',
                theme_secondary_color: '#337555',
                theme_lightprimary_color: '#80a995',
                theme_danger_color: '#D00505',
                theme_dark_primary: null,
                theme_dark_secondary: null,
                theme_enabled: true
            }
            this.$toast.info('ຣີເຊັດເປັນຄ່າເລີ່ມຕົ້ນແລ້ວ')
        },

        closeDialog() {
            this.dialog = false
        }
    }
}
</script>

<style scoped>
.sticky-preview {
    position: sticky;
    top: 20px;
}

.preview-container {
    background-color: #f5f5f5;
    border-radius: 8px;
}

.preset-card {
    cursor: pointer;
    transition: all 0.3s;
}

.preset-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>