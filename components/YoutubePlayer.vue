
<template>
    <div class="text-center">
        <v-card>
            <v-card-text class="text-center">
                <youtube :video-id="youtubeLink"></youtube>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn size="large" variant="outlined" @click="$emit('close-dialog')" class="warning" rounded>
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
export default {
    props: {
        youtubeLink: {
            type: String,
            require: true,
        },
    },
};
</script>
