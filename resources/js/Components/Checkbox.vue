<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        default: false,
    },
    value: {
        type: String,
        default: null,
    },
});

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit('update:checked', val);
    },
});
</script>


<template>
    <input
        v-model="proxyChecked"
        type="checkbox"
        :value="value"
        class="
                w-4 h-4 
                border 
                border-gray-300 
                rounded bg-gray-50 
                focus:ring-3
                focus:ring-primary
                dark:bg-gray-700 
                dark:border-gray-600 
                dark:focus:ring-primary 
                dark:ring-offset-gray-800 
                dark:focus:ring-offset-gray-800
                "
    >
</template>
