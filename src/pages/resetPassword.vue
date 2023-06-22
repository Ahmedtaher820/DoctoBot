
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { authStore } from "../store/Auth"
const { userLogin } = authStore()
const formdata = reactive({
    email: '',
    password: ''
})
const rules = {
    email: {
        required,
        email,
    },
    password: {
        required,
        minLength: minLength(8)
    }
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
    userLogin(formdata).then(()=>{
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
                <h2 class="text-3xl my-6 font-bold">Sign in to your account</h2>
                <form class="w-full flex flex-col gap-5" @submit.prevent="handleSubmit">
                    <div class="form-field pass">
                        <input type="password" class="w-full" placeholder=" " v-model="formdata.password" />
                        <label>Password</label>
                        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
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

<style>
.vue-tel-input {
    @apply border-none !important;
    @apply border-b border-textColor !important;
}

.img-content,
.right-bg {
    height: calc(100vh - 32px);
    min-width: 800px
}
</style>