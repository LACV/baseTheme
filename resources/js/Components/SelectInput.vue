<script setup>
import { onMounted,defineProps, ref } from 'vue';

const props = defineProps({
    modelValue:String,
    options:Array,  
});


defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <select
        ref="input"
        class="
            bg-gray-200 
            border 
            border-gray-300 
            text-gray-900 
            ext-sm 
            rounded-lg 
            focus:ring-primary
            focus:border-primary
            block 
            w-full 
            p-2.5 
            dark:text-white
        "
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <option v-for="op in options" :key="op.i" :value="op.id">
            {{ op.name }}
        </option>
    </select>  
</template>
