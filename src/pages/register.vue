
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email , minLength } from '@vuelidate/validators'
import { authStore } from '../store/Auth'
import { Register } from '../types/type'
const {userRegister} = authStore()
const formdata = reactive<Register>({
    name: '',
    phone: '',
    email: '',
    password: ''
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

    }
}
const v$ = useVuelidate(rules, formdata)
const handleSubmit = () => {
    v$.value.$touch()
    if (v$.value.$invalid)
        return
    userRegister(formdata)
console.log(formdata)
}
</script>

<template>
    <Auth>
        <template #left-part>
            <div class="flex flex-col justify-start items-start md:px-16">
                <div class="logo py-3 px-6 second-bg"></div>
                <h2 class="text-3xl my-6">Create an account</h2>
                <form class="w-full flex flex-col gap-5" @submit.prevent="handleSubmit">
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
                    <div class="grid">
                        <base-button type="submit" class="mt-4 hover:bg-primary-600 duration-200 transition-all">
                            Create An Account
                        </base-button>
                        <base-button type="submit"
                            class="mt-4 relative text-black hover:shadow-md duration-200 transition-all"
                            custome-bg="bg-white ">
                            Create With Google
                            <!-- <img src="/icons/Image 4.svg" class="right-4 absolute top-2" alt=""> -->
                        </base-button>
                        <base-button type="submit" class="mt-4  md:w-80 text-black hover:shadow-md duration-200 transition-all"
                            custome-bg="bg-white relative">
                            Create An Twiiter
                            <!-- <img src="/icons/Image 5.svg" class="right-4 absolute top-2" alt=""> -->

                        </base-button>
                    </div>
                    <router-link to="/login" class="text-base underline">You have already account?</router-link>
                </form>
            </div>
        </template>
        <template #right-part>
            <div class="right-bg  py-4">
                <div class="img-content rounded-md overflow-hidden bg-white">
                    <!-- <img src="/background/Mask Group 6.svg" class="w-full h-full border rounded-md" alt=""> -->
                </div>
            </div>
        </template>
    </Auth>
</template>

<style>

.img-content,
.right-bg {
    height: calc(100vh - 32px);
    min-width: 800px
}</style>