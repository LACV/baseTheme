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
        text-button4
        hover:text-white 
        border 
        border-button4
        hover:bg-button4
        focus:ring-4 
        focus:outline-none 
        focus:ring-button4 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-button4 
        dark:text-button4
        dark:hover:text-white 
        dark:hover:bg-button4 
        dark:focus:ring-button4
        ">
        <slot />
    </button>
</template>