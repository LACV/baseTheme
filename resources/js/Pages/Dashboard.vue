<script setup>

import AppLayout from '@/Layouts/AppLayout.vue';
import PopUp from '@/Components/PopUp.vue'
import Buttons from '@/Components/Buttons.vue'
import * as usePopUp from '@/usePopUp.js';
import Spreadsheet  from '@/Components/Spreadsheet.vue'; 

</script>

<template>

  <AppLayout title="Dashboard">
  <Spreadsheet 
  title="titulo" 
  footer="top 1" 
  Icon="menu"
  colorscont="cont-pr">
  The sun slowly dipped below the horizon, casting a warm golden glow across the tranquil ocean. Seagulls glided gracefully through the air, their calls echoing in the distance. As the day faded into dusk, a sense of peace enveloped the coastal town, offering a moment of serenity amidst the chaos of the world.
</Spreadsheet>
   
  </AppLayout>
</template>
