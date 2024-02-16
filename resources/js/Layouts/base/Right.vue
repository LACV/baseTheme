<script setup>
    import { ref, onMounted } from 'vue';
    import DarkMode from '@/Layouts/base/DarkMode.vue';
    import * as asideMenu from '@/useAsideSetup.js';
    import UserDropdown from '@/Layouts/base/UserDropdown.vue';
    import Notification from '@/Layouts/base/Notification.vue';   
    import Buttons from '@/Components/Buttons.vue'
</script>

<template>
    <div class="right-section">
                <div class="nav">
                    <button @click='asideMenu.toggleOpenCloseMenu' class="menu-btn">
					<span class="material-icons-sharp">menu</span>
				</button>
                <DarkMode/>
                <Notification/>
                <UserDropdown/>
                

            </div>
            <!-- End of Nav -->

            <div class="reminders" v-if="$page.props.auth.user">
                <Buttons colorButton="primary">
                        Button Primary
                </Buttons>
            </div>

    </div>



</template>