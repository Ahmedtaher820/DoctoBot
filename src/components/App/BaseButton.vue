<script lang="ts" setup>
defineProps({
    customeBg:{
        type:String,
        default:''
    },
    processing:{
      type:Boolean,
      default:false
    }
})
</script>

<template>
  <button class=" rounded-full py-2 flex justify-center items-center gap-4" :class="[customeBg ? customeBg : 'bg-primary text-white']" v-bind="$attrs">
    <slot/>
    <the-loader v-if="processing" />
  </button>
</template>


<style>

</style>