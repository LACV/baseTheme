import { ref } from 'vue';

  const isOpenCloseMenu = ref(null);

  const toggleOpenCloseMenu = () => {
    isOpenCloseMenu.value = !isOpenCloseMenu.value;
  }

  export {
      isOpenCloseMenu,
      toggleOpenCloseMenu
    };
  