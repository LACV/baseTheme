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
        text-purple
        hover:text-white 
        border 
        border-purple
        hover:bg-purple
        focus:ring-4 
        focus:outline-none 
        focus:ring-purple
        font-medium rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-purple
        dark:text-purple
        dark:hover:text-white 
        dark:hover:bg-purple
        dark:focus:ring-purple
        ">
        <slot />
    </button>
</template>