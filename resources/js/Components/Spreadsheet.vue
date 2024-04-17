<script setup>
import { computed } from 'vue';


const Props = defineProps({

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
    colorcontent: {
        type: String,
        default: 'pr'
    },

});

const colorcontentClass = computed(() => {
    return {
        'pr':'contn contn_pr',
        'se':'contn contn_se',
        'su':'contn contn_su',
        'i':'contn contn_i',
        'w':'contn contn_w',
        'e':'contn contn_e',
        'g':'contn contn_g',
        'p':'contn contn_p',
    }[Props.colorcontent];
});
</script>
<template>
        <div  
        class="contn" 
        :class=" colorcontentClass">
            <div class="subcontent ">
                <div class="layer">
                    <h3 class="h3">{{ title }}</h3>
                    <p class="p"> <slot /> </p>
                    <span class="Span"><i class="material-icons-sharp">{{ Icon }}</i></span>
                </div>
                <h4 class="h4">{{ footer }}</h4>
            </div>
        </div>
</template>