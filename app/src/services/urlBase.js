import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.15.18:3000/api/v1',
    timeout: 15000
})