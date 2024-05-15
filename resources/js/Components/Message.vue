<script setup>
import { computed } from 'vue';


const props = defineProps({
    Color: {
        type: String,
        default: 'primary',
    }

});

const messageColor = computed(()=>{
    return{
        'primary':'text-primary border-primary',
        'secondary':'text-secundary border-secondary',
        's': 'text-success border-success',
        'i': 'text-info border-info',
        'w': 'text-warning border-warning',
        'e': 'text-error border-error',
        'g': 'text-gray-400 border-gray-200 bg-gray-100',
        'p': 'text-purple border-purple',
    }[props.Color];
})
</script>

<template>
    <div>
        <transition :type="Color" leave-active-class="transition ease-in duration-1000" leave-from-class="opacity-100" leave-to-class="opacity-0" :class="messageColor">          
        <!-- barra de color -->
            <div  class="bg-gray-100 border-t-4 rounded-b px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                    <!-- color de icono  -->
                        <div class="py-1">
                            <svg class="fill-current h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path 
                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                                />
                            </svg>
                        </div>
                    <div>
                        <!-- titulo y texto -->
                        <p class="font-bold"> <slot /> </p>
                        <p class="text-sm">Make sure you know how these changes affect you.</p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>