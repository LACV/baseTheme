<script setup>
 import { defineProps, ref, computed } from 'vue';
 
 const props = defineProps({
     EstadoNofication: {
         type: Boolean,
         default: false,
     }
 });

 const estadoNotificationClass = computed(()=>{
    return{
        false:'',
        true:'deactive',
    }[props.EstadoNofication];
});


 </script>

<template>
    <div class="notification  mr-4" :class="estadoNotificationClass">
         <div class="icon mr-2" >
             <span class="material-icons-sharp" v-if="EstadoNofication">done</span>
             <span class="material-icons-sharp" v-else>done_all</span>
         </div>
         <div class="content"> <!-- Aplicar clase de opacidad si estadoNotification es false -->
             <div class="ps-2">
                 <div class="text-gray-600 text-sm mb-1.5 dark:text-gray-600">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                 <div class="text-xs text-gray-400 dark:text-gray-500">a few moments ago</div>
             </div>
         </div>
         <span class="material-icons-sharp ml-2 text-4xl text-grey-300 dark:text-gray-500 hover:text-primary">clear_all</span>
     </div>
 </template>
 
 