<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Aside from '@/Layouts/base/Aside.vue';
import Header from '@/Layouts/base/Header.vue';
import Main from '@/Layouts/base/Main.vue';

const appName = import.meta.env.VITE_APP_NAME;

defineProps({
    title: String,
});

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};

</script>

<template>
	
	<div class="container">
        <!-- Header Section -->
        <Header/>
        <!-- Sidebar Section -->
		<Aside/>
        <!-- End of Sidebar Section -->

        <!-- Main Content -->
        <main class="my-app">
            
            <h1>{{ title ,'' }}</h1>
            <!-- Recent Orders Table -->
            <div class="containerMain">
                <slot />
            </div>
            <!-- End of Recent Orders -->      
        </main>
        <!-- End of Main Content -->



        <div class="footer">
            <p>Copyright © <a href="#" target="_blank">{{ appName || 'baseTheme' }}</a> 2024</p>
        </div>

    </div>

</template>

<style>

</style>
