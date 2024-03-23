<script setup>
  import Buttons from '@/Components/Buttons.vue';

const props = defineProps({
title: {
    type: String,
    default: '',
},
});
</script>

<template>
<div class="currentlist rounded-lg  bg-gray-200 mt-4 ml-20  w-fit h-fit pb-4  border-gray-300 border-2">
     <div class="Notil pt-4  pr-4 grid grid-cols-2 gap-auto">
        <div class="flex col-span-1 flex-wra">
        <span class="title flex text-3xl  text-gray-800 pt-4 pl-4 pt-6">{{ title }}</span>
        </div>
        <div class="boton mt-5 ml-36 col-span-1 flex-wra">
        <Buttons colorButton="e" >
             Clear All
        </Buttons>
        </div>
     </div>

     <div class="numlist pt-10 mr-6" style="max-height: 300px; overflow-y:auto; ">
        <div class="contect1 flex pt-7 grid grid-cols-2 gap-auto">
    <div class="flex items-center col-span-1 flex flex-wrap">
        <div class="pl-4">
            <img src="assets/images/profile-1.jpg" class="img_prd size-10 rounded-lg" alt="Mi imagen"/>
        </div>
        <span class="Nombr flex text-gray-800 pt-1.5 ml-1">Arroz Premium 1000 g</span>
    </div> 

    <div class="contect2 flex col-span-1 flex-wrap justify-end  ">
        <div class="flex pl-6">
            <div class="caj rounded-lg bg-gray-100 w-10 h-10 cursor-pointer">
                <span class="ico material-icons-sharp text-2xl pt-1 pl-2">add</span>
            </div>

            <span class="text-lg mt-[0.5rem] px-4">5</span>

            <div class="caj rounded-lg bg-gray-100 w-10 h-10 cursor-pointer">
                <span class="ico material-icons-sharp text-2xl pt-1 pl-2 ">remove</span>
            </div>
        </div>
        <div class="pl-5">
            <span class="flex text-xl text-gray-800 pt-1.5">$60.000</span>
        </div>
    </div>
</div>
<div class="contect1 flex pt-7 grid grid-cols-2 gap-auto">
    <div class="flex items-center col-span-1 flex flex-wrap">
        <div class="pl-4">
            <img src="assets/images/profile-1.jpg" class="img_prd size-10 rounded-lg" alt="Mi imagen"/>
        </div>
        <span class="Nombr flex text-gray-800 pt-1.5 ml-1">Arroz Blanco Ideal 454 g</span>
    </div> 

    <div class="contect2 flex col-span-1 flex-wrap justify-end  ">
        <div class=" flex pl-6">
            <div class="caj rounded-lg bg-gray-100 w-10 h-10 cursor-pointer">
                <span class="ico material-icons-sharp text-2xl pt-1 pl-2">add</span>
            </div>

            <span class="text-lg mt-[0.5rem] px-4">5</span>

            <div class="caj rounded-lg bg-gray-100 w-10 h-10 cursor-pointer">
                <span class="ico material-icons-sharp text-2xl pt-1 pl-2 ">remove</span>
            </div>
        </div>
        <div class=" pl-5">
            <span class="flex text-xl text-gray-800 pt-1.5">$60.000</span>
        </div>
    </div>
</div>
    </div>

    <div class="subtal grid grid-cols-2 gap-4 text-lg text-gray-800 pl-4 pr-4 ml-4 mr-5 mt-8 bg-info rounded-lg w-auto">
    <div class="col-span-1 grid grid-rows-4 gap-auto">
        <span class="row-start-1">Subtotal</span>
        <span class="row-start-2">Discounts</span>
        <span class="row-start-3">Tax(12%)</span>
        <span class="row-start-4 text-xl">Total</span>
    </div>

    <div class="col-span-1 grid grid-rows-4 gap-auto flex justify-end">
        <span class="row-start-1">$60.000</span>
        <span class="row-start-2">-$8.000</span>
        <span class="row-start-3 pl-3">$11.200</span>
        <span class="row-start-4  text-xl pt-1">$52.960</span>
    </div>
</div>





     <div class=" mt-8 pl-6 pr-6">
    <Buttons colorButton="s" maxWidthButton>
        Culminate
    </Buttons>
    </div>
</div>
<br>
</template> 