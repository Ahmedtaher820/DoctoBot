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
            _id: '',
            phone:''
        } as User,
        recoveryCode: false,
        emailForgetPassword: ''
    }),
    actions: {
        async getUserInfo(){
            return Auth.getUserInfo().then((res)=>{
                this.userInfo = res.data.data
            })
        },
        async userLogin(payload: Login) {
            return Auth.userLogin(payload).then((res) => {
                this.userInfo = res.data?.data
                localStorage.setItem('token',JSON.stringify(res.data?.token))
                console.log(res)
                return res
            })
        },
        async userRegister(payload: Register): Promise<any> {
            return Auth.userRigster(payload).then((res) => {
                this.userInfo = res.data.data
                localStorage.setItem('token',JSON.stringify(res.data.token))
                return res
            })
        },
        async forgetPassword(payload:{email:string}): Promise<object>{
            return Auth.forgetPassword(payload).then((res)=>{
                return res
            })
        },
        async resetCodeFun(payload: {resetCode:string}): Promise<any>{
            return Auth.resetCodeFun(payload).then((res)=>{
                return res
            })
        },
        async resetPassword(payload: {email:string , newPassword: string}): Promise<any>{
            return Auth.resetPassword(payload).then((res)=>{
                this.userInfo = res.data.data
                localStorage.setItem('token',JSON.stringify(res.data.token))
                return res
            })
        },
        async addNewBooking(payload: {[key:string]:string[]}): Promise<any>{
            return Auth.addNewBooking(payload).then((res)=>{
                return res
            })
        },
        async getReservations(uuid:string,calendar:string): Promise<any>{
            return Auth.getReservations(uuid,calendar).then((res)=>{
                return res
            })
        },
        async changeAdminData(payload:Object): Promise<any>{
            return Auth.changeAdminData(payload).then((res)=>{
                this.userInfo = res.data.data
            })
        },async changeAdminPass(payload:{password:string}): Promise<any>{
            return Auth.changeAdminPass(payload).then((res)=>{
                return res
            })
        },async deleteAdmin(userId:string): Promise<any>{
            return Auth.deleteAdmin(userId).then((res)=>{
                return res
            })
        },
    }
})