<template>
  <div>
    <Checkbox
      :id="`task-${id}-done`"
      class="size-7 bg-pink-100"
      aria-label="Mark as done"
      v-model:checked="ownIsChecked"
    ></Checkbox>

    <span v-if="!isEditMode" class="flex-grow text-lg">
      {{ name }}
    </span>

    <Input v-else class="flex-grow text-lg" v-model="ownName" :aria-label="`Edit ${name}`"></Input>

    <span class="flex gap-2">
      <Button v-if="!isEditMode" @click="onEditClick">Edit</Button>
      <Button v-else @click="onSaveClick">Save</Button>

      <Button @click="onRemoveClick">Remove</Button>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import type { Task } from '@/stores/task'

const props = defineProps<{ id: number; name: string; isChecked: boolean }>()

const emit = defineEmits<{
  (e: 'remove', id: Task['id']): void
  (e: 'edit', id: Task['id'], task: Partial<Omit<Task, 'id'>>): void
}>()

const isEditMode = ref(false)
const ownName = ref(props.name)
const ownIsChecked = ref(props.isChecked)

watch(ownIsChecked, () => {
  onIsCheckedChange()
})

function onRemoveClick() {
  emit('remove', props.id)
}

function onEditClick() {
  isEditMode.value = true
}

function onSaveClick() {
  emit('edit', props.id, { name: ownName.value })
  isEditMode.value = false
}

function onIsCheckedChange() {
  emit('edit', props.id, { isChecked: ownIsChecked.value })
}
</script>

<style></style>
