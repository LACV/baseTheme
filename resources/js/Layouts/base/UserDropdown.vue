<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';

const isOpen= ref(false);

const toggleDropdown = (forceClose = false) => {
  if (forceClose) {
    isOpen.value = false;
  } else {
    isOpen.value = !isOpen.value;
  }
}

const logout = () => {
    router.post(route('logout'));
};

</script>
<template>
<div class="profile" v-if="$page.props.auth.user">
  <div class="info w-40">
      <p><b>{{ $page.props.auth.user.name }}</b></p>
      <small class="text-muted ">Admin</small>
  </div>

    <div @mouseover="toggleDropdown(true)" @click="toggleDropdown()" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="profile-photo">
        	<span class="hidden material-icons-sharp">menu</span>
          <img src="assets/images/profile-1.jpg">
    </div>

    <div v-if="isOpen"  id="dropdownAvatar"
                        class="
                              top-14
                              absolute  
                              bg-white
                              divide-y 
                              divide-primary
                              rounded-lg
                              shadow
                              w-44
                              dark:bg-gray-200
                              dark:divide-primary"
                              @mouseleave="toggleDropdown(false)">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-gray-400">
            <div>{{ $page.props.auth.user.name }}</div>
            <div class="font-medium truncate">{{ $page.props.auth.user.email }}</div>
          </div>
          <ul class="py-2 text-sm text-gray-400 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <Link :href="route('profile')" class="flex items-center px-4 py-2 ml-3 hover:bg-gray-200 hover:text-primary dark:hover:text-primary dark:text-gray-500">
                <span class="material-icons-sharp mr-2">person</span>
                <h3 class="inline-block">Profile</h3>
              </Link>
              <a class="flex items-center px-4 py-2 ml-3 hover:bg-gray-200 hover:text-primary dark:hover:text-primary dark:text-gray-500">
                <span class="material-icons-sharp mr-2">settings</span>
                <h3 class="inline-block">Settings</h3>
              </a>
            </li>
          </ul>
          <div class="py-2">
            <a @click="logout" class="cursor-pointer flex items-center px-4 py-2 ml-3 hover:bg-gray-200 hover:text-primary dark:hover:text-primary dark:text-gray-500">
                <span class="material-icons-sharp mr-2">logout</span>
                <h3 class="inline-block">Sign out</h3>
              </a>
          </div>
    </div>
</div>

</template>


