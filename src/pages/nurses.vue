<script lang="ts" setup>
import type {Nurses, PaginationMeta,PaginationLinks} from "../types/type"
import { storeToRefs } from "pinia"

import {nursesStore} from "../store/nurses"
const {getAllNurses  } = nursesStore()
const {nursesTableData} = storeToRefs(nursesStore())
const processing = ref(false)

onMounted(async ()=>{
   if(nursesTableData.value.nursesList.length > 0){
      return
   }
   processing.value = true
   await getAllNurses().finally(()=>{
      processing.value = false
   })
})
</script>
<template>
  <div class="doctors">
    <overlay-loader v-if="processing" />

    <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div class="md:col-span-1 col-span-2">
            <box-detail>
                <h2 class="text-sm font-thin text-textColor">
                    All Nurses
                 </h2>
                 <h2 class="md:text-4xl text-xl font-bold">125</h2>
            </box-detail>
            </div>
            <div class="md:col-span-1 col-span-1">
                <box-detail>
                    <h2 class="text-sm font-thin text-textColor">
                        Available Nurses
                     </h2>
                     <h2 class="md:text-4xl text-xl font-bold">10</h2>
                </box-detail>
            </div>
            <div class="md:col-span-1 col-span-1">
                <box-detail>
                    <h2 class="text-sm font-thin text-textColor">
                        Busy Nurses 
                     </h2>
                     <h2 class="md:text-4xl text-xl font-bold">115</h2>
                </box-detail>
            </div>
        </div>
        <div class="mt-8">
            <div class="">
                    <h2 class="text-textColor text-1xl mb-2">
                        Available Nurses
                    </h2>
                    <div class="avaliable-docs flex flex-col gap-3 overflow-y-scroll ">
                        <nurses-grid
            v-for="doc in nursesTableData.nursesList"
            :key="doc._id"
            :info="doc"
          />
                    </div>
            </div>
        </div>
  </div>
</template>


<style>
@import "../assets/doctors.css"
</style>