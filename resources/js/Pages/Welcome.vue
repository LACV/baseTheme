<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Buttons from '@/Components/Buttons.vue'

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />
    <Card>
    
    <template #logo>
        <LogoApp />
    </template>

        <AppLayout title="Welcome">
                <div v-if="canLogin" class="sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10">
            
                </div>
                <Buttons colorButton="s" v-if="$page.props.auth.user">
                    Iniciar 
                </Buttons>

                <template v-else>
                    <Buttons colorButton="w" @click="route('login')" >
                    Iniciar Sesión
                    </Buttons>
                </template>
        </AppLayout>
    </Card>



</template>

<style>

</style>
