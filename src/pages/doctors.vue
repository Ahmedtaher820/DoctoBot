<script lang="ts" setup>
import type { Doctors, PaginationMeta, PaginationLinks } from "../types/type";
import { storeToRefs } from "pinia";

import { doctors } from "../store/doctors";
const { getAllDoctors } = doctors();
const {  doctorsTableData } = storeToRefs(doctors());
const processing = ref(false);

onMounted(async () => {
  if (doctorsTableData.value.doctorsList.length > 0) {
    return;
  }
  processing.value = true;
  await getAllDoctors().finally(() => {
    processing.value = false;
  });
});
</script>

<template>
  <div class="doctors">
    <overlay-loader v-if="processing" />

    <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
      <div class="md:col-span-1 col-span-2">
        <box-detail>
          <h2 class="text-sm font-thin text-textColor">All Doctors</h2>
          <h2 class="md:text-4xl text-xl font-bold">2502</h2>
        </box-detail>
      </div>
      <div class="md:col-span-1 col-span-1">
        <box-detail>
          <h2 class="text-sm font-thin text-textColor">Available Doctors</h2>
          <h2 class="md:text-4xl text-xl font-bold">250</h2>
        </box-detail>
      </div>
      <div class="md:col-span-1 col-span-1">
        <box-detail>
          <h2 class="text-sm font-thin text-textColor">Busy Doctors</h2>
          <h2 class="md:text-4xl text-xl font-bold">2,252</h2>
        </box-detail>
      </div>
    </div>
    <div class="mt-8">
      <div class="">
        <h2 class="text-textColor text-1xl mb-2">Available Doctors</h2>
        <div class="avaliable-docs flex flex-col gap-3 overflow-y-scroll">
          <doctors-grid
            v-for="doc in doctorsTableData.doctorsList"
            :key="doc._id"
            :info="doc"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
@import "../assets/doctors.css";
</style>