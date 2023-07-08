import { defineStore } from 'pinia';
import DataServices from "../Services/doctors"
import {Paginate,Doctors,PaginationLinks,PaginationMeta} from "../types/type"

export const doctors = defineStore({
    id:'doctors',
    state:()=>({
         doctorsTableData : {
            doctorsList: [] as Doctors[],
            paginationMeta: {
              current_page: 1,
              from: 1,
              last_page: 1,
              links: [],
              path: '',
              per_page: 15,
              to: 15,
              total: 1,
            } as PaginationMeta,
            paginationLinks: {
              first: '',
              last: '',
              prev: null,
              next: null,
            } as PaginationLinks,
            selectedDoctors: null as Doctors | null,
            selectedIndex: null as number | null,
        }
    }),
    actions:{
        async getAllDoctors(){
            return DataServices.getAllDoctors().then((res)=>{
                this.doctorsTableData.doctorsList = res.data.data
                // this.doctorsTableData.paginationLinks = res.paginationLinks
                // this.doctorsTableData.paginationMeta = res.paginationMeta
                return res
            })
        },
        async getDoctorsById(uuid:string): Promise<any>{
            return DataServices.getDoctorById(uuid).then((res)=>{
                //@ts-ignore
                this.doctorsTableData.selectedDoctors = res.data?.data
                return res
            })
        }
    }
})