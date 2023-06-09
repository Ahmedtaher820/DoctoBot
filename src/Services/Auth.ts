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
    },
    resetCodeFun(payload: {resetCode: string}){
        return DataServices.post('/auth/verifyResetCode',payload)
    },
    resetPassword(payload:{email:string , newPassword: string}){
        return DataServices.put('/auth/resetPassword', payload)
    },
    addNewBooking(payload:{[key:string] : string[]}){
        return DataServices.post('/calenders/doctors', payload)
    },
    getReservations(uuid:string,calendar:string){
        return DataServices.post(`/calenders/${calendar}/${uuid}`)
    },
    deleteAdmin(userId:string){
        return DataServices.delete(`/users/deleteMe/${userId}`)
    },
    changeAdminPass(payload:{password:string}){
        return DataServices.put(`/users/changeMyPassword`,payload)
    },
    changeAdminData(payload:Object){
        return DataServices.put(`/users/updateMe`,payload)
    }
}