<script setup>
import { ref } from 'vue';
import ContainerNotification from '@/Components/ContainerNotification.vue';

const isOpen= ref(false);

const toggleDropdown = (forceClose = false) => {
  if (forceClose) {
    isOpen.value = false;
  } else {
    isOpen.value = !isOpen.value;
  }
}
</script>
<template>
    <div class="containerNoti" v-if="$page.props.auth.user">
        <div @mouseover="toggleDropdown(true)" @click="toggleDropdown()" id="Notification" data-dropdown-toggle="Notification" class="Notification relative top-[-30px] cursor-pointer hover:text-primary dark:hover:text-primary dark:text-gray-500">
            <span class="material-icons-sharp ml-5">
                notifications
            </span>
        </div>
        <div v-if="isOpen"  id="Notification" 
                        class="contentNotif
                              relative 
                              md:absolute
                              top-[9%]
                              right-60
                              bg-white 
                              divide-y 
                              divide-primary
                              rounded-lg 
                              shadow 
                              w-full
                              z-10 
                              max-w-sm
                              dark:bg-gray-200 
                              dark:divide-primary"
                              @mouseleave="toggleDropdown(false)">
          <div class="block px-4 py-2  text-center cursor-pointer text-primary dark:text-primary">
          Notifications
          </div>
             <ContainerNotification EstadoNofication="true" />
             <ContainerNotification EstadoNofication="false" />
            
            <a href="#" class="block px-4 py-2  text-center  text-gray-7800  hover:text-info dark:hover:text-info dark:text-gray-500">
            <div class="inline-flex items-center ">
            <span class="material-icons-sharp text-lg mr-1">
                visibility
            </span>
                View all
            </div>
            </a>


    </div>
  </div>


<!-- <div class="containerNoti" v-if="$page.props.auth.user">


    <div class="notification deactive">
        
        <div class="icon">
            <span class="material-icons-sharp">
                volume_up
            </span>
        </div>
        <div class="content">
            <div class="info">
                <h3>Workshop</h3>
                <small class="text_muted">
                    08:00 AM - 12:00 PM
                </small>
            </div>
            <span class="material-icons-sharp">
                more_vert
            </span>
        </div>
    </div>

               
    <div class="notification add-reminder">
        <div>
            <span class="material-icons-sharp">
                add
            </span>
            <h3>Add Reminder</h3>
        </div>
    </div> 
    
</div>           -->
</template>