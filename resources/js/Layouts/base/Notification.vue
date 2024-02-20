<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import ContainerNotification from '@/Components/ContainerNotification.vue';

const isOpen= ref(false);

const toggleNotification = (forceClose = false) => {
  if (forceClose) {
    isOpen.value = false;
  } else {
    isOpen.value = !isOpen.value;
  }
}

const props = defineProps({
    Estado: {
        type: Boolean,
        default: false,
    },

});

const EstadoClass = computed(()=>{
    return{
        false:'',
        true:'Bubble',
    }[props.Estado];
})
</script>
<template>
    <div class="containerNoti" v-if="$page.props.auth.user" :class="EstadoClass">
        <div  @click="toggleNotification()" id="Notification" data-dropdown-toggle="Notification" class="Notification relative top-[-30px] cursor-pointer hover:text-primary dark:hover:text-primary dark:text-gray-500" >
            <span class="Bubble material-icons-sharp" v-if="Estado">
            chat_bubble
            </span>
            <span class="material-icons-sharp" v-else>
            mark_chat_unread
            </span>
           
        </div>
        <div v-if="isOpen"  id="Notification" 
                        class="contentNotif
                              relative 
                              md:absolute
                              top-[9%]
                              right-60
                              bg-white 
                              rounded-lg 
                              shadow 
                              w-full
                              h-[40%]
                              overflow-auto
                              z-10 
                              max-w-sm
                              dark:bg-gray-200"
                              @mouseleave="toggleNotification(false)">
          <div class="block px-4 py-2  text-center cursor-pointer text-primary dark:text-primary">
          Notifications
          </div>
             <ContainerNotification EstadoNofication="true" />
             <ContainerNotification EstadoNofication="true" />
             <ContainerNotification EstadoNofication="true" />
             <ContainerNotification EstadoNofication="true" />
            
             
            
            <a href="#" class="block px-4 py-2  text-center  text-gray-600  hover:text-primary dark:hover:text-primary dark:text-gray-500">
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