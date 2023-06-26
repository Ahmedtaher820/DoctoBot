
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { authStore } from "../store/Auth"
const { resetPassword } = authStore()

const formdata = reactive({
    email: '',
    newPassword: ''
})
const rules = {
    email: {
        required,
        email,
    },
    newPassword: {
        required,
        minLength: minLength(8)
    }
}
const v$ = useVuelidate(rules, formdata)
const errHandle = ref<{value:'',msg:''}[]>()
const processing = ref(false)
const router = useRouter()
const handleSubmit = ()=>{
    v$.value.$touch()
    if (v$.value.$invalid)
        return
    processing.value = true    
    resetPassword(formdata).then(()=>{
        router.push({path:'/'})
    }).catch((err)=>{
        console.log(err)
        errHandle.value = err.response.data.errors
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
                <h2 class="text-3xl my-6 font-bold">Reset Password Again!</h2>
                <form class="w-full flex flex-col gap-5" @submit.prevent="handleSubmit">
                    <div class="form-field pass">
                        <input type="email" class="w-full" placeholder=" " v-model="formdata.email" />
                        <label>Email</label>
                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        
                    </div>
                    <div class="form-field pass">
                        <input type="password" class="w-full" placeholder=" " v-model="formdata.newPassword" />
                        <label>New Password</label>
                        <div class="input-errors" v-for="error of v$.newPassword.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <base-button type="submit" class="md:w-80 hover:bg-primary-600 duration-200 transition-all">
                    Change Password
                </base-button>
                    <err-msg :errors="errHandle" />
                </form>
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
