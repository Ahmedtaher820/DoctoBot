<script setup lang="ts">
const props = defineProps({
    processing:{
        type:Boolean,
        default: false
    }
})
</script>
<template>
    <div >
        <div  class="skeleton grid md:grid-cols-5 grid-cols-4 cursor-pointer gap-4 bg-zinc-100  py-4 px-6 rounded-md doctor-grid relative hover:shadow-md transition-all duration-300 border" >
            <div class="md:col-span-2 col-span-3 flex items-center gap-2 justify-startt order-1 font-semibold">
                <span class="w-2 h-2 bg-zinc-600 rounded-full skeleton-animation"  />
                <span class="w-8 h-8 bg-zinc-600 rounded-full skeleton-animation"/>
                <span class="w-32 h-4 bg-zinc-600 skeleton-animation"/>
            </div>
            <div class="md:col-span-1 col-span-2 md:center-items pt-3 md:py-0 order-3 md:order-2 text-textColor bg-zinc-600 rounded-full skeleton-animation">
            </div>
            <div class="md:col-span-1 bg-zinc-600 rounded-full col-span-2 md:center-items pt-3 md:py-0 text-start order-4 md:order-3 skeleton-animation">
            </div>
            <div class="md:col-span-1 col-span-1  flex  items-center justify-end gap-3 order-2 md:order-4">
                
                <div class="w-8 h-8 rounded-full bg-zinc-600 center-items skeleton-animation"/>
                <div class="w-8 h-8 rounded-full bg-zinc-600 center-items skeleton-animation"/>
            </div>
        </div>
    </div>

</template>
<style>

</style>