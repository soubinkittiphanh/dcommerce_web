<template>
    <div>
        <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
            <v-card>
                <v-card-title>ເລືອກ Terminal</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-radio-group v-model="terminalSelected" column>
                        <v-radio v-for="terminal in findAllTerminal" :key="terminal.id" :label="terminal.name+' - '+terminal.description"
                            :value="terminal.id"></v-radio>
                        <!-- <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio> -->
                    </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary" rounded variant="text" @click="takeToPOS">
                        ເລືອກ
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 0" outlined @click="takeMeTo">
                <!-- <v-img 
                    :src="imageSvg"  height="80">
                </v-img> -->

                <v-card-text class="text-center">
                    <div>
                        <!-- <v-icon> {{ icon }} </v-icon> -->
                        <!-- <v-avatar color="primary" size="100"> -->
                        <!-- <img :src="~/assets/icons/cashier.svg" height="80"> -->
                        <!-- <img :src="`${icon}`" height="80"> -->
                        <!-- <img :src="imageSvg" height="80"> -->
                        <slot name="iconSlot"></slot>
                        <!-- <MySvgIcon /> -->
                        <!-- <v-icon dark size="50">
                                {{icon}}
                            </v-icon> -->
                        <!-- </v-avatar> -->
                        <!-- <v-btn class="ma-2" color="indigo" :icon="icon"></v-btn> -->
                    </div>
                    <div class="font-weight-meduim primary--text ">
                        <v-chip class="ma-2" style="background-color: transparent; outline: 1px solid gray;"
                            variant="outlined">
                            {{ title }}
                        </v-chip>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'menu-card',
    components: {
        // MySvgIcon
    },
    props: {

        title: {
            type: String,
            default: '',
        },
        path: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },

    },
    data() {
        return {
            imageSvg: require('~/assets/icons/cashier.svg'),
            imageSrc: require('@/assets/image/pos-terminal.png'),
            terminalDialog: false,
            terminalSelected: this.findSelectedTerminal || 1,
        };
    },
    computed: {
        ...mapGetters(['findAllTerminal','findSelectedTerminal']),
    },
    methods: {
        ...mapActions(['setSelectedTerminal']),
        takeMeTo() {
            if (this.path.includes('/pos') && !this.findSelectedTerminal) {
                this.terminalDialog = true
                console.log(`PATH ${this.path}`);
            } else {
                this.$router.push(this.path)
            }
        },
        takeToPOS() {
            this.setSelectedTerminal(this.terminalSelected)
            this.terminalDialog = false
            this.$router.push(this.path)
        }
    }
}
</script>
  
<style></style>