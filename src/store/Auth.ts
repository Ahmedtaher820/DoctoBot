import {defineStore} from "pinia"
import type {Login , Register} from "../types/type"
import Auth from "../Services/Auth"
export const authStore = defineStore({
    id:'auth',
    state:()=>({

    }),
    actions:{
        userLogin(payload:Login){
            return Auth.userLogin(payload).then((res)=>{
                return res
            })
        },
        userRegister(payload:Register): Promise<any>{
            return Auth.userRigster(payload).then((res)=>{
                return res
            })
        },
    }
})