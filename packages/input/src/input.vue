
<template>
    <input class="openx-input" type="text" :value="modelValue" @input="inputHandler" />
</template>
<script setup lang="ts">
import { hello } from '@openx-ui/shared';

withDefaults(defineProps<{
    modelValue?: string;
}>(), {
    modelValue: '',
});

const emit = defineEmits<{
    (event: 'update:modelValue', val: string): void;
}>();

function inputHandler(e: any) {
    const value: string = e.target.value;
    emit('update:modelValue', value);
    hello(value);
}

</script>