import DataServices from "../Services/DataServices/DataServices"
import {Pagination,Doctors} from "../types/type"
export default{
    getAllDoctors(){
        return DataServices.get<Pagination<Doctors>>('/doctors')
    },
    getDoctorById(payload:string){
        return DataServices.get<Doctors>(`/doctors/${payload}`)
    },
    getAllCalendar(){
        return DataServices.get<Pagination<Doctors>>('/doctors')
    },
    getCalendarById(){
        return DataServices.get('/doctors')
    },
}