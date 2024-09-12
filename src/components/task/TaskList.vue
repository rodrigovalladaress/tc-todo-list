<template>
  <div>
    <ul class="flex-1 bg-pink-200 rounded-sm">
      <li v-for="{ id, name } in items" :key="id" class="flex items-center gap-3 py-2 px-3">
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

          <Button>Delete</Button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

type Task = { id: number; name: string; isChecked?: boolean }

withDefaults(
  defineProps<{
    items: Task[]
  }>(),
  {
    items: () => []
  }
)
</script>

<style></style>
