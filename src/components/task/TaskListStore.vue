<template>
  <div></div>
  <TaskList :items="items" @remove="handleRemove"></TaskList>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useTaskStore, type Task } from '@/stores/task'
import TaskList from './TaskList.vue'

const store = useTaskStore()

const { items } = storeToRefs(store)

function handleRemove(id: Task['id']) {
  store.remove(id)
}
</script>

<style></style>
