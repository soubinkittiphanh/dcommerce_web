
<template>
    <v-form @submit.prevent="handleSubmit" ref="form">
        <v-text-field v-model="form.name" label="ຊື່" required :rules="nameRules"></v-text-field>
        <v-text-field v-model="form.tel" label="ເບີໂທ" required :rules="telRules"></v-text-field>
        <v-select v-model="form.rating" :items="ratings" label="Rating" required></v-select>
        <v-checkbox v-model="form.isActive" label="Is Active"></v-checkbox>
        <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                tel: '',
                rating: 'Gold',
                isActive: true
            },
            ratings: [
                'Gold',
                'Silver',
                'Platinum',
                'Diamond',
                'Master'
            ], nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 20) || 'Name must be less than 20 characters'
            ],
            telRules: [
                value => !!value || 'Telephone is required',
                value => /^[0-9]{10}$/.test(value) || 'Telephone must be a valid 10-digit phone number'
            ]
        };
    },
    mounted() {
        this.loadRating();
    },
    methods: {
        handleSubmit() {
            if (this.$refs.form.validate()) {
                // Implement form submission logic here
                // Implement form submission logic here
                this.$axios.post("api/rider/create",this.form).then(response => {

                }).catch(error => {
                    console.log("Error: ", error
                    );
                })
            }

        },
        loadRating() {
            this.$axios.get('api/rider/find').then(response => {
                response.data.map(el => {
                    console.log("El => " + el['name']);
                })
            }).catch(error => {
                console.log("Cannot fetch data " + error);
            })
        }
    },
    computed: {
        // Add any necessary computed properties here
    }
};
</script>
