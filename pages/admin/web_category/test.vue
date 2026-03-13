<template>
    <div class="drag-drop-lists">
        <v-container>
            <v-row>
                <v-col>
                    <draggable v-model="listOne" group="items" @end="onEnd">
                        <div v-for="(item, index) in listOne" :key="index" class="draggable-item mb-1">
                            <v-btn color="primary" rounded>
                                {{ item.name }}
                            </v-btn>
                        </div>
                    </draggable>
                </v-col>
                <v-col>
                    <draggable v-model="listTwo" group="items" @end="onEnd">
                        <div v-for="(item, index) in listTwo" :key="index" class="draggable-item mb-1">
                            <v-btn color="primary" rounded>
                                {{ item.name }}
                            </v-btn>
                        </div>
                    </draggable>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    components: {
        draggable
    },
    data() {
        return {
            listOne: [
                { name: "Item 1" },
                { name: "Item 2" },
            ],
            listTwo: [
                { name: "Item 3" },
                { name: "Item 4" },
            ]
        };
    },
    methods: {
        onEnd(event) {
            console.log('Drag ended:', event);
            console.log(`LIST ONE ${JSON.stringify(this.listOne)}`);
            console.log(`LIST TWO ${JSON.stringify(this.listTwo)}`);
        }
    }
};
</script>

<style scoped>
.draggable-item {
    cursor: move;
    cursor: grab;
    /* or 'move' */
}
</style>