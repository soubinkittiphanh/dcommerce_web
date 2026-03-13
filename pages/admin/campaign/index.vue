<template>
    <div>
        <v-dialog v-model="campaignFormDialog" max-width="1200">
            <v-card class="pa-4">
                <campaign-form :isEdit="isEdit" :campaignId="selectedCampaignId" :key="campaignFormKey"
                    @close-dialog="campaignFormDialog = false"></campaign-form>
            </v-card>
        </v-dialog>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card>
            <v-card-title>
                <v-layout row wrap>
                    <v-col cols="6">

                        <v-text-field type="date" label="ວັນທີເລີ່ມ*" v-model="startDate"
                            hint="example of helper text only on focus"></v-text-field>

                        <v-text-field type="date" label="ວັນທີເລີ່ມ*" v-model="endDate"
                            hint="example of helper text only on focus"></v-text-field>

                        <v-btn @click="openCampaignForm" class="primary" size="large" variant="outlined" rounded> ເພີ່ມແຄມເປນ </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
                        <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line
                            hide-detailsx />
                        <v-btn @click="loadData" class="primary" size="large" variant="outlined" rounded> ດຶງລາຍງານ </v-btn>

                    </v-col>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-row>
                        <v-col cols="6" lg="6">
                        </v-col>
                        <v-col cols="6" lg="6">
                        </v-col>
                    </v-row>
                </v-layout>
            </v-card-text>
            <v-data-table v-if="campaignList" :headers="headers" :search="search" :items="campaignList">
                <template v-slot:[`item.function`]="{ item }">
                    <v-btn color="blue darken-1" text @click="editItem(item.id)
                    wallet = true
                        ">
<i class="fa-regular fa-pen-to-square"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.id`]="{ item }">
                    <v-btn color="blue darken-1" text @click="editItem(item.id)
                    wallet = true
                        ">
                        <i class="fas fa-eye"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.isActive`]="{ item }">
                    <v-switch disabled v-model="item.isActive" label="Active" :true-value="true"
                        :false-value="false"></v-switch>
                </template>
            </v-data-table>

        </v-card>
    </div>
</template>

<script>
import { mysqlDateToDateObject, parseDate, getFirstDayOfMonth } from '~/common'
import CampaignForm from '~/components/campaign/CampaignForm.vue'
export default {
    components: { CampaignForm },
    data() {
        return {
            campaignList: [],
            selectedCampaignId: '',
            startDate: null,
            endDate: null,
            isEdit: false,
            campaignFormKey: 1,
            headers: [
                {
                    text: 'ຊື່ Campaign',
                    align: 'center',
                    value: 'name',
                    sortable: true,
                },
                { text: 'ສິນຄ້າ', align: 'center', value: 'product' },
                { text: 'ວັນທີເລີ່ມ', align: 'center', value: 'start' },
                { text: 'ວັນທີສິ້ນສຸດ', align: 'center', value: 'end' },
                { text: 'ສະຖານະ', align: 'center', value: 'isActive' },
                {
                    text: 'ລາຍລະອຽດ',
                    align: 'end',
                    value: 'id',
                    sortable: false,
                },
                {
                    text: '',
                    align: 'end',
                    value: 'function',
                    sortable: false,
                },
            ],
            isloading: false,
            campaignFormDialog: false,
            search: '',
            userId: '',
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            // dateFormatted: this.formatDate(
            //     getFirstDayOfMonth(new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            //         .toISOString()
            //         .substr(0, 10))

            // ),
            dateFormatted2: this.formatDate(
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
            ),
            menu1: false,
            menu2: false,

        }
    },
    mounted() {
        this.loadData();
        const today = new Date().toISOString().substr(0, 10);
        this.endDate =today;
        this.startDate = getFirstDayOfMonth()
    },
    watch: {
        startDate(val) {
            this.loadData()
        },
        endDate(val) {
            this.loadData()
        },
    },
    methods: {
        openCampaignForm() {
            this.isEdit = false
            this.selectedCampaignId = null;
            this.campaignFormKey += 1
            this.campaignFormDialog = true;
        },
        editItem(campaignId) {
            this.campaignFormKey += 1
            this.selectedCampaignId = campaignId;
            this.isEdit = true
            this.campaignFormDialog = true;
        },
        async loadData() {
            this.isloading = true
            await this.$axios.get("/api/campaign/find").then(response => {
                this.campaignList = response.data.map(el => {
                    return {
                        id: el["id"],
                        name: el["title"],
                        start: el["start"].split("T")[0],
                        end: el["end"].split("T")[0],
                        product: el["product"],
                        budget: el["budget"],
                        isActive: el["isActive"],
                        entries: el["entries"],
                        function: el["id"],
                    }
                })
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        },
        formatDate(date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
    }

}
</script>

<style></style>