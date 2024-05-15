<script setup>
    import { defineProps } from 'vue';
    import { Head,usePage } from '@inertiajs/vue3';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import TextInput from '@/Components/TextInput.vue';
    import Buttons from '@/Components/Buttons.vue';
    import Pagination from '@/Components/Pagination.vue';

    const props = defineProps({
        employees: { type: Object},
    });
    //console.log('Employees:', props.employees);
</script>

<template>
    <Head title="Tables"/>
 
    <AppLayout>
        <div class="w-full px-0.5 py-0.5 my-5 mb-15 h-auto">
            <div class="flex items-center mt-4  justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 rounded-2xl pr-1">
                <div class="">
                   
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
                                    Department
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
                    <tr
                        class="bg-white text-gray-800 border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 hover:cursor-pointer"
                        v-for="e in employees.data" :key="e.id"
                    >
                            <td class="w-4 p-4">
                                <div class="flex items-center">    
                                </div>
                            </td>
                            <td scope="row" 
                                class="flex flex-col md:flex-row truncate px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full md:mx-0 mx-auto" alt="">
                                <div class="flex flex-col ps-3 truncate">
                                    <div class="text-base font-semibold uppercase truncate">
                                        {{ e.name }}
                                    </div>
                                    <div class="text-gray-500 truncate ">
                                        {{ e.email }}
                                    </div>
                                    <div class="text-gray-500 truncate ">
                                        Phone: {{ e.phone }}
                                    </div>
                                </div> 
                            </td>
                            <td class="px-6 py-4">
                                {{ e.departments }}
                            </td>
                            <td class="px-6 py-4">
                                <div  class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                </div>
                                <div  class="flex items-center">
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
        </div>
        <div class="flex justify-center">
            <Pagination :pagination="employees" />
        </div>

    </AppLayout>
    
</template>