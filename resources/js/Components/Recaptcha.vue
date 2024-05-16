<template>
  <div>
    <div ref="recaptchaWidget"></div>
    <input type="hidden" v-model="token" name="recaptcha_token">
  </div>
</template>

<script setup>
import { ref } from 'vue';

const token = ref('');

const loadRecaptcha = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LdB6t4pAAAAAEoGShnShwYgZ9iIlgFLm3MH9nwF';
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const executeRecaptcha = () => {
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LdB6t4pAAAAAEoGShnShwYgZ9iIlgFLm3MH9nwF', { action: 'login' }).then((responseToken) => {
        // Update token value
        token.value = responseToken;
        resolve();
      }).catch(reject);
    });
  });
};

loadRecaptcha()
  .then(() => executeRecaptcha())
  .catch((error) => {
    console.error('Failed to load reCAPTCHA:', error);
  });
</script>

<style scoped>
/* Add any custom styles for the reCAPTCHA widget here */
</style>
