<template>
    <section :class="['schema' , `schema${index}`]">
        <button class="reload" >Schema</button>
        <div>
                 <HandleValuesVisiblity
                v-if="schemaData?.data?.data?.[0]?.report_data?.schema && Object.keys(schemaData?.data?.data?.[0]?.report_data?.schema)?.length"
                :data="schemaData?.data?.data?.[0]?.report_data?.schema"
                title="Overview"
            />
               <HandleChartsVisibility
                v-if="schemaData?.data?.data[1]?.report_data && Object.values(schemaData?.data?.data[1]?.report_data)?.length"
                :charts="Object.values(schemaData?.data?.data[1]?.report_data)"
            />
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {useAgents} from '../../stores';
import HandleValuesVisiblity from './HandleValuesVisiblity.vue';
import HandleChartsVisibility from './HandleChartsVisibility.vue';

const agentStore = useAgents();

const props = defineProps({
  index: {
    type: String,
    required: true
  },
});

const schemaData = ref({});


onMounted(()=>{
    
schemaData.value = agentStore.getStaticReport(props.index)
    

console.log(schemaData.value?.data?.data?.[0]?.report_data?.schema);
console.log(schemaData.value?.data?.data[1]?.report_data);

})


</script>


<style>
    .schema{
        position: relative;
        min-height: 450px;
        padding: .5rem 4px .5rem 1.5rem;
        margin: 1rem auto;
        border-radius: 1rem;
        background-color: #fff;
    }

    .schema .schema-title{
        /* width: fit-content; */
        padding: 1rem;
        margin-bottom: 1.5rem;
        border: 1px solid #eee;
        background-color:#f0ffff4a;
        text-align: center;
    }

    .reload{
        position: absolute;
        top: 20px;
        right: 10px;
        padding: 5px 13px;
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 5px;
        color: black;
         z-index: 2;


    }

       @media (min-width:567px){
        .schema{
            width: calc(100% - 4rem);
            min-height: 400px;
            padding: .5rem 2rem .5rem 2rem;
        }

         .reload{
            right: 60px;
         }
    }
</style>

<style>

</style>