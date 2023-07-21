<script lang="ts" setup>
import type {
  Doctors,
  Nurses,
  PaginationMeta,
  PaginationLinks,
} from "../types/type";
import { doctors } from "../store/doctors";
import { nursesStore } from "../store/nurses";
import { storeToRefs } from "pinia";
const { getAllDoctors } = doctors();
const { getAllNurses } = nursesStore();
const { doctorsTableData } = storeToRefs(doctors());
const { nursesTableData } = storeToRefs(nursesStore());
const processing = ref(false);
const doctorsLimitsTwo = ref<Doctors[]>([]);
const nursesLimitsTwo = ref<Nurses[]>([]);
const getLimitDoctors = () => {
  doctorsLimitsTwo.value = doctorsTableData.value.doctorsList.slice(0, 3);
};
const getLimitNurses = () => {
  nursesLimitsTwo.value = nursesTableData.value.nursesList.slice(0, 3);
};
const getDoctors = async ()=>{
   if (doctorsTableData.value.doctorsList.length > 0) {
    getLimitDoctors();
    return;
  } else {
   processing.value = true;
    await getAllDoctors()
      .then(() => {
        getLimitDoctors();
      })
      .finally(() => {
        processing.value = false;
      });
  }
}
const getNurses = async ()=>{
   if (nursesTableData.value.nursesList.length > 0) {
    getLimitNurses();
    return;
  } else {
    processing.value = true;
    await getAllNurses()
      .then(() => {
        getLimitNurses();
      })
      .finally(() => {
        processing.value = false;
      });
  }
}
onMounted(async () => {
   await getDoctors()
   await getNurses()
});
</script>
<template>
  <div class="home">
    <div class="grid grid-cols-3 gap-8">
      <!-- <div class="md:col-span-1 hidden md:block relative">
            <div class=" left-part bg-white">
               welcome
            </div>
         </div> -->
      <div class="md:col-span-3 col-span-3 grid column">
        <div class="right-part overflow-y-scroll px-4">
          <div class="flex gap-8 flex-col">
            <div class="grid grid-cols-5 gap-3">
              <div class="md:col-span-2 col-span-5">
                <div class="grid grid-cols-2 gap-4">
                  <div class="col-span-1">
                    <box-detail>
                      <h2 class="text-sm font-thin text-textColor">
                        Today Appointments
                      </h2>
                      <h2 class="text-4xl font-bold">0</h2>
                    </box-detail>
                  </div>
                  <div class="col-span-1">
                    <box-detail>
                      <h2 class="text-sm font-thin text-textColor">
                        Available Doctors
                      </h2>
                      <h2 class="text-4xl font-bold">120</h2>
                    </box-detail>
                  </div>
                  <div class="col-span-1">
                    <box-detail>
                      <h2 class="text-sm font-thin text-textColor">
                        Available Nurses
                      </h2>
                      <h2 class="text-4xl font-bold">50</h2>
                    </box-detail>
                  </div>
                  <div class="col-span-1">
                    <box-detail>
                      <h2 class="text-sm font-thin text-textColor">
                        Medications
                      </h2>
                      <h2 class="text-4xl font-bold">150</h2>
                    </box-detail>
                  </div>
                </div>
              </div>
              <div class="md:col-span-3 col-span-5 relative">
                <div
                  class="assis rounded-xl pt-8 pb-6 ps-6 text-white relative h-full"
                >
                  <div class="relative z-10">
                    <h2 class="text-3xl font-bold">Need an assistance?</h2>
                    <p class="text-xl mt-3 mb-5 font-thin">
                      Chat with Us, Solve Problems Faster.
                    </p>
                    <base-button class="w-1/2"> Chat with Us</base-button>
                  </div>
                  <div class="overlay rounded-xl"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
               <div class="flex justify-between items-center">
                  <h2 class="text-2xl text-textColor">Doctors</h2>
                  <base-button @click="$router.push({path:'/doctors'})" custome-bg="bg-white" class="px-4 py-1 text-sm text-black shadow-md">Show All</base-button>
               </div>
              <doctors-grid
                v-for="doc in doctorsLimitsTwo"
                :key="doc._id"
                :info="doc"
                :processing="processing"
              />
            </div>
            <div class="flex flex-col gap-3">
               <div class="flex justify-between items-center">
                  <h2 class="text-2xl text-textColor">Nurses</h2>
                  <base-button @click="$router.push({path:'/nurses'})" custome-bg="bg-white" class="px-4 py-1 text-sm text-black shadow-md">Show All</base-button>
               </div>
              <nurses-grid
                v-for="nurse in nursesLimitsTwo"
                :key="nurse._id"
                :processing="processing"

                :info="nurse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style >
.home {
  overflow: hidden;
  height: calc(100vh - 132px);
}
.right-part::-webkit-scrollbar {
  width: 10px;
  padding: 5px;
}
.right-part::-webkit-scrollbar-thumb {
  @apply bg-primary-400;
  padding: 5px;
  border-radius: 5px;
}
.right-part::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
}

.left-part {
  height: 80vh;
  width: 100%;
}
.right-part {
  height: calc(100vh - 132px);
  overflow-y: scroll;
}
.assis {
  background-image: url("../../public/icons/patient.png");
  background-size: cover;
}
</style>