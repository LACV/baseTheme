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
    colcont: {
        type: String,
        default: 'cont-pr',
    },
});

const colorscont = computed(()=>{
    return{
        'cont-pr':'subcontent sub_cont-pr bg-primary',
        'cont-s':'subcontent sub_cont-s bg-secondary',
        'cont-su':'subcontent sub_cont-su bg-success',
        'cont-i':'subcontent sub_cont-i bg-info',
        'cont-w':'subcontent sub_cont-w bg-warning',
        'cont-e':'subcontent sub_cont-e bg-error',
        'cont-g':'subcontent sub_cont-g bg-gray',
        'cont-p':'subcontent sub_cont-p bg-purple',
    }[props.colcont];
})
</script>
<template>
    <div :type="colcont" class="contn" :class="colorscont">
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