<template>
  <div>
    <ul>
      <li v-for="{ id, name } in items" :key="id">
        <Checkbox :id="`task-${id}-done`" aria-label="Mark as done"></Checkbox>

        <span>
          {{ name }}
        </span>

        <span>
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
