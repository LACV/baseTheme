<script setup>
    import { Head } from '@inertiajs/vue3';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import TextInput from '@/Components/TextInput.vue';
    import Buttons from '@/Components/Buttons.vue';

    import { ref } from 'vue';

    const users = ref([
        {"user_id":1,"username":"cdinneen0","email":"dmiskimmon0@nih.gov","status":false,"img":"http://dummyimage.com/203x100.png/5fa2dd/ffffff"},
        {"user_id":2,"username":"rcluet1","email":"prabbitt1@dailymail.co.uk","status":false,"img":"http://dummyimage.com/108x100.png/dddddd/000000"},
        {"user_id":3,"username":"aborton2","email":"dvevers2@yahoo.com","status":true,"img":"http://dummyimage.com/242x100.png/ff4444/ffffff"},
        {"user_id":4,"username":"cdavydychev3","email":"ssturr3@stanford.edu","status":true,"img":"http://dummyimage.com/246x100.png/cc0000/ffffff"},
        {"user_id":5,"username":"hblackaller4","email":"sdonaghie4@google.nl","status":false,"img":"http://dummyimage.com/113x100.png/5fa2dd/ffffff"},
        {"user_id":6,"username":"cheinzel5","email":"cbroxholme5@stanford.edu","status":true,"img":"http://dummyimage.com/166x100.png/dddddd/000000"},
        {"user_id":7,"username":"cstainsby6","email":"fferroni6@mail.ru","status":false,"img":"http://dummyimage.com/130x100.png/cc0000/ffffff"},
        {"user_id":8,"username":"mivie7","email":"eknevit7@omniture.com","status":false,"img":"http://dummyimage.com/158x100.png/5fa2dd/ffffff"},
        {"user_id":9,"username":"ggregersen8","email":"phavoc8@wikipedia.org","status":false,"img":"http://dummyimage.com/145x100.png/5fa2dd/ffffff"},
        {"user_id":10,"username":"dchampness9","email":"ktumielli9@nationalgeographic.com","status":false,"img":"http://dummyimage.com/226x100.png/dddddd/000000"},
        
    ]);

</script>

<template>
    <Head title="Tables"/>

    
    <AppLayout>
        <div class="w-full px-0.5 py-0.5 my-5 mb-15 h-auto">
            <div class="flex items-center  justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 rounded-2xl pr-1">
                <div>
                </div>     
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <TextInput :class="'pl-9'" :placeholder="'Search'"/>
                </div>
            </div>
            
            <table class="w-full table-fixed  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-600">
                        <tr>
                            <th scope="col" class="w-3 p-2">
                                <div class="flex items-center">
                                    <input id="checkbox" type="checkbox" 
                                    class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-gray-200 dark:ring-offset-gray-200 dark:focus:ring-offset-gray-200 focus:ring-2 dark:bg-gray-300 dark:border-gray-400">
                                </div>
                            </th>
                            <th scope="col" class="w-2/2 px-6 py-3">
                                <div class="flex items-center">
                                    Name
                                    <a href="#">
                                        <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    Position
                                    <a href="#">
                                        <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    Status
                                    <a href="#">
                                        <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" 
                        class="bg-white text-gray-800 border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 hover:cursor-pointer"
                    >
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    
                                </div>
                            </td>
                            <td scope="row" 
                                class="flex flex-col md:flex-row truncate px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full md:mx-0 mx-auto"  :src=" user.img " alt="{{ user.username }}">
                                <div class="flex flex-col ps-3 truncate">
                                    <div class="text-base font-semibold uppercase truncate">{{ user.username }}</div>
                                    <div class="text-gray-500 truncate ">{{ user.email }}</div>
                                </div> 
                            </td>
                            <td class="px-6 py-4">
                                React Developer
                            </td>
                            <td class="px-6 py-4">
                                <div v-if=" user.status " class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                </div>
                                <div v-else class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-error me-2"></div> Ofline
                                </div>
                            </td>
                            <td class="px-1 py-0.5 truncate">
                                <div class="w-full flex flex-col md:flex-row pr-1 md:gap-1.5 gap-0">
                                    <Buttons color-button="i" link maxWidthButton>Edit</Buttons>
                                    <Buttons color-button="e" link maxWidthButton>Delete</Buttons>
                                </div>    
                            </td>
                    </tr>
                </tbody>
            </table>

                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" 
                            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray-200 border border-gray-300 rounded-s-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-200 dark:border-gray-300 dark:text-gray-00 dark:hover:bg-gray-400">Previous</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
        </div>


    </AppLayout>
    
</template>