<script lang="ts" setup>
defineProps({
    customeBg:{
        type:String,
        default:''
    }
})
</script>

<template>
  <button class=" rounded-full py-2 inline-block" :class="[customeBg ? customeBg : 'bg-primary text-white']" v-bind="$attrs">
    <slot/>
  </button>
</template>


<style>

</style>