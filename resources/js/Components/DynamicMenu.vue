<template>
  <div class="main">
    <div class="navigation" @click="toggleNavigation" ref="navigationRef">
      <span style="--i:0;--x:-1;--y:0;"><a class="material-icons-sharp">{{ Icon }}</a></span> 
      <span style="--i:1;--x:1;--y:0;"><a class="material-icons-sharp">{{ Icon }}</a></span>
      <span style="--i:2;--x:0;--y:-1;"><a class="material-icons-sharp">{{ Icon }}</a></span>
      <span style="--i:3;--x:0;--y:1;"><a class="material-icons-sharp">{{ Icon }}</a></span>
      <span style="--i:4;--x:-1;--y:1;"><a class="material-icons-sharp">{{ Icon }}</a></span>
      <span style="--i:5;--x:-1;--y:-1;"><a class="material-icons-sharp">{{ Icon }}</a></span>
      <span style="--i:6;--x:1;--y:-1;"><a class="material-icons-sharp">{{ Icon }}</a></span>
      <span style="--i:7;--x:1;--y:1;"><a class="material-icons-sharp">{{ Icon }}</a></span> 
    </div>
    <div class="close" @click="closeNavigation"><a class="material-icons-sharp">close</a></div>
  </div>
</template>

<script setup>
import { ref } from 'vue' 

const props = defineProps({
Icon: {
    type: String,
    default: '-',
},  
});

// Utilizamos refs para hacer referencia a los elementos del DOM
const navigationRef = ref(null);

const toggleNavigation = () => {
  // Accedemos a la clase del elemento utilizando la referencia
  navigationRef.value.classList.add('active');
}

const closeNavigation = () => {
  // Accedemos a la clase del elemento utilizando la referencia
  navigationRef.value.classList.remove('active');
}

</script>