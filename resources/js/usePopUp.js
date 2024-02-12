import { ref, onMounted } from 'vue';

    const isShowModal = ref(false);

    const toggleShowClose = () => {
        isShowModal.value = !isShowModal.value;
      }
    
export {
    isShowModal,
    toggleShowClose,
  };