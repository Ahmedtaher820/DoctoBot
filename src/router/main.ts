import { createWebHistory , createRouter } from "vue-router";
import index from "../pages/index.vue"
const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            name:'Home',
            path:'/',
            component:index
        },
        {
            name:'Doctors',
            path:'/doctors',
            component: ()=>import('../pages/doctors.vue')
        },
        {
            name:'Doctor',
            path:'/doctors/:id',
            component: ()=>import('../pages/doctor.vue')
        },
        {
            name:'Nurse',
            path:'/nurse/:id',
            component: ()=>import('../pages/nurse.vue')
        },
        {
            name:'Nurses',
            path:'/nurses',
            component: ()=>import('../pages/nurses.vue')
        },
        {
            name:'profile',
            path:'/profile',
            component: ()=>import('../pages/profile.vue')
        },
        {
            name:'Login',
            path:'/login',
            component: ()=>import('../pages/login.vue')
        },
        {
            name:'Register',
            path:'/register',
            component: ()=>import('../pages/register.vue')
        },
        {
            name:'Search',
            path:'/search/:slug',
            component: ()=>import('../pages/register.vue')
        },
        // {
        //     name:'notfound',
        //     path:'/:pathMatch(.*)*',
        //     component: ()=>import('../pages/errorPage.vue')
        // },
    ]
})
export default router