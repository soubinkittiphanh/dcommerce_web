<template>
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <!-- ************ Bottom sheet show error message ************* -->
        <v-card>
            <v-card-subtitle>

            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <!-- ******* Header Card OPEN *******-->
                <v-card>
                    <v-card-text>
                        <div>
                            <v-row>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">
                                            <!-- :disabled="isUpdate" -->
                                            <v-text-field disabled label="Login ID*" v-model="record.cus_id"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <!-- :disabled="isUpdate" -->
                                            <v-text-field v-if="!isUpdate" label="ລະຫັດຜ່ານ*"
                                                v-model="record.cus_pass"></v-text-field>
                                            <v-text-field v-model="record.cus_name" label="ຊື່ຜູ້ໃຊ້"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-switch v-model="record.cus_active" label="Active" :true-value="true"
                                                :false-value="false"></v-switch>
                                        </v-col>

                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="ອີເມວ" v-model="record.cus_email">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-autocomplete item-text="code" item-value="id" :items="groupList"
                                                label="ກຸ່ມຜູ້ໃຊ້*" v-model="record.groupId"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12">

                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4" style="text-align: end;">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="ເບີໂທ" v-model="record.cus_tel">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-autocomplete item-text="name" item-value="id" :items="terminalList"
                                                label="Terminal*" v-model="terminalSelected"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-btn size="large" variant="outlined" @click="addTerminal" class="primary"
                                                rounded>
                                                <span class="mdi mdi-note-plus-outline"></span>
                                                ເພີ່ມ Terminal
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div>
                            <v-row no-gutters>
                                <v-chip v-for="terminal in record.terminals" :key="terminal.id" class="ma-2" color="warning"
                                    variant="outlined" @click="removeTerminal(terminal)">
                                    {{ terminal.name }} - {{ terminal.description }}
                                </v-chip>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
                <!-- ******* Header Card CLOSE *******-->
                <v-divider></v-divider>
                <!-- ******* Line Card OPEN *******-->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="toggleDialog">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2, confirmSwal, dayCount, getNextDate, replaceAll } from '~/common'
export default {
    props: {
        recordId: {
            type: Number,
            default: 0,
        },
        reserveUserId: {
            type: Number,
            default: 0,
        },
        isUpdate: {
            type: Boolean,
            default: false
        },

    },
    directives: {
        commaThousand
    },
    async created() {
        await this.loadTerminal()
        await this.loadGroup()
        if (this.isUpdate) {
            console.log("View old record");
            this.isloading = true
            await this.loadTransaction()
            this.isloading = false
        } else {
            const today = new Date().toISOString().substr(0, 10);
            this.record.bookingDate = today;
            this.record.srcLocationId = 1;
            this.record.desLocationId = 1;
            this.record.terminals = []
            this.record.cus_id = this.reserveUserId
        }
    },
    methods: {
        removeTerminal(terminal) {
            const idx = this.record.terminals.indexOf(terminal)
            this.record.terminals.splice(idx, 1);
        },
        addTerminal() {
            const newTerminal = this.terminalList.find(el => el.id == this.terminalSelected)
            console.log(`terminal ${newTerminal}`);
            if (this.record.terminals.length == 0) {
                console.log(`TEHERE IS NO TERMINAL`);
                this.record.terminals.push(newTerminal)
            } else if (this.record.terminals == 'undefined') {
                this.record.terminals.push(newTerminal)
            } else {
                const terminal = this.record.terminals.find(el => el.id == this.terminalSelected)
                console.log(`ADD TERMINAL ${terminal}`)
                if (!terminal) this.record.terminals.push(newTerminal)
            }


            // this.record.terminals.splice(idx, 1);
        },
        async loadTransaction() {
            await this.$axios
                .get(`api/user/find/${this.recordId}`)
                .then((res) => {
                    this.record = res.data;
                    console.log("User ===> ", res.data);
                    // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },

        async loadTerminal() {
            await this.$axios
                .get(`api/terminal/find`)
                .then((res) => {
                    this.terminalList = res.data;
                    console.log("TERMINAL => ", res.data);
                    // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')

                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },
        async loadGroup() {
            await this.$axios
                .get(`api/group/find`)
                .then((res) => {
                    this.groupList = res.data;
                    console.log("Group count => ", res.data.length);
                    // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },

        toggleDialog() {
            this.$emit('close-dialog')
        },
        async commitRecord() {
            // ********** If header has data, that means we go for update API ********** //
            if (this.isloading) return
            this.isloading = true
            if (this.isUpdate) {
                await this.$axios
                    .put(`api/user/update/${this.recordId}`, this.record)
                    .then((res) => {
                        this.$emit('reload')
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        console.error(er)
                        swalError2(this.$swal, 'Error', er.response.data)
                    })
            } else {
                await this.$axios
                    .post(`api/user/create`, this.record)
                    .then((res) => {
                        this.$emit('reload')
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        console.error(er)
                        swalError2(this.$swal, 'Error', er.response.data)
                    })
            }

            this.isloading = false

        }
    },
    computed: {
        ...mapGetters(['findAllCurrency']),
    },
    data() {
        return {
            search: '',
            numberCommaRule: (value) => {
                const regex = /^[0-9,]*$/;
                return regex.test(value) || 'Only numbers and commas are allowed';
            },
            terminalList: [],
            groupList: [],
            isloading: false,
            record: {
                "id": null,
                "cus_id": 100,
                "cus_pass": "1111",
                "cus_name": "USER NAME",
                "cus_tel": "TELEPHONE",
                "cus_email": "EMAIL",
                "cus_active": true,
                'terminals': [],
                groupId:1,
            },
            terminalSelected: 1,
        }
    },

}
</script>

<style></style>