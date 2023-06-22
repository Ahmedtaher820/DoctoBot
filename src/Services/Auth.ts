import DataServices from "./DataServices/DataServices"
import type {Login, Register} from "../types/type" 
export default {
    getUserInfo(){
        return DataServices.get('/users/getMe')
    },
    userLogin(payload: Login){
        return DataServices.post('/auth/login',payload)
    },
    userRigster(payload: Register){
        return DataServices.post('/auth/signup',payload)
    },
    forgetPassword(payload: {email:string}){
        return DataServices.post('/auth/forgotPassword',payload)
    }
}