<!-- props must be kebab-case in parent component
and be camelCase in child, so we can accces the props in child through 
(this) keyword-->
<template>
    <UserForm :edit-info="el.info" :form-status="el.status" @addOrEditUser="addOrEditUser($event)" />
    <UserGrid :data="el.data" @editInfo="editInfo($event)" @deleteRow="deleteRow($event)" />
</template>
  
<script setup>
import { onMounted, reactive } from 'vue'
import UserGrid from '../components/userGrid.vue'
import CallApi from '../configs/requestApi.config'
import UserForm from '../forms/users.form.vue'
import Toast from '../funcs/toastify'

// we can use ref() or reactive for declare our variables
// let count = ref(0)
const el = reactive({
    status: 'add',
    info: {},
    data: [],
})

const getUserList = async () => {
    let res = await CallApi('get', 'users')
    el.data = res.data
}
const addOrEditUser = async (_body) => {
    let method = 'post', url = `users/`
    if (!!_body.id) {
        method = 'put'
        url += _body.id
    } else delete _body.id
    let res = await CallApi(method, url, _body)
    callToast(res.status)
    getUserList()
    el.status = 'ADD'
}
const deleteRow = async (item) => {
    let res = await CallApi('delete', `users/${item.id}`)
    callToast(res.status)
    getUserList()
}
const editInfo = async (item) => {
    el.status = 'EDIT'
    el.info = item
}

async function callToast(_status) {
    if (_status === 200 || _status === 201)
        await Toast(true)
    else
        await Toast(false)
}
onMounted(() => {
    getUserList()
})
</script>