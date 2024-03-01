<template>
        <div class="
                    w-full 
                    max-w-full
                    bg-white 
                    dark:bg-gray-100  
                    mt-6 
                    mr-10
                    px-6 
                    py-4 
                    mb-20
                    content-around 
                    shadow-md 
                    overflow-hidden 
                    rounded-3xl
                    ">
                    <div class="flex items-center justify-center" v-if="$slots.logo" >
                        <div class="w-60 h-60">
                            <slot name="logo" />
                        </div>
                    </div>
            <slot />

        </div>
</template>
