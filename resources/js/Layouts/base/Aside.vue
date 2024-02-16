<script setup>
    import { ref, onMounted, onBeforeUnmount} from 'vue';
    import * as asideMenu from '@/useAsideSetup.js';
    import UserDropdown from '@/Layouts/base/UserDropdown.vue';   
    import { Head, Link, router } from '@inertiajs/vue3';
    
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
                            <img src="assets/images/logo.png">
                            <h2>Stock<span class="primary">Voult</span></h2>
                        </div>
                    
                        <div @click="asideMenu.toggleOpenCloseMenu" class="close" id="close-btn">
                            <span class="material-icons-sharp">close</span>
                        </div> 
                        
                    </div>

                    <div class="sidebar" v-if="$page.props.auth.user">
                        <a href="#">
                            <span class="material-icons-sharp">
                                dashboard
                            </span>
                            <h3>Dashboard</h3>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                person_outline
                            </span>
                            <h3>Users</h3>
                        </a>
                    
                        <a href="#">
                            <span class="material-icons-sharp">
                                receipt_long
                            </span>
                            <h3>History</h3>
                        </a>
                        
                    <div class="submenu">
                        <a class="active">
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
                        <a href="#" @click="logout" >
                            <span class="material-icons-sharp">
                                logout
                            </span>
                            <h3>Logout</h3>
                        </a>
                        
                        


                    </div>
            
        </aside>
</template>