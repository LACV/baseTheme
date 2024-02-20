<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
  document.documentElement.style.setProperty("--xp", xp);
  document.documentElement.style.setProperty("--yp", yp);
};
onMounted(() => {
  document.body.addEventListener("pointermove", syncPointer);
});

onBeforeUnmount(() => {
  document.body.removeEventListener("pointermove", syncPointer);
});
</script>

<template>
     <button class="pnt_global">
        <span>Button</span>
    </button>
</template>
