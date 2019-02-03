import axios from 'axios'
import userActions from '../actions/userActions'
import store from '../store'
import { API_URL } from '../config'

export default class {
    static get() {
        return JSON.parse(window.sessionStorage.getItem('user'))
    }
    static set(user) {
        window.sessionStorage.setItem('user', JSON.stringify(user))
        store.dispatch(userActions.set(user))
    }
    static facebookLogin = async (user) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(`${API_URL}/authentication/facebook`, user)
                resolve(response.data)
            } catch (err) {
                reject(err)
            }
        })
    }
    static logout() {
        window.sessionStorage.removeItem('user')
        window.location.href = '/'
    }
}