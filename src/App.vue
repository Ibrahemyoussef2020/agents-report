<template> 

    <div class="answers-report pt-1" >
        <!-----  Schema 1-------->

        <Schema v-for="index of 6" :index="index" />
        
    
  
    </div>    
</template>

<script setup>
import {HandleChartsVisibility , HandleValuesVisiblity} from '@/components';

import {useAgents} from '@/stores'
import Schema from '@/components/general/Schema.vue';
import { onMounted, ref } from 'vue';
const agentStore = useAgents();



onMounted(()=>{
   
})

</script> 

<style scoped>
.answers-report{
    /* padding: 1rem 1rem 1rem 2rem; */
    /* background-color: #00b9eb0d; */
    padding: 0;
}

.report-control button{
    display: flex;
    align-items: center;
    color: #002b41;
    font-size: 14px;
    gap: 4px;
    padding: 4px 8px;
    background-color: aliceblue;
    border: 1px solid #ccc;
    border-radius: 6px;
}
</style>