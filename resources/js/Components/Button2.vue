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
        text-gray-900
        hover:text-white 
        border 
        border-gray-800 
        hover:bg-gray-900 
        focus:ring-4 
        focus:outline-none 
        focus:ring-gray-300 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-gray-500 
        dark:text-gray-500
        dark:hover:text-gray-900 
        dark:hover:bg-gray-500 
        dark:focus:ring-gray-500
        ">
        <slot />
    </button>
</template>