<script lang="ts" setup>
import { TailwindPagination } from 'laravel-vue-pagination';
const props = defineProps({
    laravelData:{

    }
})
const emits = defineEmits(['change'])
const getResults = async (page = 1) => {
    if (page > props.paginationMeta.last_page)
        return
    emits('change', page)
}
</script>

<template>
    <TailwindPagination
        :data="laravelData"
        @pagination-change-page="getResults"
    />
</template>