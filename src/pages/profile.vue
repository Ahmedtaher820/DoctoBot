<script lang="ts" setup></script>
<template>
    <div class="grid grid-cols-3">
        <div class="md:col-span-2 col-span-3">
            <div class="profile-bg">
                <img src="/background/profilebg.png" alt="">
                <div class="flex justify-between items-start px-4">
                    <div class="flex items-center profile-box gap-2">
                        <div class="">
                            <div class="md:w-28 sm-16 -mt-8 profile-img relative">
                                <img src="/users/profile.png"  class="w-full" alt="profile image">
                            </div>
                        </div>
                        <div>
                            <h2 class="text-3xl font-semibold">Ahmed Taher</h2>
                            <p class="text-textColor">Patient</p>
                        </div>
                    </div>
                    <div>
                        <base-button class="w-fit mt-2 py-2 px-6">Edit Profile</base-button>
                    </div>
                </div>
            </div>
            <div class="py-4 px-8 rounded-lg bg-white my-8 leading-8 text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="mb-8">
                <h4 class="mb-1 text-textColor">Additional Information</h4>
                <div class="bg-white py-4 ps-5 rounded-lg">
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Age</label>
                        <p class="lead-6 text-base">36 Years Old</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Gender</label>
                        <p class="lead-6 text-base">Male</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Blood Type</label>
                        <p class="lead-6 text-base">O+ "Positve"</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Address</label>
                        <p class="lead-6 text-base">Via Guglielmo Marconi, 60, 74023 Grottaglie TA, Italy</p>
                    </div>
                    <div class="flex flex-col py-3 border-b ">
                        <label for="" class="text-textColor mb-1 text-sm">Phone</label>
                        <p class="lead-6 text-base">+20 128 589 5584</p>
                    </div>
                    <div class="flex flex-col py-3">
                        <label for="" class="text-textColor mb-1 text-sm">Email</label>
                        <p class="lead-6 text-base">Ahmed_nasser@gmail.com</p>
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
        <div class="md:col-span-1 md:block hidden"></div>
    </div>
</template>
  
  
  <style>

  </style>