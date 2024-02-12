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
        text-error
        hover:text-white 
        border 
        border-error
        hover:bg-error
        focus:ring-4 
        focus:outline-none 
        focus:ring-error
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2 
        dark:border-error 
        dark:text-error
        dark:hover:text-white 
        dark:hover:bg-error
        dark:focus:ring-error
        ">
        <slot />
    </button>
</template>