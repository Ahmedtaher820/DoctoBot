import DataServices from "../Services/DataServices/DataServices"
import {Pagination,Doctors} from "../types/type"
export default{
    getAllDoctors(){
        return DataServices.get<Pagination<Doctors>>('/doctors')
    },
    getDoctorById(){
        return DataServices.get('/doctors')
    },
    getAllCalendar(){
        return DataServices.get<Pagination<Doctors>>('/doctors')
    },
    getCalendarById(){
        return DataServices.get('/doctors')
    },
}