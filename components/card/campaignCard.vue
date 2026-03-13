<template>
    <div>
        <v-card>
            <v-card-title>
                Campaign
            </v-card-title>
            <v-card-text>
                <v-data-table v-if="campaignList" :headers="headers" :search="search" :items="campaignList">

                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            campaignList: [],
            search: '',
            headers: [
                {
                    text: 'ຊື່ Campaign',
                    align: 'center',
                    value: 'title',
                    sortable: true,
                },
                { text: 'ສິນຄ້າ', align: 'center', value: 'pro_name' },
                { text: 'ວັນທີເລີ່ມ', align: 'center', value: 'start' },
                { text: 'ວັນທີສິ້ນສຸດ', align: 'center', value: 'end' },
                { text: 'ເຂົ້າເຖິງ', align: 'center', value: 'reach' },
                { text: 'ຄອມເມັ້ນ', align: 'center', value: 'comments' },
                { text: 'Result', align: 'center', value: 'results' },
                { text: 'ປິດການຂາຍ', align: 'center', value: 'closed' },
                { text: 'ຍອດທີ່ຈ່າຍໄປ', align: 'center', value: 'budgetSpend' },

            ],
        }
    },
    async mounted() {
        await this.loadCampaignData()
    },
    methods: {
        async loadCampaignData() {
            this.isloading = true
            await this.$axios.get("/api/campaign/find_summary").then(response => {
                this.campaignList = response.data.rows.map(el => {
                    return el
                })
                for (const iterator of this.campaignList) {
                    iterator.start = iterator.start.split('T')[0]
                    iterator.end = iterator.end.split('T')[0]
                }
                this.headers.length = 0;
                // for (const iterator of response.data.fieldList) {
                //     this.headers.push(
                //         {
                //             text: iterator,
                //             align: 'end',
                //             value: iterator,
                //             sortable: true,
                //         },
                //     )
                // }
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        },
    }
}
</script>

<style></style>