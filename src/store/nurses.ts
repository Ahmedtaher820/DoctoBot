import { defineStore } from 'pinia';
import DataServices from "../Services/nurses"
import {Paginate,Nurses,PaginationMeta,PaginationLinks} from "../types/type"

export const nursesStore = defineStore({
    id:'nurses',
    state:()=>({
        nursesTableData : {
            nursesList: [] as Nurses[],
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
            selectedNurses: null as Nurses | null,
            selectedIndex: null as number | null,
        }
    }),
    getters:{},
    actions:{
        async getAllNurses(){
            return DataServices.getAllNurses().then((res)=>{
                this.nursesTableData.nursesList = res.data.data
                // this.nursesTableData.paginationLinks = res.paginationLinks
                // this.nursesTableData.paginationMeta = res.paginationMeta
                return res
            })
        },
        async getNursesById(uuid:string): Promise<any>{
            return DataServices.getNursesById(uuid).then((res)=>{
                //@ts-ignore
                this.nursesTableData.selectedNurses = res.data.data
                return res
            })
        },
        async addNewBookingNurses(payload: {[key:string]:string[]}): Promise<any>{
            return DataServices.addNewBooking(payload).then((res)=>{
                return res
            })
        },
    }
})