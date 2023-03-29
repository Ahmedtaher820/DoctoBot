<script setup lang="ts">

</script>

<template>
<div class="grid grid-cols-3">
    <div class="col-span-1 md:py-16">
        <slot name="left-part" />
    </div>
    <div class="col-span-2 md:py-20">
        <slot name="right-part" />
    </div>
</div>  
</template>

<style>

</style>