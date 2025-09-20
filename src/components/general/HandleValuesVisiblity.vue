<template>
    <section v-bind="$attrs" class="part">
        <h3 class="title">{{ title }}</h3>
        <div class="content">
            <div v-if="typeof data === 'string' || typeof data === 'number'" class="simple-data">
                {{ data }}
            </div>
            <div v-else class="data-list">
                <div v-for="(info, index) in data" :key="index" class="data-item">
                    <h4 v-if="isNaN(+index)" class="item-title">
                        {{ index.replaceAll('_', ' ') }}
                        <button class="toggle-btn" @click="toggleCollapse(index)">
                            {{ collapsed[index] ? '+' : '-' }}
                        </button>
                    </h4>
                    <div v-show="!collapsed[index]" class="item-content">
                        <div v-if="typeof info === 'string' || typeof info === 'number'">
                            {{ info }}
                        </div>
                        <div v-else>
                            <div v-for="(value, key) in info" :key="key" class="nested-item">
                                <strong v-if="isNaN(+key)">{{ key.replaceAll('_', ' ') }}:</strong>
                                <span v-if="typeof value === 'string' || typeof value === 'number'">{{ value }}</span>
                                <div v-else-if="Array.isArray(value)" class="array-content">
                                    <div v-for="(item, subIndex) in value" :key="subIndex" class="array-item">
                                        <span v-if="typeof item === 'string' || typeof item === 'number'">{{ item }}</span>
                                        <div v-else>
                                            <div v-for="(subValue, subKey) in item" :key="subKey">
                                                <strong v-if="isNaN(+subKey)">{{ subKey.replaceAll('_', ' ') }}:</strong>
                                                {{ subValue }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps({
    data: {
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const collapsed = ref({});

const toggleCollapse = (index) => {
    collapsed.value[index] = !collapsed.value[index];
};
</script>

<style scoped>
.part {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: Arial, sans-serif;
}

.title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

.simple-data {
    font-size: 16px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 4px;
}

.data-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.data-item {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 15px;
    background: #fafafa;
}

.item-title {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #007bff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
}

.toggle-btn {
    background: #007bff;
    color: white;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-btn:hover {
    background: #0056b3;
}

.item-content {
    font-size: 14px;
    line-height: 1.5;
}

.nested-item {
    margin-bottom: 10px;
}

.nested-item strong {
    color: #555;
    margin-right: 8px;
}

.array-content {
    margin-left: 20px;
    margin-top: 5px;
}

.array-item {
    padding: 8px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    margin-bottom: 8px;
}

.array-item:last-child {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .part {
        padding: 15px;
    }
    
    .title {
        font-size: 20px;
    }
    
    .item-title {
        font-size: 16px;
    }
}
</style>