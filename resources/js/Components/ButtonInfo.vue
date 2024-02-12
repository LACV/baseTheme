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
        text-info
        hover:text-white 
        border 
        border-info
        hover:bg-info
        focus:ring-4
        focus:outline-none 
        focus:ring-info
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-info
        dark:text-info
        dark:hover:text-white 
        dark:hover:bg-info
        dark:focus:ring-info
        ">
        <slot />
    </button>
</template>