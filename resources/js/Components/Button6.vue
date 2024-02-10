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
        text-button6 
        hover:text-white 
        border 
        border-button6
        hover:bg-button6
        focus:ring-4 
        focus:outline-none 
        focus:ring-button6
        font-medium rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-button6
        dark:text-button6 
        dark:hover:text-white 
        dark:hover:bg-button6 
        dark:focus:ring-button6
        ">
        <slot />
    </button>
</template>