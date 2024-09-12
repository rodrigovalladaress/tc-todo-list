<template>
  <div>
    <ul class="flex-1 bg-pink-200 rounded-sm">
      <li
        v-for="{ id, name } in items"
        :key="id"
        class="flex items-center gap-3 py-2 px-3"
        :data-testid="`list-item-${id}`"
      >
        <Checkbox
          :id="`task-${id}-done`"
          class="size-7 bg-pink-100"
          aria-label="Mark as done"
        ></Checkbox>

        <span class="flex-grow text-lg">
          {{ name }}
        </span>

        <span class="flex gap-2">
          <Button>Edit</Button>

          <Button @click="onRemoveClick(id)">Remove</Button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import type { Task } from '@/stores/task'

withDefaults(
  defineProps<{
    items: Task[]
  }>(),
  {
    items: () => []
  }
)

const emit = defineEmits<{ (e: 'remove', id: Task['id']): void }>()

function onRemoveClick(id: Task['id']) {
  emit('remove', id)
}
</script>

<style></style>
