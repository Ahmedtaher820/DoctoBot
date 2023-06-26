import { createWebHistory , createRouter } from "vue-router";
import index from "../pages/index.vue"
const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            name:'Home',
            path:'/',
            component:index,
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'Doctors',
            path:'/doctors',
            component: ()=>import('../pages/doctors.vue'),
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'Doctor',
            path:'/doctor/:id',
            component: ()=>import('../pages/doctor.vue'),
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'Nurse',
            path:'/nurse/:id',
            component: ()=>import('../pages/nurse.vue'),
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'Nurses',
            path:'/nurses',
            component: ()=>import('../pages/nurses.vue'),
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'profile',
            path:'/profile',
            component: ()=>import('../pages/profile.vue'),
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'Search',
            path:'/search/:slug',
            component: ()=>import('../pages/register.vue'),
            meta:{
                requiresAuth: true
            }
        },
        {
            name:'Login',
            path:'/login',
            component: ()=>import('../pages/login.vue'),
            meta:{
                guest: true
            }
        },
        {
            name:'Register',
            path:'/register',
            component: ()=>import('../pages/register.vue'),
            meta:{
                guest: true
            }
        },
        {
            name:'ForgetPassword',
            path:'/forgetPassword',
            component: ()=>import('../pages/forgetPassword.vue'),
            meta:{
                guest: true
            }
        },
        {
            name:'ResetPassword',
            path:'/resetPassword',
            component: ()=>import('../pages/resetPassword.vue'),
            meta:{
                guest: true
            }
        },
        {
            name:'RecoveryCode',
            path:'/recoveryCode',
            component: ()=>import('../pages/recoveryCode.vue'),
            meta:{
                guest: true
            }
        },
        // {
        //     name:'notfound',
        //     path:'/:pathMatch(.*)*',
        //     component: ()=>import('../pages/errorPage.vue')
        // },
    ]
})
router.beforeEach((to,from,next)=>{
    // @ts-ignore
    const auth = JSON.parse(localStorage.getItem('token'))
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth) {
          next('/login')
          return
        }
        
        next()
      } else {
        if((to.name === 'Login' || to.name === 'ForgetPassword' || to.name==='Register' || to.name==='ResetPassword' || toRaw.name === "RecoveryCode") && auth ){
            next('/')

        }else{

            next()
        }
      }
})
export default router