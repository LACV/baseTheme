<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import Buttons from '@/Components/Buttons.vue';
    import PopUp from '@/Components/PopUp.vue';
    import * as usePopUp from '@/usePopUp.js';

</script>

<template>
    

    <AppLayout>
        
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

        <h1 class="mt-10 mb-10">Button Popup Width auto</h1> 

        <Buttons  colorButton="p" @click="usePopUp.toggleShowClose">
            Button Open Modal
        </Buttons> 

        <h1 class="mt-10 mb-10">Button Popup Class=W-Full</h1> 
    
        <Buttons  @click="usePopUp.toggleShowClose" colorButton="primary" maxWidthButton>
        Button Primary
        </Buttons>

    </AppLayout>
 </template>