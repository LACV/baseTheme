<script setup>
    import { defineProps } from 'vue';
    import { Link } from '@inertiajs/vue3';

     defineProps({
        pagination:Object
     })
</script>

<template>
    <nav class="inline-flex justify-center  -space-x-px text-sm">
      <template v-for="(link, index) in pagination.links" :key="link.label">
        <Link
          preserve-scroll=""
          :href="link.url ?? ''"
          v-html="link.label"
          :class="[
            'flex',
            'items-center',
            'justify-center',
            'w-9', // Tamaño uniforme
            'h-9', // Tamaño uniforme
            'leading-tight',
            'text-gray-600',
            'bg-white',
            'border',
            'border-gray-300',
            'hover:bg-gray-100',
            'hover:text-gray-700',
            'dark:bg-gray-200',
            'dark:border-gray-300',
            'dark:text-gray-600',
            'dark:hover:bg-gray-300',
            'dark:hover:text-700',
            {
              'bg-gray-300 dark:bg-gray-600 dark:text-gray-100': link.active,
              'ms-0 border-e-0 rounded-s-lg': index === 0,
              'ms-0 border-e-0 rounded-e-lg': index === pagination.links.length - 1,
              '!text-gray-300': !link.url
            }
          ]"
        />
      </template>
    </nav>
  </template>

  

  
