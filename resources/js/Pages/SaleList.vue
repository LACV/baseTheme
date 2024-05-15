<script setup>
    import { Head } from '@inertiajs/vue3'; 
    import AppLayout from '@/Layouts/AppLayout.vue'; 
    import List from '@/Components/List.vue';
    import ListProduct from '@/Components/ListProduct.vue';

    const leftItems = [
    { title: "Arroz Premium 1000 g", price: "$12.000" },
    { title: "Arroz Integral 1000 g", price: "$12.000" },
    { title: "Arroz Blanco 500 g", price: "$12.000" },
    { title: "Arroz Blanco 3000 g", price: "$12.000" },
    { title: "Arroz Blanco 5000 g", price: "$12.000" },
    { title: "Arroz Blanco Sopa 500 g", price: "$12.000" },
    { title: "Arroz Blanco Ideal 454 g", price: "$12.000" },
    { title: "Arroz Blanco 1000 g", price: "$12.000" },
    { title: "Arroz Blanco 10 Kg", price: "$12.000" },
    { title: "Arroz Premium 500 g", price: "$12.000" }
  ];
</script>

<template>
  <AppLayout>
    <div class="princ grid grid-cols-2 gap-auto">
      <!-- Contenido a la izquierda -->
      <div class="punt1 col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 flex flex-wrap">
        <List v-for="(item, index) in leftItems" :key="index" :title="item.title" :price="item.price" class="mb-4 mr-4"></List>
      </div>
      <!-- Contenido a la derecha -->
      <div class="punt2 col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 flex flex-wrap">
        <ListProduct title="Current Order" class="mb-4 mr-4"></ListProduct>
      </div>
    </div>
  </AppLayout>
</template>