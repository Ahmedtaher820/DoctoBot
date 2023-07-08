<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, helpers } from "@vuelidate/validators"
import { authStore } from '../store/Auth'
import { doctors } from '../store/doctors'
import type { Doctors } from "../types/type"
import { storeToRefs } from 'pinia'
const { addNewBooking } = authStore()
const { getDoctorsById } = doctors()
const { doctorsTableData } = storeToRefs(doctors())
const user = ref({
    img: '',
    name: 'Dr/ Albert Johnson',
    cate: "Internist  Doctor",
    star: 4.1,
    booking: 200,
    info: {
        location: '777P+58V، الحرية, El Manakh, Port Said Governorate 42523',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    reviwes: [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: '',
            name: 'Ahmed Samir',
            cate: 'Coronary Heart Disease',
            completeStar: 4,
            unComplete: 1,
            id: 1
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: '',
            name: 'Ahmed Samir',
            cate: 'Coronary Heart Disease',
            completeStar: 5,
            unComplete: 0,
            id: 2
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: '',
            name: 'Ahmed Samir',
            cate: 'Coronary Heart Disease',
            completeStar: 3,
            unComplete: 2,
            id: 3
        },
    ]
})
const calendarDate = ref([
    {
        startAt: '10:00 PM',
        endAt: '11:00 PM'
    },
    {
        startAt: '11:00 PM',
        endAt: '12:00 PM'
    },
    {
        startAt: '12:00 AM',
        endAt: '01:00 AM'
    }, {
        startAt: '01:00 AM',
        endAt: '02:00 AM'
    },
    {
        startAt: '03:00 AM',
        endAt: '04:00 AM'
    },
    {
        startAt: '05:00 AM',
        endAt: '06:00 AM'
    },
    {
        startAt: '06:00 AM',
        endAt: '07:00 AM'
    }, {
        startAt: '08:00 AM',
        endAt: '09:00 AM'
    },
])
const starCount = ref<number>(0)
const disableCount = ref<number>(0)
const date = ref(new Date());

