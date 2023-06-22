<script lang="ts" setup>
const props = defineProps({
    status:{
        type: Boolean,
        default: false
    }
})
</script>

<template>
  <div class="w-2 h-2 rounded-full shadow-md" :title="status ? 'Avaliable':'Not Avaliable'" :class="[status ? 'bg-green-400':'bg-red-400']">

  </div>
</template>

<style>

</style>