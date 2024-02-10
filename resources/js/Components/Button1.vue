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
        text-button1
        hover:text-white 
        border 
        border-button1
        hover:bg-button1
        focus:ring-4
        focus:outline-none 
        focus:ring-button1
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-button1
        dark:text-button1
        dark:hover:text-white 
        dark:hover:bg-button1
        dark:focus:ring-button1
        ">
        <slot />
    </button>
</template>