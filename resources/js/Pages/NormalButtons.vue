<script setup>
    import { Head } from '@inertiajs/vue3';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import Buttons from '@/Components/Buttons.vue';
</script>

<template>

    <AppLayout>
        
    <h1 class="mt-10 mb-10">Button Width Auto</h1>
        
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

    <h1 class="mt-10 mb-10">Button Class=W-Full</h1> 
    
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