<script setup>
import * as usePopUp from '@/usePopUp.js';
import ButtonSuccess from '@/Components/ButtonSuccess.vue';
import ButtonError from '@/Components/ButtonError.vue';

</script>

<template>
    <div :style="{ 
             display: usePopUp.isShowModal.value ? '' : 'none'
            }"
     class="fixed inset-0 flex items-center justify-center overflow-x-auto overflow-y-auto z-40">
      <div class="relative w-full h-auto max-w-md p-6 bg-gray-200 rounded-md shadow-lg ">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-semibold text-gray-900">Privacy info</h3>
          <button  @click="usePopUp.toggleShowClose" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">Close</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mt-4 flex justify-end">
            <slot/>
            <ButtonError  @click="usePopUp.toggleShowClose"  >
                    Cancelar
            </ButtonError>
            <ButtonSuccess>
                    Guardar
            </ButtonSuccess>
        </div>
      </div>
    </div>
</template>