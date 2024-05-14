<script setup>
import { ref, computed } from 'vue';
import ContainerNotification from '@/Components/ContainerNotification.vue';

const iOpen = ref(false);

const toggleNotification = (forceClose = false) => {
  iOpen.value = forceClose ? false : !iOpen.value;
}

const props = defineProps({
  Estado: {
    type: Boolean,
    default: false,
  },
});

const estadoClass = computed(()=>{
    return{
        false:'',
        true:'Eticon',
    }[props.Estado];
});


const datos = [
  { id: 1, type: true },    
  { id: 2, type: false },
  
 
 
];

</script>

<template>
  <div class="containerNoti" v-if="$page.props.auth.user" :class="estadoClass">
    <div @click="toggleNotification()" id="Notification" data-dropdown-toggle="Notification" class="cursor-pointer hover:text-primary dark:hover:text-primary dark:text-gray-500">
      <span class="material-icons-sharp" v-if="Estado">chat_bubble</span>
      <span class="material-icons-sharp" v-else>mark_chat_unread</span>
    </div>
    <div v-if="iOpen" id="Notification" class="top-10 absolute bg-white rounded-lg shadow max-w-screen-sm dark:bg-gray-200" style="max-height: 300px; overflow-y: auto;" @mouseleave="toggleNotification(false)">
      <div class="block px-4 py-2 text-center cursor-pointer text-primary dark:text-primary">Notifications</div>
      <div>
        <ContainerNotification v-for="item in datos" :key="item.id" :EstadoNofication="item.type" />
      </div>
      <a href="#" class="block px-4 py-2 text-center text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-500">
        <div class="inline-flex items-center">
          <span class="material-icons-sharp text-lg mr-1">visibility</span>
          View all
        </div>
      </a>
    </div>
  </div>
</template>



