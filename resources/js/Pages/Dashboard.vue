<script setup>

import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import PopUp from '@/Components/PopUp.vue'

import * as usePopUp from '@/usePopUp.js';

</script>

<template>
    <AppLayout title="Dashboard">


<button type="button" 
  class="
      text-blue-700 
      hover:text-white 
      border 
      border-blue-700 
      hover:bg-blue-800 
      focus:ring-4 
      focus:outline-none 
      focus:ring-blue-300 
      font-medium 
      rounded-lg 
      text-sm 
      px-5 
      py-2.5 
      text-center 
      me-2 
      mb-2 
      dark:border-blue-500 
      dark:text-blue-500 
      dark:hover:text-white 
      dark:hover:bg-blue-500 
      dark:focus:ring-blue-800
      "
      >
      Default
  </button>
<button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Dark</button>
<button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Green</button>
<button @click="usePopUp.toggleShowClose" type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Red</button>
<button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Yellow</button>
<button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Purple</button>


  <PopUp>
    yuliana

  </PopUp>   

<!--
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-100 dark:border-secundary">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-bold text-primary">Sign in to our platform</h5>
        <div>
            <label for="email" class="block mb-2 text-sm text-gray-900 font-bold dark:text-white">Your email</label>
            <input type="email" name="email" id="email" 
            class="
                bg-gray-50 
                border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                focus:ring-primary 
                focus:border-primary 
                block 
                w-full 
                p-2.5 
                dark:text-white
                " 
                placeholder="name@company.com" 
                required
                >
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm text-gray-900 font-bold dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" 
            class="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            ext-sm 
            rounded-lg 
            focus:ring-primary 
            focus:border-primary 
            block w-full p-2.5 

            dark:text-white
            " required>
        </div>
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" 
                    class="w-4 h-4 
                    border 
                    border-gray-300 
                    rounded bg-gray-50 
                    focus:ring-3
                    focus:ring-blue-300 
                    dark:bg-gray-700 
                    dark:border-gray-600 
                    dark:focus:ring-blue-600 
                    dark:ring-offset-gray-800 
                    dark:focus:ring-offset-gray-800
                    " 
                    required>
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
            </div>
            <a href="#" class="ms-auto text-sm font-bold text-primary hover:underline ">Lost Password?</a>
        </div>
        <button type="submit" 
        class="
              w-full 
              text-blue-700 
              hover:text-white 
              border 
              border-blue-700 
              hover:bg-blue-800 
              focus:ring-4 
              focus:outline-none 
              focus:ring-blue-300 
              font-medium 
              rounded-lg 
              text-sm 
              px-5 
              py-2.5 
              text-center 
              me-2 
              mb-2 
              dark:border-blue-500 
              dark:text-blue-500 
              dark:hover:text-white 
              dark:hover:bg-blue-500 
              dark:focus:ring-blue-800
              ">Login to your account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>
-->
    
</AppLayout>
</template>
