<script lang="ts" setup>
const props = defineProps({
    title:{
        type:String,
        default:''
    },
    modelValue:{
        type:String,
        default:''
    },
    id:{
        type:String,
        defalut:''
    }
})
const emit = defineEmits(['update:modelValue'])
const changeData = (val:Event)=>{
    emit('update:modelValue' , (val.target as HTMLInputElement).value)
}
</script>

<template>
    <div class="flex flex-col">
        <label :for="id" class="text-base mb-1">{{title}}</label>
        <input type="text" class="border ps-2 py-2 rounded-md capitalize" :placeholder="`Enter Your ${id}`"
        @input="changeData($event)" :id="id" :value="modelValue" v-bind="$attrs"
        >
    </div>  
</template>

<style>

</style>