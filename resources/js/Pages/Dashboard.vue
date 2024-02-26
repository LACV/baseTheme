<script setup>

import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import PopUp from '@/Components/PopUp.vue'
import Buttons from '@/Components/Buttons.vue'
import * as usePopUp from '@/usePopUp.js';

</script>

<template>

  <AppLayout title="Dashboard">
    
    <h1 class="mt-10 mb-10">Button Width Auto</h1>

    <Buttons @click="usePopUp.toggleShowClose">
      Button Open Modal
    </Buttons>  
  
    <Buttons colorButton="primary">
      Button Primary
    </Buttons>

    <Buttons colorButton="secondary">
      Button Secondary
    </Buttons>

    <Buttons colorButton="i">
      Button Info
    </Buttons>  

    <Buttons colorButton="g">
      Button Gray
    </Buttons> 

    <Buttons colorButton="s">
      Button Success 
    </Buttons>

    <Buttons colorButton="e">
      Button Error 
    </Buttons>

    <Buttons colorButton="w">
      Button Warning 
    </Buttons>

    <Buttons colorButton="p">
      Button Purple 
    </Buttons>

    <Buttons colorButton="glow-d">
      Button Glow Danger
    </Buttons>

    <Buttons colorButton="glow-w">
      Button Glow Warning
    </Buttons>
    <Buttons colorButton="glow-pr">
      Button Glow Danger
    </Buttons>
    <Buttons colorButton="glow-s">
      Button Glow Danger
    </Buttons>
    <Buttons colorButton="glow-su">
      Button Glow Danger
    </Buttons>
    <Buttons colorButton="glow-i">
      Button Glow Danger
    </Buttons>
    <Buttons colorButton="glow-pu">
      Button Glow Danger
    </Buttons>
    

    <PopUp title="Title Form" maxWidth="sm">
      <template #buttonForm>
        <Buttons colorButton="e"  @click="usePopUp.toggleShowClose"  >
              Cancelar
        </Buttons>
        <Buttons colorButton="s">
              Guardar
        </Buttons>
      </template>
    </PopUp> 
    
    <h1 class="mt-10 mb-10">Button Class=W-Full</h1>

    <Buttons @click="usePopUp.toggleShowClose" maxWidthButton>
      Button Open Modal
    </Buttons>  
    
    <Buttons colorButton="primary" maxWidthButton>
      Button Primary
    </Buttons>

    <Buttons colorButton="secondary" maxWidthButton>
      Button Secondary
    </Buttons>

    <Buttons colorButton="i" maxWidthButton>
      Button Info
    </Buttons>  

    <Buttons colorButton="g" maxWidthButton>
      Button Gray
    </Buttons> 

    <Buttons colorButton="s" maxWidthButton>
      Button Success 
    </Buttons>

    <Buttons colorButton="e" maxWidthButton>
      Button Error 
    </Buttons>

    <Buttons colorButton="w" maxWidthButton>
      Button Warning 
    </Buttons>

    <Buttons colorButton="p" maxWidthButton>
      Button Purple 
    </Buttons>
   
  </AppLayout>
</template>
