<template>
  <TaskClearCompleted @clear="handleClear"></TaskClearCompleted>
</template>

<script lang="ts" setup>
import { useTaskStore } from '@/stores/task'
import TaskClearCompleted from './TaskClearCompleted.vue'

const store = useTaskStore()

function handleClear() {
  store.clearChecked()
}
</script>

<style></style>
