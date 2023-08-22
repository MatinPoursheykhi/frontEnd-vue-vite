<template>
    <div class="formWrapper">
        <h3>formStatus:{{ statusForm }}</h3>
        <form class="flex flex-col">
            <label for="firstName">firstName:</label>
            <input v-model="info.firstName" class="inputs" id="firstName" placeholder="firstName" name="firstName"
                type="text" />
            <label for="lastName">lastName:</label>
            <input v-model="info.lastName" class="inputs" id="lastName" placeholder="lastName" name="lastName"
                type="text" />
            <label for="age">age:</label>
            <input v-model="info.age" class="inputs" id="age" placeholder="age" name="age" type="number" />
            <label for="mobile">mobile:</label>
            <input v-model="info.mobile" required class="inputs" id="mobile" placeholder="mobile" name="mobile"
                type="text" />
            <label for="email">email:</label>
            <input v-model="info.email" class="inputs" id="email" placeholder="email" name="email" type="text" />
        </form>
        <div>
            <button @click="passInfo(info)">Submit</button>
            <button @click="ClearFrom">Clear the Form</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: { id: "", firstName: "", lastName: "", age: 0, mobile: "", email: "" },
            statusForm: 'ADD'
        }
    },
    methods: {
        passInfo(item) {
            this.$emit('addOrEditUser', item)
            this.ClearFrom()
        },
        setInfo(_item) {
            this.info = _item
        },
        ClearFrom() {
            this.info = { id: "", firstName: "", lastName: "", age: 0, mobile: "", email: "" }
            this.statusForm = 'ADD'
        },
    },

    props: ['editInfo', 'formStatus'],
    watch: {
        editInfo: {
            handler(item) {
                this.setInfo(item)
            }
        },
        formStatus: {
            handler(_item) {
                this.statusForm = _item
            }
        },
        deep: true,
        immediate: true,
    },

}
</script>

<style scoped>
.formWrapper {
    width: 100%;
    height: fit-content;
    background-color: rgb(203, 203, 203);
    border-radius: 15px;
    padding: 20px 0;
    margin: 20px 0;
}

form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

button {
    margin: 10px;
}
</style>