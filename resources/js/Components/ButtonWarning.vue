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
        text-warning 
        hover:text-white 
        border 
        border-warning  
        hover:bg-warning 
        focus:ring-4 
        focus:outline-none 
        focus:ring-warning 
        font-medium rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-warning 
        dark:text-warning  
        dark:hover:text-white 
        dark:hover:bg-warning  
        dark:focus:ring-warning 
        ">
        <slot />
    </button>
</template>