import {defineStore} from "pinia"
export const info = defineStore({
    id:'info',
    state:()=>({
        docsInfo:[
            {
                img:'',
                name:'Moaaz Ahmed',
                category: 'Internist  Doctor',   
                uuid:'1'
            },
            {
                img:'',
                name:'Ahmed Ali',
                category: 'Internist  Doctor',   
                uuid:'2'
            },
            {
                img:'',
                name:'Eslam Mohamed',
                category: 'Internist  Doctor',   
                uuid:'3'
            },
            {
                img:'',
                name:'Yasser Saad',
                category: 'Internist  Doctor',   
                uuid:'4'
            },
        ],
        nursersInfo:[
            {
                img:'',
                name:'Mona Ahmed',
                category: 'Internist  Doctor',   
                uuid:'1'
            },
            {
                img:'',
                name:'Nagwa Ali',
                category: 'Internist  Doctor',   
                uuid:'2'
            },
            {
                img:'',
                name:'Aliaa Mohamed',
                category: 'Internist  Doctor',   
                uuid:'3'
            },
            {
                img:'',
                name:'Eman Saad',
                category: 'Internist  Doctor',   
                uuid:'4'
            },
        ]
    })
})