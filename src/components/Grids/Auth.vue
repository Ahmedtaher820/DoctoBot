<script setup lang="ts">

</script>

<template>
<div class="grid grid-cols-3 place-items-center">
    <div class="lg:col-span-1 col-span-3 relative">
        <slot name="left-part" />
    </div>
    <div class="lg:col-span-2 hidden lg:block">
        <slot name="right-part" />
    </div>
</div>  
</template>

<style>

</style>