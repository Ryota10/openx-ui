<template>
    <button class="openx-button" @click="clickHandler">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
import { hello } from '@openx-ui/shared';

const props = withDefaults(defineProps<{
    text?: string;
}>(), {
    text: 'World',
});

function clickHandler() {
    hello(props.text);
}
</script>

