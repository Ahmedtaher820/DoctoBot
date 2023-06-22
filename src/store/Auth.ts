import { defineStore } from "pinia"
import type { Login, Register, User } from "../types/type"
import Auth from "../Services/Auth"
export const authStore = defineStore({
    id: 'auth',
    state: () => ({
        userInfo: {
            name: '',
            email: '',
            password: '',
            role: '',
            active: false,
            _id: '',
        } as User,
    }),
    actions: {
        async getUserInfo(){
            return Auth.getUserInfo().then((res)=>{
                console.log(res)
            })
        },
        async userLogin(payload: Login) {
            return Auth.userLogin(payload).then((res) => {
                this.userInfo = res.data.data
                localStorage.setItem('token',JSON.stringify(res.data.token))
                return res
            })
        },
        async userRegister(payload: Register): Promise<any> {
            return Auth.userRigster(payload).then((res) => {
                this.userInfo = res.data.data
                localStorage.setItem('token',JSON.stringify(res.data.token))
                localStorage
                return res
            })
        },
        async forgetPassword(payload:{email:string}): Promise<object>{
            return Auth.forgetPassword(payload).then((res)=>{
                return res
            })
        }
    }
})