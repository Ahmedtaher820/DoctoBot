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
            name:'Doctors',
            path:'/doctor/:id',
            component: ()=>import('../pages/doctor.vue')
        },
        {
            name:'Nurses',
            path:'/Nurse/:id',
            component: ()=>import('../pages/nurses.vue')
        },
        {
            name:'Nurse',
            path:'/Nurse/:id',
            component: ()=>import('../pages/nurse.vue')
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
        {
            name:'notfound',
            path:'/:pathMatch(.*)*',
            component: ()=>import('../pages/notfound.vue')
        },
    ]
})
export default router