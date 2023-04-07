import DataServices from "./DataServices/DataServices"
import type {Login, Register} from "../types/type" 
export default {
    userLogin(payload: Login){
        return DataServices.post('/',payload)
    },
    userRigster(payload: Register){
        return DataServices.post('/',payload)
    },
}