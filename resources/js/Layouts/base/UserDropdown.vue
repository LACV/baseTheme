<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
    
// export default {
//   data() {
//     return {
//       isOpen: false,
//       dropdownItems: [
//         { label: 'Dashboard', href: '#' },
//         { label: 'Settings', href: '#' },
//       ]
//     };
//   },
//   methods: {
//     toggleDropdown() {
//       this.isOpen = !this.isOpen;
//     }
//   }
// }
const isOpen= ref(false);
const dropdownItems = [
  { label: 'Dashboard', href: '#' },
  { label: 'Settings', href: '#' },
];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
}

    const logout = () => {
        router.post(route('logout'));
    };

</script>
<template>
<div class="profile" v-if="$page.props.auth.user">
  <div class="info">
      <p>Hola, <b>Luis Cruz</b></p>
      <small class="text-muted">Admin</small>
  </div>
 
        <div @click="toggleDropdown" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="profile-photo">
        	<span class="hidden material-icons-sharp">menu</span>
          <img src="assets/images/profile-1.jpg">
        </div>
      
    <div v-if="isOpen" id="dropdownAvatar" 
                        class="dropdownAvatar
                              relative 
                              md:absolute
                              top-20
                              left-81 
                              right-12
                              bg-white 
                              divide-y 
                              divide-gray-200 
                              rounded-lg 
                              shadow 
                              w-44
                              dark:bg-gray-200 
                              dark:divide-gray-600
                              ">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-gray-400">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul class="py-2 text-sm text-gray-400 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li v-for="(item, index) in dropdownItems" :key="index">
              <a :href="item.href" class="block px-4 py-2 hover:bg-gray-200 hover:text-primary dark:hover:text-primary">{{ item.label }}</a>
            </li>
          </ul>
          <div class="py-2">
            <a @click="logout" href="#" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200 hover:text-primary dark:text-gray-600 dark:hover:text-primary">Sign out</a>
          </div>
      </div>
</div>

</template>  

<!--     
    <template>
     <div class="info1">
        <p>Hola, <b>Luis Cruz</b></p>
        <small class="text-muted">Admin</small>
    </div>
  <div class="dropdown">
    <button @click="toggleDropdown" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button">
     <img class="w-10 h-10 rounded-full" src="assets/images/profile-1.jpg" alt="user photo">
    </button>
  
    
    <div v-if="isOpen" id="dropdownAvatar" 
                      class="dropdownAvatar
                            relative 
                            md:absolute
                            top-18 
                            left-30 
                            right-7
                            bg-white 
                            divide-y 
                            divide-gray-200 
                            rounded-lg 
                            shadow 
                            w-44 
                            dark:bg-gray-200 
                            dark:divide-gray-600
                            ">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-gray-400">
          <div>Bonnie Green</div>
          <div class="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul class="py-2 text-sm text-gray-400 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
          <li v-for="(item, index) in dropdownItems" :key="index">
            <a :href="item.href" class="block px-4 py-2 hover:bg-gray-200 hover:text-primary dark:hover:text-primary">{{ item.label }}</a>
          </li>
        </ul>
        <div class="py-2">
          <a href="#" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200 hover:text-primary dark:text-gray-600 dark:hover:text-primary"><span class="material-icons-sharp px-1 ">logout</span>Sign out</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      dropdownItems: [
        { label: 'Dashboard', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'Earnings', href: '#' }
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script> -->


