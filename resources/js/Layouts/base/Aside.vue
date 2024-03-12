<script setup>
    import { ref, onMounted, onBeforeUnmount} from 'vue';
    import * as asideMenu from '@/useAsideSetup.js'; 
    import { Head, Link, router } from '@inertiajs/vue3';
    import LogoApp from '@/Components/LogoApp.vue';

    const mainItem = ref(null);
    const submenuItems = ref(null);
    const isActive = ref(false);
    const isOpen= ref(false);

    onMounted(() => {
        const storedActiveState = localStorage.getItem('isActive');
        isActive.value = storedActiveState === 'true';
    });

    const toggleActive = () => {
        isActive.value = !isActive.value;
        localStorage.setItem('isActive', isActive.value.toString());
    };


    const isRouteActive = (routeName) => {
        return route().current(routeName);
    };

    const logout = () => {
        router.post(route('logout'));
    };
    
</script>

<template>          
        <aside :style="{ 
             display: asideMenu.isOpenCloseMenu.value ? 'block' : ''
            }">
                    <div class="toggle">
                        <div class="logo">
                            <LogoApp/>
                            <h2>Stock<span class="primary">Voult</span></h2>
                        </div>
                    
                        <div @click="asideMenu.toggleOpenCloseMenu" class="close" id="close-btn">
                            <span class="material-icons-sharp">close</span>
                        </div> 
                        
                    </div>

                    <div class="sidebar" v-if="$page.props.auth.user">
                        <Link :href="route('dashboard')" :class="{ 'active': isRouteActive('dashboard') }" >
                            <span class="material-icons-sharp">
                                dashboard
                            </span>
                            <h3>Dashboard</h3>
                        </Link>

                        <Link :href="route('tables')" :class="{ 'active': isRouteActive('tables') }">
                            <span class="material-icons-sharp">
                                person_outline
                            </span>
                            <h3>Tablas</h3>
                        </Link>
                    
                        <Link :href="route('historia')" :class="{ 'active': isRouteActive('historia') }">
                            <span class="material-icons-sharp">
                                receipt_long
                            </span>
                            <h3>History</h3>
                        </Link>
                        
                        <div class="submenu" >
                            <a href="#" ref="mainItem"  :class="{'active': isActive }" @mouseover="toggleActive">
                                <span class="material-icons-sharp">insights</span>
                                <h3>Buttons</h3>
                            </a>
                            <div class="submenu-items" ref="submenuItems">
                                <Link :href="route('normalbuttons')" :class="{ 'active': isRouteActive('normalbuttons') }" class="item">
                                    <span class="material-icons-sharp">featured_play_list</span>
                                    <h3>Normal Buttons</h3>
                                </Link>
                                <Link :href="route('glowbuttons')" :class="{ 'active': isRouteActive('glowbuttons') }" class="item">
                                    <span class="material-icons-sharp">featured_play_list</span>
                                    <h3>Glow Buttons</h3>
                                </Link>
                                <Link :href="route('buttons')" :class="{ 'active': isRouteActive('buttons') }" class="item">
                                    <span class="material-icons-sharp">featured_play_list</span>
                                    <h3>Popup Buttons</h3>
                                </Link>
                            </div >
                        </div>

                        <a href="#">
                            <span class="material-icons-sharp">
                                mail_outline
                            </span>
                            <h3>Tickets</h3>
                            <span class="message-count">27</span>
                        </a>

                        <a href="#">
                            <span class="material-icons-sharp">
                                inventory
                            </span>
                            <h3>Sale List</h3>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                report_gmailerrorred
                            </span>
                            <h3>Reports</h3>
                        </a>
                
                        <a href="#">
                            <span class="material-icons-sharp">
                                settings
                            </span>
                            <h3>Settings</h3>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                add
                            </span>
                            <h3>New Login</h3>
                        </a>
                        <a href="#" @click="logout" class="lastchild" >
                            <span class="material-icons-sharp">
                                logout
                            </span>
                            <h3>Logout</h3>
                        </a>
                    </div>        
        </aside>
</template>