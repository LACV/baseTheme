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
  { id: 1, type: false },    
  { id: 2, type: true },
  
 
 
];

</script>

<template>
  <div class="containerNoti" v-if="$page.props.auth.user" :class="estadoClass">
    <div @click="toggleNotification()" id="Notification" data-dropdown-toggle="Notification" class="cursor-pointer hover:text-primary dark:hover:text-primary dark:text-gray-500">
      <svg class="" v-if="Estado" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM6 6a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 6 6Zm-2 4H3a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 18 6Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
      </svg>

      <svg class="" v-else aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
      </svg>

    </div>
    <div v-if="iOpen" id="Notification" class="top-10 absolute bg-white rounded-lg shadow max-w-screen-sm dark:bg-gray-200" style="max-height: 300px; overflow-y: auto;" @mouseleave="toggleNotification(false)">
      <div class="block px-4 py-2 text-center cursor-pointer text-primary dark:text-primary">Notifications</div>
      <div>
        <ContainerNotification v-for="item in datos" :key="item.id" :EstadoNofication="item.type" />
      </div>
      <a href="#" class="block px-4 py-2 text-center text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-500">
        <div class="inline-flex items-center">
          <svg class="text-lg mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="m8 7 4 4 4-4m-8 6 4 4 4-4"/>
          </svg>


          View all
        </div>
      </a>
    </div>
  </div>
</template>



