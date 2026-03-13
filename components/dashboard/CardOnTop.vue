<template>
    <v-container class="ma-0 pa-0">
        ON TOP
        <div>
            <v-row>
                <v-col cols="6">
                    <v-card height="60" width="60" :color="color" class="mx-auto  mr-0">
                        <v-card-text class="text-center">
                            <slot name="icon"></slot>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <p class="my-text-bold">{{ title }}</p>
                    <p class="my-text-bold">{{ value }}</p>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: 0,
        },
        color: {
            type: String,
            default: "#26c6da"
        }
    },
    data() {
        return {
            expand: false,
        }
    }
}
</script>
<style scoped>
.my-text-bold {
    font-weight: bolder;
    color: black;
    /* font-size:large */
}
</style>