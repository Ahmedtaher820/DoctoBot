
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { authStore } from "../store/Auth"
const { forgetPassword } = authStore()
const formdata = reactive({
    email: '',
})
const rules = {
    email: {
        required,
        email,
    },
}
const v$ = useVuelidate(rules, formdata)
const router = useRouter()
const processing = ref(false)
const errHandle = ref<{value:'',msg:''}[]>()
const handleSubmit = () => {
    v$.value.$touch()
    if (v$.value.$invalid)
        return
    processing.value = true    
    forgetPassword(formdata).then(()=>{
        router.push({path:'/'})
    }).catch((err)=>{
        console.log(err)
        // errHandle.value = err.response.data.errors
    }).finally(()=>{
        processing.value = false
    })
}
</script>

<template>
    <div>
        <overlay-loader v-if="processing" />
    <Auth>
        <template #left-part>
            <div class="flex flex-col justify-start items-start md:px-16">
                <div class="logo py-3 px-6 second-bg"></div>
                <h2 class="text-3xl my-6 font-bold ">Forgot Password <br> <span class="text-sm">or</span> <router-link class="text-base text-primary ms-3" to="/Register">SingUp Here</router-link> </h2>
                <div class="w-full h-full">

                    <form class="w-full flex flex-col gap-2" @submit.prevent="handleSubmit">
                        <div class="form-field pass">
                            <input type="email" class="w-full" placeholder=" " v-model="formdata.email" />
                            <label>Email</label>
                            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                            
                        </div>
                        <err-msg :errors="errHandle" />
                        <div class="grid">
                            <base-button type="submit" class="hover:bg-primary-600 duration-200 transition-all">
                            Reset Password
                        </base-button>
                    </div>
                </form>
            </div>
            </div>
        </template>
        <template #right-part>
            <div class="right-bg  py-4">
                <div class="img-content rounded-md overflow-hidden bg-white">
                    <img src="/background/Mask.svg" class="w-full h-full border rounded-md" alt="">
                </div>
            </div>
        </template>
    </Auth>
</div>

</template>

<style>
</style>