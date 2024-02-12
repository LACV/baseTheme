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
        text-success
        hover:text-white 
        border 
        border-success 
        hover:bg-success 
        focus:ring-4 
        focus:outline-none 
        focus:ring-success 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-success
        dark:text-success 
        dark:hover:text-white 
        dark:hover:bg-success 
        dark:focus:ring-success
        ">
        <slot />
    </button>
</template>