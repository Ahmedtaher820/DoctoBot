
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email , minLength } from '@vuelidate/validators'
import { authStore } from '../store/Auth'
import { Register } from '../types/type'
import { CallbackTypes } from 'vue3-google-login'
import {decodeCredential,googleTokenLogin } from "vue3-google-login"
const {userRegister} = authStore()
const formdata = reactive<Register>({
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm:''
})
const rules = {
    name: {
        required,
        minLength:minLength(4)

    },
    phone: {
        required,
    },
    email: {
        required,
        email,         
    },
    password: {
        required,
        minLength:minLength(8)
    },
    passwordConfirm: {
        required,
        minLength:minLength(8)
    },
}
const v$ = useVuelidate(rules, formdata)
const processing = ref(false)
const errHandle = ref<{value:'',msg:''}[]>([])
const handleSubmit = () => {
    errHandle.value = []
    v$.value.$touch()
    if (v$.value.$invalid)
        return
    processing.value = true    
    userRegister(formdata).then((res)=>{
        router.push({path:'/'})
    }).catch((err)=>{
        errHandle.value = err.response.data.errors
    }).finally(()=>{
        processing.value = false
    })
}
const matchPass = ref('') 
watch(()=> formdata.passwordConfirm , (val)=>{
    if(val !== formdata.password){
        matchPass.value = 'Passwords must be matched'
    }else{
        matchPass.value = ''
    }
})
watch(()=> formdata.password , (newVal, oldVal)=>{
    if(!newVal){
        matchPass.value = ''
    } else if(newVal !== formdata.passwordConfirm && formdata.passwordConfirm){
        matchPass.value = 'Passwords must be matched'
    }
})
// const app = getCurrentInstance()
// const progressBar = app.appContext.config.globalProperties
const userGoogle = ref()
const router = useRouter()
// const callback = (response) => {
// //   try {
// //     const user =  progressBar.$google.login()
// //     console.log(user)
// //   } catch (error) {
// //     console.log(error)
// //   }
// userGoogle.value = decodeCredential(response.credential)

// };
const loginWithGoogle = ()=>{
    googleTokenLogin().then((response)=>{
        localStorage.setItem('user-auth',JSON.stringify(true))
        router.replace({path:'/'})
    })
}
</script>

<template>
    <div>
        <overlay-loader v-if="processing" />
    <Auth>
        <template #left-part>
            <div class="flex flex-col justify-start items-start md:px-16 w-full">
                <div class="logo py-3 px-6 second-bg"></div>
                <h2 class="text-3xl mb-6">Create an account</h2>
                <form class="w-full flex flex-col gap-6" @submit.prevent="handleSubmit">
                    <div class="form-field email basis-1/2">
                        <input type="text" class="w-full" placeholder=" " name="uname" v-model="formdata.name"  />
                        <label>Name</label>
                        <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-field pass">
                        <input type="text" class="w-full" placeholder=" " v-model="formdata.phone" />

                        <label>Phone Number</label>
                        <div class="input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-field pass">
                        <input type="email" class="w-full" placeholder=" " v-model="formdata.email" />
                        <label>Email</label>
                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>

                    </div>
                    <div class="form-field pass">
                        <input type="password" class="w-full" placeholder=" " v-model="formdata.password" />
                        <label>Password</label>
                        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-field pass">
                        <input type="password" class="w-full" placeholder=" " v-model="formdata.passwordConfirm" />
                        <label>Confirm Password</label>
                        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <p class="error-msg" v-show="matchPass.length > 0">
                            {{ matchPass }}
                        </p>
                    </div>
                    <err-msg :errors="errHandle" />
                    <div class="grid">
                        <base-button type="submit" class="md:w-80 hover:bg-primary-600 duration-200 transition-all">
                            Create An Account
                        </base-button>
                        <base-button type="button" @click="loginWithGoogle"
                            class="mt-4 relative text-black hover:shadow-md duration-200 transition-all flex items-center"
                            custome-bg="bg-white ">
                            <!-- <GoogleLogin :callback="callback" prompt auto-login  /> -->
                            <span class="flex-1">
                                Create With Google
                            </span>

                            <img src="/icons/google.png" class="right-4 absolute top-1" alt="">
                        </base-button>
                        <!-- <base-button type="submit" class="mt-4  md:w-80 text-black hover:shadow-md duration-200 transition-all flex items-center"
                            custome-bg="bg-white relative">
                            <span class="flex-1">
                                Create An Twitter
                            </span>
                            <img src="/icons/twitter.png" class="right-4 absolute top-1" alt="">

                        </base-button> -->
                    </div>
                    <router-link to="/login" class="text-base underline">You have already account?</router-link>
                </form>
            </div>
        </template>
        <template #right-part>
            <div class="right-bg  py-4">
                <div class="img-content rounded-md overflow-hidden bg-white">
                    <img src="/background/MaskGroup6.svg" class="w-full h-full border rounded-md" alt="">
                </div>
            </div>
        </template>
    </Auth>
</div>

</template>

<style>

.img-content,
.right-bg {
    height: calc(100vh - 32px);
    min-width: 800px
}</style>