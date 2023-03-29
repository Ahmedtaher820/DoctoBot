<script setup lang="ts">

</script>

<template>
<div class="grid md:grid-cols-8 md:gap-12 ">
    <div class="md:col-span-2 hidden md:block md:py-10">
        <slot name="left-part" />
    </div>
    <div class="md:col-span-4 col-span-8 md:py-10">     
        <slot name="center-part" />
    </div>
    <div class="md:col-span-2 hidden md:block md:py-10">
        <slot name="right-part" />
    </div>
</div>  
</template>

<style>

</style>           