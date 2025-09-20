<template>
    <section v-bind="$attrs" class="part">

		<h3 class="schema-title fs-4 fw-bold mb-4">{{ title }}</h3>
        <div class="none-list">
            <div>
                
                <p v-if="typeof(data) === 'string' || typeof(data) === 'number'">{{data}}</p>
                    
                <div v-else class="none-list">
                    <div v-for="(info, index) in data" :key="index">
                        <h4 class="fs-6 fw-bold cap" v-if="isNaN(+index) && Object.keys(info)?.length" >{{ index.replaceAll('_' , " ") }}:</h4>
                        
                        <p v-if="typeof(info) === 'string' || typeof(info) === 'number'">{{ info  }}</p>

                        <div v-else v-for="(value, key) in info" :key="key" >
                            <p v-if="key && value && isNaN(+key)">{{ key }}:</p>

                            <ul v-if="value">
                                <li v-if="typeof(value) === 'string' || typeof(value) === 'number'">
                                    <p  :class="`${!value ? 'remove-parent' : ''}`" >{{ value }}</p>
                                </li>

                                <li v-else v-for="(item , index) in value" :key="index" v-if="item">
                                    <p v-if="typeof(item) === 'string' || typeof(item) === 'number'">{{ item }}</p>
                                     
                                    <ul v-else v-if="item">
                                        <li v-for="(valueValue, valueKey) in item" >
                                            <h5 class="fs-6 fw-bold"  v-if="isNaN(+valueKey)">{{ valueKey }}</h5>
                                            <p  :class="`${!valueValue ? 'remove-parent' : ''}`"  v-if="typeof(valueValue) === 'string' || typeof(valueValue) === 'number'">{{ valueValue }}</p>

                                            <ul v-else v-if="valueValue">
                                                <li v-for="(valueItem , index) in valueValue">
                                                    <p  :class="`${!valueValue ? 'remove-parent' : ''}`" v-if="typeof(valueItem) === 'string' || typeof(valueItem) === 'number'">{{ valueItem }}</p>

                                                    <ul v-else v-if="valueItem">
                                                        <li v-for="(valueItemValue , valueItemKey) in valueItem">
                                                            <h6 class="fs-7 fw-bold"  v-if="isNaN(+valueItemKey)">{{ valueItemKey }}</h6>
                                                            <p  :class="`${!valueItemValue ? 'remove-parent' : ''}`" >{{ valueItemValue }}</p>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
</template>

<style scoped>
    .fs-7{
        font-size: 0.888rem;
    }

.part h4 , .part h3{
    margin-top: 1.5rem;
}    
.part p{
    /* margin-bottom: 5px; */
}

li p{
    margin-bottom: 4px;
}

li:has(.remove-parent){
    display: none;
}

.cap{
    text-transform: capitalize;
}
</style>

<script setup>
import { onMounted } from 'vue';

    const props = defineProps({
        data:{
            required:true
        },
        title:{
            type:String,
            required:true
        }
    })

    console.log(props.data);
    

    onMounted(()=>
    {
      console.log('ffffffffs')
    }
      
    )
    
</script>

<style>
/* خطوط وأساسيات */
.part {
  padding: 2rem .5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  line-height: 1.6;
}

/* العنوان الرئيسي */
.schema-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #34495e;
  border-left: 5px solid #3498db;
  padding-left: 0.75rem;
  margin-bottom: 2rem;
}

/* العناوين الداخلية */
.part h4,
.part h5,
.part h6 {
  color: #2980b9;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

/* النصوص */
.part p {
  margin: 0.25rem 0;
  font-size: 14px;
  color: #555;
}

/* التدرج في القوائم */
.part ul {
  list-style-type: none;
  padding-left: 1rem;
  border-left: 2px solid #eee;
  margin-bottom: 1rem;
}

.part li {
  margin-bottom: 0.5rem;
}

/* إخفاء العناصر الفارغة */
li:has(.remove-parent) {
  display: none;
}

/* تحكم في النصوص المفقودة */
.remove-parent {
  display: none;
}

/* العنصر داخل li */
li p {
  margin-bottom: 4px;
}

/* حجم مخصص */
.fs-7 {
  font-size: 0.85rem;
}
</style>

<style>
   @media (min-width:567px){
        .part{
            padding: 2rem;
        }

        .schema-title {
            font-size: 1.75rem;
        }

        .part p {
            font-size: 1rem;
            color: #555;
        }
    }
</style>
