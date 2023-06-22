import DataServices from "../Services/DataServices/DataServices"
import {Pagination,Nurses} from "../types/type"
export default{
    getAllNurses(){
        return DataServices.get<Pagination<Nurses>>('/nurses')
    },
    getNursesById(){
        return DataServices.get<Nurses>('/nurses')
    },
}