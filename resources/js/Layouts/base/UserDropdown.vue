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

    <div v-if="isOpen"  id="dropdownAvatar" class="top-14 absolute bg-white divide-y divide-primary rounded-lg shadow w-44 dark:bg-gray-200 dark:divide-primary" @mouseleave="toggleDropdown(false)">
          
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-gray-400">
            <div>{{ $page.props.auth.user.name }}</div>
            <div class="font-medium truncate">{{ $page.props.auth.user.email }}</div>
          </div>

          <ul class="py-2 text-sm text-gray-400 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <Link :href="route('profile')" class="flex items-center px-4 py-2 ml-3 hover:bg-gray-200 hover:text-primary dark:hover:text-primary dark:text-gray-500">
                <svg class="mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>
                <h3 class="inline-block">Profile</h3>
              </Link>

              <a class="flex items-center px-4 py-2 ml-3 hover:bg-gray-200 hover:text-primary dark:hover:text-primary dark:text-gray-500">
                <svg class="mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd"/>
                </svg>
                <h3 class="inline-block">Settings</h3>
              </a>
            </li>
          </ul>

          <div class="py-2">
            <a @click="logout" class="cursor-pointer flex items-center px-4 py-2 ml-3 hover:bg-gray-200 hover:text-primary dark:hover:text-primary dark:text-gray-500">
              <svg class="mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
              </svg>
              <h3 class="inline-block">Sign out</h3>
            </a>
          </div>
    </div>
</div>

</template>


