<script setup>
import { computed } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue';
import { Link } from '@inertiajs/vue3';

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
        type: Boolean,
        default: false,
    },
    link:{
        type:Boolean,
        default:false,
    },
    href: {
        type:String,
        default:'',
    }

});

const maxWidthButtonClass = computed(()=>{
    return{
        'false':'',
        'true':'w-full',
    }[props.maxWidthButton];
})

const colorButtonClass = computed(() => {
    return {
        'primary':'text-primary border-primary hover:bg-primary focus:ring-primary dark:border-primary dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary',
        'secondary':'text-secondary border-secondary hover:bg-secondary focus:ring-secondary dark:border-secondary dark:border-secondary dark:text-secondary dark:hover:text-white dark:hover:bg-secondary dark:focus:ring-secondary',
        's': 'text-success border-success hover:bg-success focus:ring-success dark:border-success dark:border-success dark:text-success dark:hover:text-white dark:hover:bg-success dark:focus:ring-success',
        'i': 'text-info border-info hover:bg-info focus:ring-info dark:border-info dark:border-info dark:text-info dark:hover:text-white dark:hover:bg-info dark:focus:ring-info',
        'w': 'text-warning border-warning hover:bg-warning focus:ring-warning dark:border-warning dark:border-warning dark:text-warning dark:hover:text-white dark:hover:bg-warning dark:focus:ring-warning',
        'e': 'text-error border-error hover:bg-error focus:ring-error dark:border-error dark:border-error dark:text-error dark:hover:text-white dark:hover:bg-error dark:focus:ring-error',
        'g': 'text-gray-900 border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-500 dark:border-gray-500 dark:text-gray-500 dark:hover:text-gray-900  dark:hover:bg-gray-500 dark:focus:ring-gray-500',
        'p': 'text-purple border-purple hover:bg-purple focus:ring-purple dark:border-purple dark:border-purple dark:text-purple dark:hover:text-white dark:hover:bg-purple dark:focus:ring-purple',
        'glow-pr':'btn_glow btn_glow_pr focus:ring-primary focus:border-primary',
        'glow-s':'btn_glow btn_glow_s focus:ring-secondary focus:border-secondary',
        'glow-su':'btn_glow btn_glow_su focus:ring-success focus:border-success',
        'glow-i':'btn_glow btn_glow_i focus:ring-info focus:border-info',
        'glow-pu':'btn_glow btn_glow_pu focus:ring-purple focus:border-purple',
        'glow-w':'btn_glow btn_glow_w focus:ring-warning focus:border-warning' ,
        'glow-d':'btn_glow btn_glow_d focus:ring-error focus:border-error',
    }[props.colorButton];
});

// Método para generar la URL de la ruta basado en el nombre de la ruta
const generateRouteUrl = (routeName) => {
    return route(routeName);
};

</script>

<template>

    <Link 
        v-if="link"
        class="       
            hover:text-white 
            border   
            focus:ring-3 
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
        :href="generateRouteUrl(href)" 
        :class="colorButtonClass,maxWidthButtonClass"
     >
        <slot />
    </Link>

    <button
        v-else
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
        <span>  
            <slot />
        </span>
    </button>

    
</template>