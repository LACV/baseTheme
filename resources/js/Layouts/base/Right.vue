<script setup>
    import { ref, onMounted } from 'vue';
    import DarkMode from '@/Layouts/base/DarkMode.vue';
    import * as asideMenu from '@/useAsideSetup.js';
    import Buttons from '@/Components/Buttons.vue'
</script>

<template>
    <div class="right-section">
                <div class="nav">
                    <button @click='asideMenu.toggleOpenCloseMenu' class="menu-btn">
					<span class="material-icons-sharp">menu</span>
				</button>

                <DarkMode/>
                    
                <div class="profile" v-if="$page.props.auth.user">
                    <div class="info">
                        <p>Hola, <b>Luis Cruz</b></p>
                        <small class="text-muted">Admin</small>
                    </div>
                    <div class="profile-photo">
                        <img src="images/profile-1.jpg">
                    </div>
                </div>

            </div>
            <!-- End of Nav -->

            <div class="reminders" v-if="$page.props.auth.user">
                <Buttons colorButton="primary">
                        Button Primary
                </Buttons>
            </div>

    </div>



</template>