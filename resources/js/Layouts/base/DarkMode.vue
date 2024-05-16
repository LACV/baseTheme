<script setup>

    import { ref, onMounted } from 'vue';
    import Notification from '@/Layouts/base/Notification.vue';
    
    //****** Dark Mode ******//
    const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;

    // Guardar el estado en localStorage
    localStorage.setItem('darkMode', isDarkMode.value.toString());
        // Aplicar o quitar la clase del cuerpo según el modo oscuro
        document.body.classList.toggle('dark-mode-variables', isDarkMode.value);
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    };

    onMounted(() => {
         // Aplicar el modo oscuro si está activado al cargar el componente
        document.body.classList.toggle('dark-mode-variables', isDarkMode.value);
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    });
</script>

<template>
  
    <div class="dark-mode" @click="toggleDarkMode" :class="{ 'dark-mode-variables': isDarkMode }">
        <svg class="" aria-hidden="true" :class="{ active: !isDarkMode }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
        </svg>

        <svg class="" :class="{ active: isDarkMode }" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
        </svg>
	</div>
</template>