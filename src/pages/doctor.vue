<script lang="ts" setup>
const user = ref({
    img:'',
    name:'Dr/ Albert Johnson',
    cate:"Internist  Doctor",
    star:4.1,
    booking:200,
    info:{
        location:'777P+58V، الحرية, El Manakh, Port Said Governorate 42523',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    reviwes:[
        {
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img:'',
            name:'Ahmed Samir',
            cate:'Coronary Heart Disease',
            completeStar:4,
            unComplete:1,
            id:1
        },
        {
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img:'',
            name:'Ahmed Samir',
            cate:'Coronary Heart Disease',
            completeStar:5,
            unComplete:0,
            id:2
        },
        {
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img:'',
            name:'Ahmed Samir',
            cate:'Coronary Heart Disease',
            completeStar:3,
            unComplete:2,
                        id:3
        },
    ]
})
const starCount = ref<number>(0) 
const disableCount = ref<number>(0)
onMounted(()=>{
    starCount.value = Math.round(user.value.star)
    disableCount.value = 5 - starCount.value 
})
</script>
<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="md:col-span-2 grid gap-y-8 col-span-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-between gap-2">
                <img src="/users/user.png" class="md:w-24 w-12 md:h-24 h-12" alt="">
                <div>
                    <h2 class="font-bold text-base md:text-2xl">{{user.name}}</h2>
                    <p class="text-textColor mt-1 mb-0">{{user.cate}}</p>
                </div>
            </div>
            <div class="stars bg-white rounded-lg flex flex-col gap-2 items-center justify-center md:pt-3 md:px-3 md:pb-2 p-2">
                <h2 class="md:text-2xl text-base font-semibold">
                    {{ user.star }}
                </h2>
                <ul class="flex md:gap-1">
                    <li v-for="star in starCount" :key="star">
                        <svg   xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-8 md:h-8w-4 md:h-8" viewBox="0 0 24 24"><path fill="#DCD74A" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>
                    </li>
                    <li v-for="star in disableCount" :key="star">
                        <svg   xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-8 md:h-8w-4 md:h-8"  viewBox="0 0 24 24"><path fill="#707070" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-white py-3 px-4 rounded-lg flex flex-col">
            <div class="p-3 rounded-full bg-firstBg w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.75" height="20.5" viewBox="0 0 17.75 20.5">
                    <path id="Vector" d="M17.5,6.7A8.626,8.626,0,0,0,8.88,0H8.87A8.624,8.624,0,0,0,.25,6.69C-.92,11.85,2.24,16.22,5.1,18.97a5.422,5.422,0,0,0,7.55,0C15.51,16.22,18.67,11.86,17.5,6.7ZM8.88,11.71a3.15,3.15,0,1,1,3.15-3.15A3.15,3.15,0,0,1,8.88,11.71Z" fill="#595cff"/>
                </svg>
            </div>
            <p class="mt-3 pb-4 font-thin text-sm">{{user.info.location}}</p>
            <p class="pt-4 border-t leading-8 text-textColor">
                {{ user.info.desc }}
            </p>
        </div>
        <div class="">
            <h2 class="text-3xl text-textColor mb-2">
                Reivews
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div  v-for="rev in user.reviwes" :key="rev.id" class="bg-white rounded-lg p-3">
                    <div class="flex justify-between gap-4">
                        <div class="flex items-center gap-1 pb-4">
                            <img class="w-14 object-fill" src="/users/user2.png" alt="">
                            <div>
                                <h3 class="text-1xl">{{rev.name}}</h3>
                                <p class="font-medium text-textColor text-sm">{{rev.cate}}</p>
                            </div>
                        </div>
                        <div class="text-center flex-1">
                            <h2 class="text-2xl font-semibold text-center">{{rev.completeStar}}</h2>
                            <ul class="flex">
                                <li v-for="star in rev.completeStar" :key="star">
                                    <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#DCD74A" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>
                                </li>
                                <li v-for="star in rev.unComplete" :key="star">
                                    <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#707070" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>
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
    <div class="md:col-span-1 md:block hidden">
        <div class="flex flex-col gap-4"></div>
        <div class="bg-white rounded-lg center-items flex-col gap-2   md:py-4 md:px-3 py-2">
            <h2 class="text-2xl font-bold">200 EGP</h2>
            <h3 class="text-textColor text-sm">
                Booking Free
            </h3>
        </div>
    </div>
  </div>
</template>


<style>
</style>