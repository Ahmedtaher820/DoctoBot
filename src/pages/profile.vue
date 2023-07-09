<script lang="ts" setup>
import { info } from "../store/info"
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { storeToRefs } from "pinia"
import { nursesStore } from "../store/nurses"
import { doctors } from "../store/doctors"
import { authStore } from "../store/Auth"
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import type { User } from "../types/type"
const { nursesTableData } = storeToRefs(nursesStore())
const { doctorsTableData } = storeToRefs(doctors())
const { userInfo } = storeToRefs(authStore())

const { docsInfo, nursersInfo } = info()
const { getUserInfo, changeAdminData,UpdateUserInfo } = authStore()
const showModal = ref(false)
const formData = reactive({
    name: '',
    phone: '',
    email: '',
    role: ''
})
const rules = {
    name: {
        required,
        minLength: minLength(3)
    },
    phone: {
        required
    },
    email: {
        required
    },
}
const v$ = useVuelidate(rules, formData)
const processing = ref(false)
const errHandle = ref<{ msg: '', value: '' }[]>([])
const submitData = () => {
    v$.value.$touch()
    if (v$.value.$invalid) {
        return
    }
    processing.value = true
    changeAdminData(formData).then((res)=>{
        // UpdateUserInfo(formData)
    }).catch((err) => {
        for (let prop in err.response.data.errors) {
            errHandle.value.push({ msg: err.response.data.errors[prop]?.msg, value: err.response.data.errors[prop]?.value })
        }
    }).finally(() => {
        processing.value = false
        showModal.value = false
    })
}
const people = [
    { label: 'Male', value: 1 },
    { label: 'Female   ', value: 2 },
]
const closeModal = () => {
    showModal.value = false
    v$.value.$reset()
}
const { getAllNurses } = nursesStore()
const { getAllDoctors } = doctors()
const passingData = (payload: User) => {
    formData.name = payload.name
    formData.role = payload.role
    formData.phone = payload.phone || ''
    formData.email = payload.email
}
onMounted(async () => {
    if (userInfo.value.name.length === 0) {
        processing.value = true
        await getUserInfo().then(() => {
            passingData(userInfo.value)

        }).finally(() => {
            processing.value = false
        })
    }else{
        passingData(userInfo.value)
    }
    if (nursesTableData.value.nursesList.length === 0) {
        processing.value = true

        await getAllNurses().finally(() => {
            processing.value = false
        })
    }
    if (doctorsTableData.value.doctorsList.length === 0) {
        processing.value = true

        await getAllDoctors().finally(() => {
            processing.value = false
        })

    }
})
</script>
<template>
    <overlay-loader v-show="processing" />
    <modal @close="closeModal" :open="showModal" title="Edit Profile">
        <form @submit.prevent="submitData" class="px-4 edit-form">
            <div class="flex flex-col gap-3">
                <div>
                    <base-input v-model="formData.name" id="name" title="name" />
                    <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                <div>
                    <base-input v-model="formData.role" id="role" title="role" disabled />
                    <div class="input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <!-- <base-select :options="people" v-model="formData.role" title="gender" id="gender" /> -->
                </div>

                <div>
                    <base-input v-model="formData.phone" id="phone" title="phone" />
                    <div class="input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                <div>
                    <base-input v-model="formData.email" id="email" title="email" />
                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>

                <err-msg :errors="errHandle" />
                <base-button type="submit"
                    class="mt-4 hover:bg-primary-600 duration-300 transition-all">Update</base-button>
            </div>
        </form>
    </modal>
    <div class="grid grid-cols-3 gap-6">
        <div class="md:col-span-2 col-span-3">
            <div class="profile-bg">
                <img src="/background/profilebg.png" alt="">
                <div class="flex justify-between items-start px-4">
                    <div class="flex items-center profile-box gap-2">
                        <div class="">
                            <div class="md:w-28 sm-16 -mt-8 profile-img relative">
                                <img src="/users/profile.png" class="w-full" alt="profile image">
                            </div>
                        </div>
                        <div>
                            <h2 class="text-3xl font-semibold">{{ userInfo.name }}</h2>
                            <p class="text-textColor">{{ userInfo.role }}</p>
                        </div>
                    </div>
                    <div>
                        <base-button class="w-fit mt-2 py-2 px-6" @click="showModal = true">Edit Profile</base-button>
                    </div>
                </div>
            </div>
            <div class="py-4 px-8 rounded-lg bg-white my-8 leading-8 text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="mb-8">
                <h4 class="mb-1 text-textColor">Additional Information</h4>
                <div class="bg-white py-4 ps-5 rounded-lg">
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Email</label>
                        <p class="lead-6 text-base">{{ userInfo.email }}</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Phone</label>
                        <p class="lead-6 text-base" v-if="userInfo.phone?.length > 0">{{ userInfo.phone }}</p>

                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Blood Type</label>
                        <p class="lead-6 text-base">O+ "Positve"</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Address</label>
                        <p class="lead-6 text-base">Via Guglielmo Marconi, 60, 74023 Grottaglie TA, Italy</p>
                    </div>
                    <div class="flex flex-col py-3  ">
                        <label for="" class="text-textColor mb-1 text-sm">Role</label>
                        <p class="lead-6 text-base">{{ userInfo.role }}</p>
                    </div>
                </div>
            </div>
            <div>
                <h4 class="mb-1 text-textColor">Chronic Diseases</h4>
                <div class="bg-white py-12 ps-5 rounded-lg">
                    <h5 class="text-center text-textColor">
                        You don't have any chronic diseases
                    </h5>
                </div>
            </div>
        </div>
        <div class="md:col-span-1 md:block hidden">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Recent Doctors</h2>
                <div v-for="doctorItem in doctorsTableData.doctorsList.slice(0, 4)" :key="doctorItem._id"
                    class="py-3 px-4 bg-white rounded-lg flex items-center gap-3  cursor-pointer mb-2 hover:shadow-md duration-300 transition-all"
                    @click="$router.push({ path: `/doctor/${doctorItem._id}` })">
                    <img class="w-8 h-8 rounded-full object-contain" loading="lazy" v-if="doctorItem.image !== '{}'"
                        :src="doctorItem.image" alt="">
                    <UserCircleIcon v-else class="w-10 h-10" />
                    <div>
                        <h4 class="text-base">{{ doctorItem.name }}</h4>
                        <p class="text-base text-textColor">{{ doctorItem.specialiaty }}</p>
                    </div>
                </div>
            </div>
            <div class="mb-10" />
            <div>
                <h2 class="text-2xl font-semibold mb-2">Recent Nurses</h2>
                <div v-for="doctorItem in nursesTableData.nursesList.slice(0, 4)" :key="doctorItem._id"
                    class="py-3 px-4 bg-white rounded-lg flex items-center gap-3  cursor-pointer mb-2 hover:shadow-md duration-300 transition-all"
                    @click="$router.push({ path: `/nurse/${doctorItem._id}` })">
                    <img class="w-8 h-8 rounded-full object-contain" loading="lazy" v-if="doctorItem.image !== '{}'"
                        :src="doctorItem.image" alt="">
                    <UserCircleIcon v-else class="w-10 h-10" />
                    <div>
                        <h4 class="text-base">{{ doctorItem.name }}</h4>
                        <p class="text-base text-textColor">{{ doctorItem.shift }}</p>
                    </div>
                </div>
            </div>
            <div class="mb-10" />
            <div class="h-72 bg-white rounded-lg"></div>
        </div>
    </div>
</template>
  
  
<style>.edit-form input::placeholder {
    @apply text-sm
}</style>