<script setup>
defineProps({
    message: String,
});
</script>

<template>

    <div v-show="message" 
        class="
            flex 
            items-center 
            p-4 
            mb-4 
            text-sm
            text-red-800 
            font-bold
            rounded-lg 
            bg-red-100 
            dark:bg-gray-300 
            dark:text-red-400
            " 
            role="alert"
        >
        <span class="material-icons-sharp">
            error
        </span>
        <div>
            <span class="font-medium"> - {{ message }}</span>.
        </div>
    </div>

</template>