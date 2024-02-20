<script setup>
import { computed } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue';

const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
  document.documentElement.style.setProperty("--xp", xp);
  document.documentElement.style.setProperty("--yp", yp);
};
onMounted(() => {
  document.body.addEventListener("pointermove", syncPointer);
});

onBeforeUnmount(() => {
  document.body.removeEventListener("pointermove", syncPointer);
});

const props = defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    colorButton: {
        type: String,
        default: 'primary',
    },
    maxWidthButton: {
        type: String,
        default: '',
    },

});

const maxWidthButtonClass = computed(()=>{
    return{
        '':'',
        'full':'w-full ',
    }[props.maxWidthButton];
})

const colorButtonClass = computed(() => {
    return {
        'primary':'text-primary border-primary hover:bg-primary focus:ring-primary dark:border-primary dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary',
        'secondary':'text-secondary border-secondary hover:bg-secondary focus:ring-secondary dark:border-secondary dark:border-secondary dark:text-secondary dark:hover:text-white dark:hover:bg-secondary dark:focus:ring-secondary',
        's': 'text-success border-success hover:bg-success focus:ring-success dark:border-success dark:border-success dark:text-success dark:hover:text-white dark:hover:bg-success dark:focus:ring-success',
        'i': 'text-info border-info hover:bg-info focus:ring-info dark:border-info dark:border-info dark:text-info dark:hover:text-white dark:hover:bg-info dark:focus:ring-info',
        'w': 'text-warning border-warning hover:bg-warning focus:ring-warning dark:border-warning dark:border-info dark:text-warning dark:hover:text-white dark:hover:bg-warning dark:focus:ring-warning',
        'e': 'text-error border-error hover:bg-error focus:ring-error dark:border-error dark:border-error dark:text-error dark:hover:text-white dark:hover:bg-error dark:focus:ring-error',
        'g': 'text-gray-900 border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-500 dark:border-gray-500 dark:text-gray-500 dark:hover:text-gray-900  dark:hover:bg-gray-500 dark:focus:ring-gray-500',
        'p': 'text-purple border-purple hover:bg-purple focus:ring-purple dark:border-purple dark:border-purple dark:text-purple dark:hover:text-white dark:hover:bg-purple dark:focus:ring-purple',
    }[props.colorButton];
});


</script>

<template>
    <button 
        :type="type"
        class="       
        hover:text-white 
        border   
        focus:ring-4 
        focus:outline-none  
        font-bold 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        " 
        :class="colorButtonClass,maxWidthButtonClass"
        
        >
        <slot />
    </button>
</template>