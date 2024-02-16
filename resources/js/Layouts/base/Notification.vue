<script setup>
import { ref } from 'vue';

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
    <div class="reminders" v-if="$page.props.auth.user">
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
    <a href="#" class="flex px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-300">
      <div class="flex-shrink-0">
        <img class="image_ rounded-full w-11 h-11" src="assets/images/profile-1.jpg" alt="image_">
      </div>
      <div class="w-full ps-3">
          <div class="text-gray-600 text-sm mb-1.5 dark:text-gray-600">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
          <div class="text-xs text-gray-400 dark:text-gray-500">a few moments ago</div>
      </div>
    </a>
    <a href="#" class="contntext flex px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-300">
      <div class="flex-shrink-0">
        <img class="image_ rounded-full w-11 h-11" src="assets/images/profile-2.jpg" alt="image_">
      </div>
      <div class="contntext w-full ps-3">
          <div class="text-gray-600 text-sm mb-1.5 dark:text-gray-600">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
          <div class="text-xs text-gray-400 dark:text-gray-500">a few moments ago</div>
      </div>
    </a>
    <a href="#" class="contntext flex px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-300">
      <div class="flex-shrink-0">
        <img class="image_ rounded-full w-11 h-11" src="assets/images/profile-3.jpg" alt="image_">
      </div>
      <div class="w-full ps-3">
          <div class="text-gray-600 text-sm mb-1.5 dark:text-gray-600">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
          <div class="text-xs text-gray-400 dark:text-gray-500">a few moments ago</div>
      </div>
    </a>
    <a href="#" class="contntext flex px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-300">
      <div class="flex-shrink-0">
        <img class="image_ rounded-full w-11 h-11" src="assets/images/profile-4.jpg" alt="image_">
      </div>
      <div class="w-full ps-3">
          <div class="text-gray-600 text-sm mb-1.5 dark:text-gray-600">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
          <div class="text-xs text-gray-400 dark:text-gray-500">a few moments ago</div>
      </div>
    </a>
    <a href="#" class="block px-4 py-2  text-center  text-gray-7800  hover:text-info dark:hover:text-info dark:text-gray-500">
    <div class="inline-flex items-center ">
      <svg class="w-3 h-3 me-2" aria-hidden="true"  fill="currentColor" viewBox="0 0 20 14">
        <span class="material-icons-sharp text-lg mr-1">visibility</span>
      </svg>
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