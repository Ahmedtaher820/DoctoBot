<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
const props = defineProps({
    options:{
        type: Array as PropType<{label:string , value:number}[]>,
        default:()=>([{label:'',value:0}])
    },
    modelValue:[String , Number],
    title:{
        type:String,
        default:''
    },
    id:{
        type: String,
        default:''
    }
})
const emit = defineEmits(['update:modelValue'])
const label = computed(()=>{
    return props.options.find((option) => option.label === props.modelValue)?.label
})
</script>

<template>
    <div class="flex flex-col">

    <label :for="id" class="text-base mb-1">{{title}}</label>

    <div class="w-full">
      <Listbox @update:modelValue="value => $emit('update:modelValue' , value)"
        :model-value="props.modelValue"
        :id="id"
        >
        <div class="relative">
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-white py-2 ps-2 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span class="block truncate text-sm text-textColor" v-if="label">{{ label }}</span>
            <span class="block truncate text-sm text-textColor" v-else>Selected Option</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
              
            </span>
          </ListboxButton>
  
          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="option in props.options"
                :key="option.value"
                :value="option.label"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{option.label }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
</div>

  </template>
  