<script lang="ts" setup>
import { PropType } from "vue"
import type {DocProfile} from "../../types/type"
const props = defineProps({
    title:{
        type:String,
        default:''
    },
    doctorsInfo:{
        type: Array as PropType<DocProfile[]>,
        default:()=>[{
            img:'',
            name:'',
            category: '',   
            uuid:''
        }]
    }
})
</script>

<template>
 <h2 class="text-2xl font-semibold mb-4">
    {{ title }}
 </h2>
<div class="py-3 px-4 bg-white rounded-lg flex items-center gap-3 cursor-pointer" v-for="(box,ind) in doctorsInfo" :key="box.uuid" :class="{'mb-3':ind !== doctorsInfo.length - 1 }" @click="$router.push({path:`${title === 'Recent Doctors' ? `/doctors/${box.name}` : `/nurse/${box.name}` }`})">
    <img :src="title === 'Recent Doctors' ? '/users/docImg.png' : '/users/girl.png'" alt="doctors img" class="w-14">
    <div>
        <h4 class="text-lg mb-1">{{box.name}}</h4>
        <p class="text-base text-textColor">{{box.category}}</p>
    </div>
</div>  
</template>

<style>

</style>