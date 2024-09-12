<template>
  <div></div>
  <TaskList :items="items" @remove="handleRemove" @edit="handleEdit"></TaskList>
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

function handleEdit(id: Task['id'], task: Partial<Omit<Task, 'id'>>) {
  store.edit(id, task)
}
</script>

<style></style>
