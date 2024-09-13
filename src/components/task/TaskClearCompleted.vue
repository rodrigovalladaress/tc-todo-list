<template>
  <div>
    <Button variant="destructive" @click="onButtonClick">Clear completed</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'

const emit = defineEmits<{
  (e: 'clear'): void
}>()

function onButtonClick() {
  emit('clear')
}
</script>

<style></style>
