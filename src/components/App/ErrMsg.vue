<script lang="ts" setup> 
import { PropType } from 'vue';
const props = defineProps({
    errors:{
        type: Array as PropType<{value:'',msg:''}[]>,
        default:()=>([])
    }
})
</script>

<template>
    <div>
        <p class="text-red-500 text-lg font-semibold" v-for="(err,index) in errors" :key="index">
            *{{ err.msg }}*
        </p>  
    </div>
</template>


<style>

</style>