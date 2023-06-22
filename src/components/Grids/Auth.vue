<script setup lang="ts">

</script>

<template>
<div class="grid grid-cols-5 place-items-center h-screen">
    <div class="lg:col-span-2 col-span-5 relative">
        <slot name="left-part" />
    </div>
    <div class="lg:col-span-3 hidden lg:block">
        <slot name="right-part" />
    </div>
</div>  
</template>

<style>

</style>