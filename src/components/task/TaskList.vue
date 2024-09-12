<template>
  <div>
    <ul class="flex-1 bg-pink-200 rounded-sm">
      <TaskListItem
        v-for="{ id, name } in items"
        :key="id"
        class="flex items-center gap-3 py-2 px-3"
        :data-testid="`list-item-${id}`"
        :id="id"
        :name="name"
        @remove="handleRemove"
        @edit="handleEdit"
      ></TaskListItem>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '@/stores/task'
import TaskListItem from './TaskListItem.vue'

withDefaults(
  defineProps<{
    items: Task[]
  }>(),
  {
    items: () => []
  }
)

const emit = defineEmits<{
  (e: 'remove', id: Task['id']): void
  (e: 'edit', id: Task['id'], task: Partial<Omit<Task, 'id'>>): void
}>()

function handleRemove(id: Task['id']) {
  emit('remove', id)
}

function handleEdit(id: Task['id'], task: Partial<Omit<Task, 'id'>>) {
  emit('edit', id, task)
}
</script>

<style></style>
