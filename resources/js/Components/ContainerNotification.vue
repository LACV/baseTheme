<script setup>
import { computed } from 'vue';

const props = defineProps({
    EstadoNofication: {
        type: Boolean,
        default: false,
    },

});

const estadoNotificationClass = computed(()=>{
    return{
        false:'',
        true:'deactive',
    }[props.EstadoNofication];
})
</script>
<template>
   <div class="notification" :class="estadoNotificationClass">
                
        <div class="icon">
            
            <span class="material-icons-sharp" v-if="EstadoNofication">
            done_all
            </span>
            <span class="material-icons-sharp" v-else>
            done
            </span>
        </div>
        <div class="content">
            <div class="w-full ps-3">
                <div class="text-gray-600 text-sm mb-1.5 dark:text-gray-600">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                <div class="text-xs text-gray-400 dark:text-gray-500">a few moments ago</div>
            </div>
            <span class="material-icons-sharp">
                more_vert
            </span>
        </div>
    </div>

</template>