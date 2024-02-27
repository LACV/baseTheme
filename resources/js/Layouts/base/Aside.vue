<script setup>
    import { ref, onMounted, onBeforeUnmount} from 'vue';
    import * as asideMenu from '@/useAsideSetup.js'; 
    import { Head, Link, router } from '@inertiajs/vue3';
    import LogoApp from '@/Components/LogoApp.vue';
    

    const isRouteActive = (routeName) =>{
        return route().current(routeName);
    }

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
                    
                        <a href="#">
                            <span class="material-icons-sharp">
                                receipt_long
                            </span>
                            <h3>History</h3>
                        </a>
                        
                    <div class="submenu">
                        <a>
                                    <span class="material-icons-sharp">
                                        insights
                                    </span>
                                    <h3>Menu</h3> 
                            <div class="submenu-items">   
                                    <a class="item">
                                        <span class="material-icons-sharp">
                                            featured_play_list
                                        </span>
                                        <h3>Category 1</h3> 
                                    </a>
                                    <a class="item">
                                        <span class="material-icons-sharp">
                                                   featured_play_list
                                        </span>
                                        <h3>Category 2</h3> 
                                    </a>
                                    <a class="item">
                                        <span class="material-icons-sharp">
                                                   featured_play_list
                                        </span>
                                        <h3>Category 3</h3> 
                                    </a>
                                    <a class="item">
                                        <span class="material-icons-sharp">
                                            featured_play_list
                                        </span>
                                        <h3>Category 4</h3> 
                                    </a>   
                            </div>
                        </a>
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