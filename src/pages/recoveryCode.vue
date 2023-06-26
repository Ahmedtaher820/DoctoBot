
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { authStore } from "../store/Auth"
const { resetCodeFun } = authStore()
const formdata = reactive({
    resetCode: '',
})
const rules = {
    resetCode: {
        required,
        minLength:maxLength(6)
    },
}
const v$ = useVuelidate(rules, formdata)
const errHandle = ref('')
const processing = ref(false)
const router = useRouter()
const handleSubmit = ()=>{
    v$.value.$touch()
    if (v$.value.$invalid)
        return
    processing.value = true    
    resetCodeFun(formdata).then(()=>{
        router.push({path:'/resetPassword'})
    }).catch((err)=>{
        errHandle.value = err.response.data.message
        console.log(errHandle.value)
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
                <h2 class="text-3xl mt-6 mb-5 font-bold">Enter security code <br> <span class="text-sm">or</span> <router-link class="text-base text-primary ms-3" to="/login">Login Here</router-link></h2>
                <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
                    <div class="form-field pass">
                        <input type="text" class="w-full" placeholder=" " v-model="formdata.resetCode" />
                        <label>Code</label>
                        <div class="input-errors" v-for="error of v$.resetCode.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <p class="text-red-500 text-lg font-semibold">
                        {{ errHandle }}
                    </p>
                    <base-button type="submit" class="hover:bg-primary-600 duration-200 transition-all">
                    Continue
                </base-button>
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