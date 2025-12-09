<template>
    <div>
        GROUPING
    <v-card class="mx-auto" min-height="100" color="transparent">
        <v-card-text>
            <v-row >
                <v-col cols="6">
                    <slot name="slot1"></slot>
                </v-col>
                <v-col cols="6">
                    <slot name="slot2"></slot>
                </v-col>

            </v-row>
            <v-row>
                <v-col cols="6">
                    <slot name="slot3"></slot>
                </v-col>
                <v-col cols="6">
                    <slot name="slot4"></slot>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            // expand: false,
        }
    }
}
</script>