<template>
  <TaskNew @add="handleAdd"></TaskNew>
</template>

<script lang="ts" setup>
import { useTaskStore, type Task } from '@/stores/task'
import TaskNew from './TaskNew.vue'

const store = useTaskStore()

function handleAdd(task: Omit<Task, 'id' | 'isChecked'>) {
  store.add([{ ...task, isChecked: false }])
}
</script>

<style></style>
