<script setup>
import { computed, useSlots } from 'vue';
import SectionTitle from './SectionTitle.vue';
import Card from '@/Components/Card.vue';

defineEmits(['submitted']);

const hasActions = computed(() => !! useSlots().actions);
</script>

<template>
  <!--<div class="md:grid md:grid-cols-3 md:gap-6">    </div>-->  
        <Card> 
            <SectionTitle>
                <template #title>
                    <slot name="title" />
                </template>
                <template #description>
                    <slot name="description" />
                </template>
            </SectionTitle>

        
            <form @submit.prevent="$emit('submitted')">
                <div
                    :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'"
                >
                    <div class="grid grid-cols-6 gap-6">
                        <slot name="form" />
                    </div>
                </div>

                <div v-if="hasActions" class="flex items-center justify-end mt-5">
                    <slot name="actions" />
                </div>
            </form>

        </Card>

</template>
