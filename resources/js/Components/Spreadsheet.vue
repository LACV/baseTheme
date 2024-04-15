<script setup>
import { computed } from 'vue';


const props = defineProps({

    title: {
        type: String,
        default: '-',
    },
    text: {
        type: String,
        default: '-',
    },
    footer: {
        type: String,
        default: '-',
    },
    Icon: {
        type: String,
        default: '-',
    },
    colorContent: {
        type: String,
        default: 'primaru',
    },

});

const colorcont = computed (() => {
    return {
        'subcontent_pu':'subcontent subcontent_pu bg-purple',
    }[props.colorContent]

});
</script>
<template>
    <div :type="colorContent" class="contn" :class="colorcont">
        <div class="subcontent">
            <div class="layer">
                <h3 class="h3">{{ title }}</h3>
                <p class="p"> <slot /> </p>
                <span class="Span"><i class="material-icons-sharp">{{ Icon }}</i></span>
            </div>
            <h4 class="h4">{{ footer }}</h4>
        </div>

    </div>
</template>