
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
const nav = ref([
  {
    path: '/',
    name: 'Home',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
  <g id="vuesax_bold_home-2" data-name="vuesax/bold/home-2" transform="translate(-605 -176)">
    <g id="home-2" transform="translate(605 176)">
      <path id="Vector" d="M19.552,5.219,13.313.853A5.256,5.256,0,0,0,7.366.994L1.939,5.229A5.581,5.581,0,0,0,0,9.172v7.474a5.016,5.016,0,0,0,5,5.015H16.681a5.007,5.007,0,0,0,5-5V9.313A5.528,5.528,0,0,0,19.552,5.219Zm-7.9,12.11a.812.812,0,0,1-1.625,0v-3.25a.812.812,0,1,1,1.625,0Z" transform="translate(2.157 2.17)" fill="#a5a5a5"/>
      <path id="Vector-2" data-name="Vector" d="M0,0H26V26H0Z" transform="translate(26 26) rotate(180)" fill="none" opacity="0"/>
      </g>
      </g>
      </svg>
      
      `
    },
  {
    path: '/doctors',
    name: 'Doctors',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
  <g id="vuesax_linear_profile-2user" data-name="vuesax/linear/profile-2user" transform="translate(-172 -252)">
    <g id="profile-2user" transform="translate(172 252)">
      <path id="Vector" d="M4.983,9.609a1.969,1.969,0,0,0-.358,0,4.815,4.815,0,1,1,.358,0Z" transform="translate(4.94 2.167)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Vector-2" data-name="Vector" d="M.141,0A3.789,3.789,0,0,1,3.932,3.792,3.8,3.8,0,0,1,.282,7.583a1.224,1.224,0,0,0-.282,0" transform="translate(17.637 4.333)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Vector-3" data-name="Vector" d="M1.966,1.487C-.655,3.242-.655,6.1,1.966,7.846a10.58,10.58,0,0,0,10.844,0c2.622-1.755,2.622-4.615,0-6.359A10.63,10.63,0,0,0,1.966,1.487Z" transform="translate(2.54 14.286)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Vector-4" data-name="Vector" d="M0,6.5a5.24,5.24,0,0,0,2.123-.943,2.744,2.744,0,0,0,0-4.626A5.388,5.388,0,0,0,.033,0" transform="translate(19.868 15.167)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Vector-5" data-name="Vector" d="M0,0H26V26H0Z" transform="translate(26 26) rotate(180)" fill="none" opacity="0"/>
      </g>
      </g>
      </svg>
      
      `
  },
  {
    path: '/nurses',
    name: 'Nurser',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
      <g id="vuesax_linear_hospital" data-name="vuesax/linear/hospital" transform="translate(-748 -188)">
    <g id="hospital" transform="translate(748 188)">
      <path id="Vector" d="M0,0H21.667" transform="translate(2.167 23.833)" fill="#a5a5a5" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Vector-2" data-name="Vector" d="M15.167,0H4.333C1.083,0,0,1.939,0,4.333V21.667H19.5V4.333C19.5,1.939,18.417,0,15.167,0Z" transform="translate(3.25 2.167)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Vector-3" data-name="Vector" d="M5.492,0H1.018A1.024,1.024,0,0,0,0,1.018V7.583H6.5V1.018A1,1,0,0,0,5.492,0Z" transform="translate(9.739 16.25)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <g id="Group" transform="translate(10.292 6.5)">
        <path id="Vector-4" data-name="Vector" d="M0,0V5.417" transform="translate(2.708)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Vector-5" data-name="Vector" d="M0,0H5.417" transform="translate(0 2.708)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </g>
        <path id="Vector-6" data-name="Vector" d="M0,0H26V26H0Z" fill="none" opacity="0"/>
        </g>
        </g>
        </svg>
        
        
        `
      },
  {
    path: '/medications',
    name: 'Medications',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
      <g id="vuesax_linear_milk" data-name="vuesax/linear/milk" transform="translate(-428 -636)">
        <g id="milk" transform="translate(428 636)">
          <path id="Vector" d="M13,1.105V5.438a3.26,3.26,0,0,1-3.25,3.25H3.25A3.26,3.26,0,0,1,0,5.438V0L4.214.022A5.1,5.1,0,0,1,6.5.563a5.115,5.115,0,0,0,2.3.542Z" transform="translate(6.5 15.145)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-2" data-name="Vector" d="M13,6.316v4.517H8.8a5.115,5.115,0,0,1-2.3-.542A5.1,5.1,0,0,0,4.214,9.75L0,9.728V6.316A2.48,2.48,0,0,1,.639,4.778l2.3-2.3a1.093,1.093,0,0,0,.314-.758V0h6.5V1.722a1.093,1.093,0,0,0,.314.758l2.3,2.3A2.48,2.48,0,0,1,13,6.316Z" transform="translate(6.5 5.417)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-3" data-name="Vector" d="M0,1.083V0" transform="translate(19.5 16.25)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-4" data-name="Vector" d="M0,1.083V0" transform="translate(6.5 15.145)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-5" data-name="Vector" d="M7.042,3.25H1.625a1.625,1.625,0,0,1,0-3.25H7.042a1.625,1.625,0,1,1,0,3.25Z" transform="translate(8.667 2.167)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-6" data-name="Vector" d="M0,0H26V26H0Z" fill="none" opacity="0"/>
          </g>
          </g>
          </svg>
          
          
          `
        },
])
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="#888888" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6"  viewBox="0 0 384 512"><path fill="#888888" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"/></svg>
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img class="block h-8 w-auto lg:hidden" src="/icons/logo.svg" alt="Your Company" />
              <img class="hidden h-8 w-auto lg:block" src="/icons/logo.svg" alt="Your Company" />
            </router-link> 
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 flex-1 justify-center">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link :to="{path: item.path}" class="flex gap-2 items-center link py-2 px-4" v-for="item in nav" :key="item.icon">
              <span v-html="item.icon"></span>
              {{item.name}}</router-link>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }" @click="$router.push({path:'/login'})">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2 z-10">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
       
        <router-link :to="{path: item.path}" v-for="item in nav" :key="item.icon" class=" ">
          <div  class="flex gap-2 border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 w-full transition-all duration-300">
            <span v-html="item.icon"></span>
            {{item.name}}
          </div>
        </router-link>
      </div>
    </DisclosurePanel>
  </transition>
  </Disclosure>

</template>
<style>
@media(min-width:768px){
  .link{
    @apply text-navText
  }
  .router-link-exact-active,.router-link-active{
    @apply bg-indigo-200  w-fit  text-primary border-b border-primary
  }
}
@media(max-width:768px){
  .link{
    @apply text-navText
  }
  .router-link-exact-active,.router-link-active{
    @apply bg-indigo-200  w-full  text-primary border-b border-primary
  }
}
</style>