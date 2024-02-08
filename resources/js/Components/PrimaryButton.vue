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
            text-green-700
            hover:text-white 
            border 
            border-green-700 
            hover:bg-green-800 
            focus:ring-4 
            focus:outline-none 
            focus:ring-green-300 
            font-medium rounded-lg 
            text-sm px-5 py-2.5 
            text-center 
            me-2 mb-2 
            dark:border-green-500 
            dark:text-green-500 
            dark:hover:text-white 
            dark:hover:bg-green-600 
            dark:focus:ring-green-800
            "
    >
        <slot />
    </button>
</template>
