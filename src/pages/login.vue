
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email , minLength } from '@vuelidate/validators'
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
        minLength:minLength(8)
    }
}
const v$ = useVuelidate(rules, formdata)
const router = useRouter()
const handleSubmit = () => {
    v$.value.$touch()
    if (v$.value.$invalid)
        return
    router.push({path:"/"})
}
</script>

<template>
    <Auth>
        <template #left-part>
            <div class="flex flex-col justify-start items-start md:px-16">
                <div class="logo py-3 px-6 second-bg"></div>
                <h2 class="text-3xl my-6">Login to Continue</h2>
                <form class="w-full flex flex-col gap-5" @submit.prevent="handleSubmit">
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
                    <div class="grid">
                        <base-button type="submit" class="mt-4 hover:bg-primary-600 duration-200 transition-all">
                            Create An Account
                        </base-button>
                        <base-button type="submit"
                        class="mt-4 relative text-black hover:shadow-md duration-200 transition-all flex items-center"
                        custome-bg="bg-white ">
                        <span class="flex-1">
                            Create With Google
                        </span>

                        <img src="/icons/google.png" class="right-4 absolute top-1" alt="">
                    </base-button>
                    <base-button type="submit" class="mt-4  md:w-80 text-black hover:shadow-md duration-200 transition-all flex items-center"
                    custome-bg="bg-white relative">
                    <span class="flex-1">
                        Create An Twitter
                    </span>
                    <img src="/icons/twitter.png" class="right-4 absolute top-1" alt="">

                </base-button>
                    </div>
                    <router-link to="/register" class="text-base underline">You dont have account?</router-link>

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
}</style>