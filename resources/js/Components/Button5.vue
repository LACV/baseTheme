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
        text-button5 
        hover:text-white 
        border 
        border-button5 
        hover:bg-button5
        focus:ring-4 
        focus:outline-none 
        focus:ring-button5
        font-medium rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-button5 
        dark:text-button5 
        dark:hover:text-white 
        dark:hover:bg-button5 
        dark:focus:ring-button5
        ">
        <slot />
    </button>
</template>