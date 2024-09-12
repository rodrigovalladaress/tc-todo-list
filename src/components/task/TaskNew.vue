<template>
  <div class="flex-1 rounded-sm flex items-center gap-3 py-2 px-3">
    <span class="size-7">
      <Plus :size="24" />
    </span>

    <Input id="task-new" aria-label="New task" class="text-lg"></Input>

    <Button type="submit">Add</Button>
  </div>
</template>

<script lang="ts" setup>
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-vue-next'
</script>

<style></style>
