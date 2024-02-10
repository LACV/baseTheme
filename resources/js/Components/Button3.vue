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
        text-button3
        hover:text-white 
        border 
        border-button3 
        hover:bg-button3 
        focus:ring-4 
        focus:outline-none 
        focus:ring-button3 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-button3
        dark:text-button3 
        dark:hover:text-white 
        dark:hover:bg-button3 
        dark:focus:ring-button3
        ">
        <slot />
    </button>
</template>