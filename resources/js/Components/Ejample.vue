<template>
    <div>
      <button @click="toggleDropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown toggle
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
    
      <!-- Dropdown menu -->
    <div v-if="isOpen" id="dropdownToggle" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
          <li v-for="(item, index) in dropdownItems" :key="index">
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label class="relative inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" v-model="item.checked" class="sr-only peer">
                <div :class="['w-9 h-5 bg-gray-200', {'bg-blue-600': item.checked} , 'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600' ] "></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.label }}</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        dropdownItems: [
          { label: 'Enable notifications', checked: false },
          { label: 'Enable 2FA authentication', checked: false },
          { label: 'Subscribe to newsletter', checked: false }
        ]
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script> 

  
  