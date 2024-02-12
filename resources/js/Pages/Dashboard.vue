<script setup>

import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import PopUp from '@/Components/PopUp.vue'
import ButtonInfo from '@/Components/ButtonInfo.vue'
import ButtonGray from '@/Components/ButtonGray.vue'
import ButtonSuccess from '@/Components/ButtonSuccess.vue'
import ButtonError from '@/Components/ButtonError.vue'
import ButtonWarning from '@/Components/ButtonWarning.vue'
import ButtonPurple from '@/Components/ButtonPurple.vue'

import * as usePopUp from '@/usePopUp.js';

</script>

<template>
    <AppLayout title="Dashboard">
  <ButtonInfo>
    Button Info
  </ButtonInfo>  
  <ButtonGray @click="usePopUp.toggleShowClose">
    Button Gray
  </ButtonGray> 
  <ButtonSuccess>
    Button Success 
  </ButtonSuccess>
  <ButtonError>
    Button Error 
  </ButtonError>
  <ButtonWarning>
    Button Warning 
  </ButtonWarning>
  <ButtonPurple>
    Button Purple 
  </ButtonPurple>
  

  <PopUp>
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
