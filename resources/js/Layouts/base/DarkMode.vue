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
		<span class="material-icons-sharp" :class="{ active: !isDarkMode }">
			light_mode
		</span>
		<span class="material-icons-sharp" :class="{ active: isDarkMode }">
			dark_mode
		</span>
	</div>
</template>