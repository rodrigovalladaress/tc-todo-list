<template>
  <div class="flex-1 rounded-sm flex items-center gap-3 py-2 px-3">
    <span class="size-7">
      <Plus :size="24" />
    </span>

    <Input id="task-new" aria-label="New task" class="text-lg" v-model="name"></Input>

    <Button type="submit" @click="handleAdd">Add</Button>
  </div>
</template>

<script lang="ts" setup>
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-vue-next'
import type { Task } from '@/stores/task'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'add', task: Omit<Task, 'id' | 'isChecked'>): void
}>()

const name = ref('')

function handleAdd() {
  emit('add', { name: name.value })
  name.value = ''
}
</script>

<style></style>
