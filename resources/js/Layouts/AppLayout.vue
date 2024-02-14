<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Aside from '@/Layouts/base/Aside.vue';
import Right from '@/Layouts/base/Right.vue';
import Main from '@/Layouts/base/Main.vue';



defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

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
        <!-- Sidebar Section -->
		<Aside/>
        <!-- End of Sidebar Section -->

        <!-- Main Content -->
        <main class="my-app">
            <h1>Formulario </h1>
            <!-- Recent Orders Table -->
            <div class="containerMain">
                <slot />
            </div>
            <!-- End of Recent Orders -->
        </main>
        <!-- End of Main Content -->

        <!-- Right Section -->
        <Right/>

        <div class="footer">
            <p>Copyright © LACV <a href="#" target="_blank">LACVCruz</a> 2024</p>
        </div>

    </div>

</template>

<style>

</style>
