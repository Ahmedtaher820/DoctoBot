<script lang="ts" setup>
</script>

<template>
  <div class="doctors">
    <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div class="md:col-span-1 col-span-2">
            <box-detail>
                <h2 class="text-sm font-thin text-textColor">
                   All Doctors
                 </h2>
                 <h2 class="md:text-4xl text-xl font-bold">2502</h2>
            </box-detail>
            </div>
            <div class="md:col-span-1 col-span-1">
                <box-detail>
                    <h2 class="text-sm font-thin text-textColor">
                        Available Doctors
                     </h2>
                     <h2 class="md:text-4xl text-xl font-bold">250</h2>
                </box-detail>
            </div>
            <div class="md:col-span-1 col-span-1">
                <box-detail>
                    <h2 class="text-sm font-thin text-textColor">
                        Busy Doctors 
                     </h2>
                     <h2 class="md:text-4xl text-xl font-bold">2,252</h2>
                </box-detail>
            </div>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4 mt-8">
            <div class="md:col-span-2 col-span-1   ">
                    <h2 class="text-textColor text-1xl mb-2">
                        Available Doctors
                    </h2>
                    <div class="avaliable-docs flex flex-col gap-3 overflow-y-scroll">
                        <doctors-grid v-for="i in 10" :key="i" />
                    </div>
            </div>
            <div class="md:col-span-1 md:block hidden">
                <div class="flex flex-col gap-3">
                    <h2 class="text-textColor text-1xl">
                        Booking Schedule 
                    </h2>
                    <div class="bg-white schedule rounded-lg"></div>
                </div>
            </div>
        </div>
  </div>
</template>


<style>
@import "../assets/doctors.css"
</style>