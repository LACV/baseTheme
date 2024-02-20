<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Buttons from '@/Components/Buttons.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />
    <AppLayout title="Welcome">
        <Card>
            <template #logo>
                <LogoApp />
            </template>

            
            <div v-if="canLogin" class="sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10">   
            </div>
            <Buttons colorButton="s" link href="dashboard" v-if="$page.props.auth.user">
                Iniciar 
            </Buttons>

            <template v-else>
                <Buttons colorButton="w" link href="login" >
                    Iniciar Sesión
                </Buttons>
                <Buttons colorButton="p" link href="register" >
                    Registrar Usuario
                </Buttons>
            </template>
            
        </Card>
    </AppLayout>
</template>

<style>

</style>
