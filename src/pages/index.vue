<template>
   <div class="home">

      <div class="grid grid-cols-3 gap-8">
         <div class="col-span-1 relative">
            <div class=" left-part bg-white">
               welcome
            </div>
         </div>
         <div class="col-span-2 grid column">
            <div class="right-part overflow-y-scroll">
               <div class="flex gap-8 flex-col">

                  <div class="grid grid-cols-5 gap-3">
                     <div class="col-span-2">
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
                     <div class="col-span-3 relative">
                        <div class="assis rounded-xl pt-8 pb-6 ps-6 text-white relative h-full">
                           <div class="relative  z-10 ">
                              <h2 class="text-3xl font-bold">Need an assistance?</h2>
                              <p class="text-xl mt-3 mb-5 font-thin">Chat with Us, Solve Problems Faster.</p>
                              <base-button class="w-1/2">
                              Chat with Us</base-button>
                           </div>
                           <div class="overlay rounded-xl"></div>
                        </div>
                     </div>
                  </div>
                  <div class="flex flex-col gap-3">
                     <h2 class="text-2xl text-textColor">Doctors</h2>
                     <doctors-grid />
                     <doctors-grid />
                  </div>
                  <div class="flex flex-col gap-3">
                     <h2 class="text-2xl text-textColor">Nurses</h2>
                     <doctors-grid />
                     <doctors-grid />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>

</script>

<style >
.home{
   overflow: hidden;
}
::-webkit-scrollbar{
   display: none;
}
.left-part{
   height: 80vh;
   width: 100%;
}
.right-part{
   height: calc(100vh - 130px);
   overflow-y: scroll;
}
.assis{
   background-image: url("../../public/icons/patient.png");
   background-size: cover;
}

</style>