const formData = reactive({
    weekday: "",
    month: "",
    day: "",
    startAt: "",
    endAt: ""
})
const rules = {
    weekday: {
        required
    },
    month: {
        required
    },
    day: {
        required
    },
    startAt: {
        required: helpers.withMessage('You must choose the time period for the reservation', required)
    },
    endAt: {
        required
    }
}
const v$ = useVuelidate(rules, formData)
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    //@ts-ignore
const selectCalendar = (dayDate: { startAt: string, endAt: string }, event) => {
    if (event.target.classList.contains('aticve')) {
        return
    }
    //@ts-ignore
    document.querySelector('.calendar-date.active').classList.remove('active')
    event.target.classList.add('active')
    formData.month = months[date.value.getMonth()]
    formData.weekday = days[date.value.getDay()]
    formData.startAt = dayDate.startAt
    formData.endAt = dayDate.endAt
    formData.day = String( date.value.getUTCDate() + 1)
}
watch(() => date.value, (val) => {
    formData.startAt = ''
    formData.endAt = ''
    document.querySelector('.calendar-date.active')?.classList.remove('active')
})
const processing = ref(false)
const router = useRouter()
const sendBook = () => {
    v$.value.$touch()
    console.log(v$.value.$errors)
    if (v$.value.$invalid || processing.value) {
        return
    }
    processing.value = true
    //@ts-ignore

    addNewBooking(formData).then((res) => {
        router.push({path:'/reservation/'+res.data.data._id , query:{calendar:'doctors'}})
    }).finally(() => {
        processing.value = false
    })
}
const route = useRoute()
const doctorsInfo = ref<Doctors>()
onMounted(() => {
    if (doctorsTableData.value.selectedDoctors?._id === route.params.id) {
        return
    } else {
        processing.value = true
    //@ts-ignore

        getDoctorsById(route.params.id).finally(()=>{
    processing.value = false

        })
    }
})
</script>
<template>
    <overlay-loader v-if="processing" />
    <div class="grid grid-cols-3 gap-6">
        <div class="md:col-span-2 grid gap-y-8 col-span-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-between gap-2">
                    <img :src="doctorsTableData.selectedDoctors?.image" class="md:w-24 w-12 md:h-24 h-12 object-contain" alt="">
                    <div>
                        <h2 class="font-bold text-base md:text-2xl">{{ doctorsTableData.selectedDoctors?.name }}</h2>
                        <p class="text-textColor mt-1 mb-0">{{ doctorsTableData.selectedDoctors?.specialiaty }}</p>
                    </div>
                </div>
                <div
                    class="stars bg-white rounded-lg flex flex-col gap-2 items-center justify-center md:pt-3 md:px-3 md:pb-2 p-2">
                    <h2 class="md:text-2xl text-base font-semibold">
                        {{ doctorsTableData.selectedDoctors?.rating }}
                    </h2>
                    <ul class="flex md:gap-1">
                        <li v-for="star in doctorsTableData.selectedDoctors?.rating" :key="star">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-8 md:h-8w-4 md:h-8" viewBox="0 0 24 24">
                                <path fill="#DCD74A"
                                    d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
                            </svg>
                        </li>
                        <!-- <li v-for="star in ratingDisabled" :key="star">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-8 md:h-8w-4 md:h-8" viewBox="0 0 24 24">
                                <path fill="#707070"
                                    d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
                            </svg>
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="bg-white py-3 px-4 rounded-lg flex flex-col">
                <div class="p-3 rounded-full bg-firstBg w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.75" height="20.5" viewBox="0 0 17.75 20.5">
                        <path id="Vector"
                            d="M17.5,6.7A8.626,8.626,0,0,0,8.88,0H8.87A8.624,8.624,0,0,0,.25,6.69C-.92,11.85,2.24,16.22,5.1,18.97a5.422,5.422,0,0,0,7.55,0C15.51,16.22,18.67,11.86,17.5,6.7ZM8.88,11.71a3.15,3.15,0,1,1,3.15-3.15A3.15,3.15,0,0,1,8.88,11.71Z"
                            fill="#595cff" />
                    </svg>
                </div>
                <p class="mt-3 pb-4 font-thin text-sm">{{ doctorsTableData.selectedDoctors?.address }}</p>
                <p class="pt-4 border-t border-b leading-8 text-textColor">
                    {{ user.info.desc }}
                </p>
                <div class="flex flex-col py-3 border-b ">
                    <label for="" class="text-textColor mb-1 text-sm">Age</label>
                    <p class="lead-6 text-base">{{doctorsTableData.selectedDoctors?.age}} Years Old</p>
                </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Contact Number</label>
                        <p class="lead-6 text-base">{{doctorsTableData.selectedDoctors?.contactNumber}}</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                       <label for="" class="text-textColor mb-1 text-sm">Email</label>
                       <p class="lead-6 text-base">{{doctorsTableData.selectedDoctors?.email}}</p>
                   </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Experience Years</label>
                        <p class="lead-6 text-base">{{doctorsTableData.selectedDoctors?.experienceYears}} Years</p>
                    </div>
                    <div class="flex flex-col py-3 ">
                        <label for="" class="text-textColor mb-1 text-sm">Education Years</label>
                        <p class="lead-6 text-base">{{doctorsTableData.selectedDoctors?.educationYears}} Years</p>
                    </div> 
                   
            </div>
            <div class="">
                <h2 class="text-3xl text-textColor mb-2">
                    Reivews
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="rev in user.reviwes" :key="rev.id" class="bg-white rounded-lg p-3">
                        <div class="flex justify-between gap-4">
                            <div class="flex items-center gap-1 pb-4">
                                <img class="w-14 object-fill" src="/users/user2.png" alt="">
                                <div>
                                    <h3 class="text-1xl">{{ rev.name }}</h3>
                                    <p class="font-medium text-textColor text-sm">{{ rev.cate }}</p>
                                </div>
                            </div>
                            <div class="text-center flex-1">
                                <h2 class="text-2xl font-semibold text-center">{{ rev.completeStar }}</h2>
                                <ul class="flex">
                                    <li v-for="star in rev.completeStar" :key="star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#DCD74A"
                                                d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
                                        </svg>
                                    </li>
                                    <li v-for="star in rev.unComplete" :key="star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#707070"
                                                d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="pt-4 text-sm border-t font-medium text-textColor">
                            {{ rev.desc }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:col-span-1 col-span-3 md:block sticky top-0 h-full overflow-x-hidden box-content">

            <div class="flex flex-col gap-8">

                <div class="bg-white rounded-lg center-items flex-col gap-2   md:py-4 md:px-3 py-2">
                    <h2 class="text-2xl font-bold">{{doctorsTableData.selectedDoctors?.price}}</h2>
                    <h3 class="text-textColor text-sm">
                        Booking Free
                    </h3>

                </div>
                <div class="bg-white rounded-lg p-3 flex flex-col gap-4">
                    {{ date.toLocaleDateString() }}
                    <VueDatePicker class="w-full border-none" :min-date="new Date()" v-model="date" inline auto-apply />
                    <div
                        class="flex flex-row text-center flex-nowrap min-w-96 overflow-x-auto gap-6  pb-3 pe-4 pt-4 avaliable-box">

                        <div class="bg-primary cursor-pointer calendar-date text-white rounded-xl "
                            v-for="(dayDate, index) in calendarDate" :key="index" @click="selectCalendar(dayDate, $event)">
                            <div class="pointer-events-none py-2 px-3 flex flex-col">
                                <span class="whitespace-nowrap">{{ dayDate.startAt }} - {{ dayDate.endAt }}</span>
                                <small>Avalibale</small>

                            </div>
                        </div>
                    </div>
                    <div class="input-errors" v-for="error of v$.startAt.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <base-button :processing="processing" type="button"  @click="sendBook" class="mt-4">Book Now</base-button>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.dp__month_year_row {
    margin-bottom: 15px;
}

.dp__calendar_header {
    margin-bottom: 10px;
}

.dp__flex_display {
    display: block;
}

.avaliable-box::-webkit-scrollbar {
    width: 10px;
    padding: 5px;
    height: 5px;
}

.avaliable-box::-webkit-scrollbar-thumb {
    @apply bg-primary-400;
    padding: 5px;
    border-radius: 5px;

}

.avaliable-box::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
    padding: 5px;

}

.calendar-date.active {
    @apply bg-white text-primary border border-primary-400 transition-all duration-300
}
</style>