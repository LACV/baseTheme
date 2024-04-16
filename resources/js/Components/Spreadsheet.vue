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
        'cont-pri':'contn cont-pr',
        'cont-s':'contn sub_cont-s ',
        'cont-su':'contn sub_cont-su ',
        'cont-i':'contn sub_cont-i ',
        'cont-w':'contn sub_cont-w ',
        'cont-e':'contn sub_cont-e ',
        'cont-g':'contn sub_cont-g ',
        'cont-p':'contn sub_cont-p ',
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