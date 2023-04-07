<script lang="ts" setup>
import { DocInfo } from "../../types/type"
import { PropType } from "vue";
const props = defineProps({
    info: {
        type: Object as PropType<DocInfo>,
        default: () => ({
            img: '',
            name: 'Dr/ Ahmed Nasser',
            phone: '+20 120 585 4874',
            category: 'Demorology',
        })
    }
})
</script>

<template>
<div class="grid md:grid-cols-5 grid-cols-4 gap-4 bg-white py-4 px-2 rounded-md">
    <div class="col-span-2 flex items-center gap-2 justify-start">
        <img class="w-8 h-8 rounded-full object-cover" src="../../../public/icons/doc.png" alt="">
        {{ info.name }}
    </div>
    <div class="md:col-span-1 col-span-2 center-items">
        {{ info.phone }}
    </div>
    <div class="md:col-span-1 col-span-2 center-items">
        {{ info.category }}

    </div>
    <div class="md:col-span-1 col-span-2 flex center-items gap-3">
        <a :href="`tel:${info.phone}`" class="w-8 h-8 rounded-full bg-primary-100 border center-items">
            <svg id="vuesax_bold_call" data-name="vuesax/bold/call" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="call">
                  <path id="Vector" d="M9.05,12.95,7.2,14.8a1,1,0,0,1-1.41.01c-.11-.11-.22-.21-.33-.32a28.414,28.414,0,0,1-2.79-3.27A17.828,17.828,0,0,1,.71,7.81,8.586,8.586,0,0,1,0,4.54,5.173,5.173,0,0,1,.36,2.61,4.6,4.6,0,0,1,1.51.94,2.93,2.93,0,0,1,3.59,0,1.879,1.879,0,0,1,4.4.18a1.63,1.63,0,0,1,.67.56L7.39,4.01a3.422,3.422,0,0,1,.4.7,1.581,1.581,0,0,1,.14.61,1.357,1.357,0,0,1-.21.71,3.4,3.4,0,0,1-.56.71l-.76.79a.535.535,0,0,0-.16.4.908.908,0,0,0,.03.23c.03.08.06.14.08.2a8.3,8.3,0,0,0,.93,1.28c.45.52.93,1.05,1.45,1.58.1.1.21.2.31.3A1,1,0,0,1,9.05,12.95Z" transform="translate(2 2)" fill="#595cff"/>
                  <path id="Vector-2" data-name="Vector" d="M12.37,4.29a2.54,2.54,0,0,1-.15.85,2.442,2.442,0,0,1-.1.24,4.126,4.126,0,0,1-.68,1.02A4.508,4.508,0,0,1,9.8,7.58c-.01,0-.02.01-.03.01a5.052,5.052,0,0,1-1.92.37,8.334,8.334,0,0,1-3.26-.73A17.564,17.564,0,0,1,1.15,5.25C.76,4.96.37,4.67,0,4.36L3.27,1.09a5.618,5.618,0,0,0,.74.48c.05.02.11.05.18.08a.69.69,0,0,0,.25.04.55.55,0,0,0,.41-.17L5.61.77A3.068,3.068,0,0,1,6.33.21,1.332,1.332,0,0,1,7.04,0a1.6,1.6,0,0,1,.61.13,3.868,3.868,0,0,1,.7.39l3.31,2.35a1.517,1.517,0,0,1,.55.64A2.052,2.052,0,0,1,12.37,4.29Z" transform="translate(9.6 14.04)" fill="#595cff"/>
                  <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(24 24) rotate(180)" fill="none" opacity="0"/>
                </g>
              </svg>
              
        </a>
        <div class="w-8 h-8 rounded-full bg-primary-100 center-items">
            <svg id="messages-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path id="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0"/>
                <path id="Vector-2" data-name="Vector" d="M13.9,14.83l.39,3.16a1,1,0,0,1-1.5.98l-3.46-2.06a.5.5,0,0,1-.17-.68,6.316,6.316,0,0,0,.77-3,6.836,6.836,0,0,0-7-6.64,7.208,7.208,0,0,0-2.28.36.5.5,0,0,1-.64-.6A8.716,8.716,0,0,1,8.6,0c4.88,0,8.83,3.69,8.83,8.24A8.054,8.054,0,0,1,13.9,14.83Z" transform="translate(4.566 2)" fill="#595cff"/>
                <path id="Vector-3" data-name="Vector" d="M11,5.14A4.861,4.861,0,0,1,9.82,8.3,5.584,5.584,0,0,1,5.5,10.27L2.89,11.82a.625.625,0,0,1-.94-.61L2.2,9.24A4.988,4.988,0,0,1,0,5.14,5.023,5.023,0,0,1,2.38.91,5.683,5.683,0,0,1,5.5,0,5.327,5.327,0,0,1,11,5.14Z" transform="translate(2 10.09)" fill="#595cff"/>
              </svg>
              
              
        </div>
    </div>
</div>
</template>

<style></style>