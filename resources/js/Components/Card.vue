<template>
        <div class="
                    w-full 
                    max-w-full 
                    mt-6 
                    ml-10
                    mr-10
                    px-6 py-4 
                    bg-white 
                    dark:bg-gray-100 
                    content-around 
                    shadow-md 
                    overflow-hidden 
                    rounded-3xl">

                    <div class="flex items-center justify-center" >
                        <slot name="logo" />
                    </div>
            <slot />

        </div>
</template>
