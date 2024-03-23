<script setup>
  
const props = defineProps({
title: {
    type: String,
    default: '',
},
price: {
    type: String,
    default: '',
},
});
</script>

<template>
    <div class="ClasList rounded-lg bg-gray-200 mt-4 w-72 h-auto cursor-pointer  hover:border-primary border-2 border-transparent transition-colors duration-300">
        <ul>
            <li>
                <a>
                    <div class="flex ">
                        <div class="pl-3 ">
                            <img src="assets/images/profile-1.jpg" class="size-16 rounded-lg" alt="Mi imagen"/>
                        </div>
                        <div class="mr-2 ml-4 mt-2">
                            <span class="flex text-base text-gray-800 ">{{ title }}</span>
                            <span class="flex text-base text-primary pl-10 ">{{ price }}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>

</template> 
