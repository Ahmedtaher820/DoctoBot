import DataServices from "../Services/DataServices/DataServices"
import {Pagination,Nurses} from "../types/type"
export default{
    getAllNurses(){
        return DataServices.get<Pagination<Nurses>>('/nurses')
    },
    getNursesById(payload:string){
        return DataServices.get<Nurses>(`/nurses/${payload}`)
    },
    addNewBooking(payload:{[key:string] : string[]}){
        return DataServices.post('/calenders/nurses', payload)
    },
}