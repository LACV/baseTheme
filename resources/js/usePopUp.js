    import { ref, onMounted } from 'vue';

    const isShowModal = ref(false);

    const toggleShowClose = () => {
        console.log('i: '+isShowModal.value);
        isShowModal.value = !isShowModal.value;
        console.log('f: '+isShowModal.value);
      }
    
export {
    isShowModal,
    toggleShowClose,
  };