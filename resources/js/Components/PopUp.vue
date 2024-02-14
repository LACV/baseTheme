<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';
import * as usePopUp from '@/usePopUp.js';
import msjModal from '@/Components/MsjModal.vue';


const props = defineProps({

    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        default: '-',
    },
});


const maxWidthClass = computed(() => {
    return {
        'sm': 'sm:max-w-sm',
        'md': 'sm:max-w-md',
        'lg': 'sm:max-w-lg',
        'xl': 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[props.maxWidth];
});

const closeOnEscape = (e) => {
    if (e.key === 'Escape' && usePopUp.isShowModal.value) {
      usePopUp.isShowModal.value = !usePopUp.isShowModal.value;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));



</script>

<template>

<transition 
  enter-active-class="ease-out duration-300"
  enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  enter-to-class="opacity-100 translate-y-0 sm:scale-100"
  leave-active-class="ease-in duration-200"
  leave-from-class="opacity-100 translate-y-0 sm:scale-100"
  leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
>

  <div :style="{ 
             display: usePopUp.isShowModal.value ? '' : 'none'
            }"
     class="fixed inset-0 flex items-center justify-center overflow-x-auto overflow-y-auto z-40" scroll-region 
  >
  
      <div  class="relative w-full h-auto max-w-md p-6 bg-gray-200 rounded-md shadow-lg" :class="maxWidthClass">             
        <div class="flex items-start justify-between">
          <h2 class="text-xl font-bold text-gray-900 ">{{ title }}</h2>
          <button  @click="usePopUp.toggleShowClose" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">Close</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mt-4 flex justify-end">
            <slot/>
        </div>

        <hr class="h-px my-8 border-0 bg-gray-900">
        <div class="flex items-center justify-center">
          <slot name="buttonForm"/>
        </div>
      </div>
  </div>
</transition>


</template>