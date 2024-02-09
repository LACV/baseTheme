<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button 
        :type="type" 
        class="
            w-full 
            text-primary 
            hover:text-white 
            border 
            border-primary  
            hover:bg-primary  
            focus:ring-4 
            focus:outline-none 
            focus:ring-primary  
            font-bold
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            text-center 
            me-2 
            mb-2    
            dark:border-primary 
            dark:text-primary 
            dark:hover:text-white 
            dark:hover:primary 
            dark:focus:ring-primary 
            "
    >
        <slot />
    </button>
</template>
