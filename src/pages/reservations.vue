<script setup lang="ts">
import {authStore} from "../store/Auth"
const {getReservations} = authStore()
const route = useRoute()
const reservations = ref({})
onMounted(()=>{
    console.log(route.query.calendar)
    getReservations(route.params.id,route.query.calendar).then((res)=>{
        reservations.value = res.data.data
    })
})
const printPage = ()=>{
    window.print()
}
</script>
<template>
    <div class="bg-white md:py-8 md:px-16 py-4 px-8 rounded-xl">
        <h1 class="text-2xl font-semibold">Reservations Details</h1>
        <div class="mt-4 border md:py-4 md:px-8 py-2 px-4 rounded-xl flex flex-col gap-4">
            <div>
                <div class="flex justify-between items-center">
                    <h2 class="text-xl border-b w-fit pb-1 border-black mb-2">Doctors Details:</h2>
                    <base-button class="px-4 py-2" @click="printPage">Print</base-button>
                </div>
                <div class="ps-2 flex flex-col gap-2 mt-4">

                    <div class="flex items-center">
                        <b>Name</b>: <span class="text-zinc-500 ms-2">Ahmed Taher</span> 
                    </div>
                    <div class="flex items-center">
                        <b>Price</b>: <span class="text-zinc-500 ms-2">200 EGP</span> 
                    </div>
                    <div class="flex items-center">
                        <b>Email</b>: <span class="text-zinc-500 ms-2">Ahmed Taher</span> 
                    </div>
                    <div class="flex items-center">
                        <b>Address</b>: <span class="text-zinc-500 ms-2">Cairo</span> 
                    </div>
                    <div class="flex items-center">
                        <b>Phone</b>: <span class="text-zinc-500 ms-2">01006544788</span> 
                    </div>
                </div>
            </div>
            <div>

                <h2 class="text-xl border-b w-fit pb-1 border-black mb-2">Date Details:</h2>
                <div class="ps-2 flex flex-col gap-2 mt-4">

                    <div class="flex items-center">
                        <b>Week Day</b>: <span class="text-zinc-500 ms-2">Friday</span> 
                    </div>
                    <div class="flex items-center">
                        <b>monthmonth</b>: <span class="text-zinc-500 ms-2">July</span> 
                    </div>
                    <div class="flex items-center">
                        <b>day</b>: <span class="text-zinc-500 ms-2">26</span> 
                    </div>
                    <div class="flex items-center">
                        <b>startAt</b>: <span class="text-zinc-500 ms-2">10:00 PM</span> 
                    </div>
                    <div class="flex items-center">
                        <b>endAt</b>: <span class="text-zinc-500 ms-2">11:00 PM</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>