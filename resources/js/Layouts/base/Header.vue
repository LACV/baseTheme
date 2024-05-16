<script setup>
    import { ref, onMounted } from 'vue';
    import DarkMode from '@/Layouts/base/DarkMode.vue';
    import * as asideMenu from '@/useAsideSetup.js';
    import UserDropdown from '@/Layouts/base/UserDropdown.vue';
    import Notification from '@/Layouts/base/Notification.vue';   
    import Buttons from '@/Components/Buttons.vue'
</script>

<template>
    <div class="nav">
        <button @click='asideMenu.toggleOpenCloseMenu' class="menu-btn">
			<svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>

		</button>
        <DarkMode/>
        <Notification/>
        <UserDropdown/>                 
    </div>
</template>