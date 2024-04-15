<script setup>
  import Message from '@/Components/Message.vue';
  import Buttons from '@/Components/Buttons.vue';
  
  import { ref } from 'vue';
  
  const showMessage = ref(false);
  const formData = ref({
    name: '',
    email: ''
  });
  
  function submitForm() {
    showMessage.value = true;
    setTimeout(() => {
      showMessage.value = false;
    }, 3000); 
  }
  </script>
  
<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="name">Nombre:</label>
        <input class="bg-gray-100" type="text" id="name" v-model="formData.name">
    <br><br>
        <label for="email">Email:</label>
        <input class="bg-gray-100" type="email" id="email" v-model="formData.email">
    <br><br>
        <Buttons @click="showMessage = true; hideMessageAfterDelay()" color-button="s">
        Save
      </Buttons>
      </form>
  
      <Message v-if="showMessage" Color="s" class="me-3">
        ¡Éxito! Datos guardados.
      </Message>
    </div>
  </template>

  
  