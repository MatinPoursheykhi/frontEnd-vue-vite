import axios from 'axios';

// pls use (yarn server) to start json-server {https://www.npmjs.com/package/json-server}
// and run project on different terminal through (yarn dev)
// on an other terminanl simultaneously
const dataBase = 'jsonServer'
switch (dataBase) {
    case 'jsonServer': axios.defaults.baseURL = 'http://localhost:3000/'
        break
    case 'local': axios.defaults.baseURL = 'http://localhost:8000/'
        break
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
export default async function CallApi(_method, _url, _data = {}) {
    let Method = switchMethods(_method)
    let res = await Method(_url, _data, config)
    return res
}

function switchMethods(_method) {
    switch (_method) {
        case 'post':
            return axios.post
        case 'put':
            return axios.put
        case 'get':
            return axios.get
        case 'delete':
            return axios.delete
    }
}