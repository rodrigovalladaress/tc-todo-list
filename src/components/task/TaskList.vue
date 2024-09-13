<template>
  <div>
    <ul class="flex-1 bg-pink-200 rounded-sm">
      <TaskListItem
        v-for="{ id, name, isChecked } in currentItems"
        :key="id"
        class="flex items-center gap-3 py-2 px-3"
        :data-testid="`list-item-${id}`"
        :id="id"
        :name="name"
        :is-checked="isChecked"
        @remove="handleRemove"
        @edit="handleEdit"
      >
      </TaskListItem>
    </ul>

    <Pagination
      class="pt-3"
      v-slot="{ page }"
      v-model:page="currentPage"
      :items-per-page="itemsPerPage"
      :total="numItems"
      show-edges
    >
      <PaginationList v-slot="{ items: pageItems }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in pageItems">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '@/stores/task'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from '@/components/ui/pagination'
import TaskListItem from './TaskListItem.vue'
import { computed, ref } from 'vue'

const props = withDefaults(
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

const itemsPerPage = 10

const currentPage = ref(1)
const numItems = computed(() => props.items.length)
const currentItems = computed(() => {
  const start = itemsPerPage * (currentPage.value - 1)

  return props.items.slice(start, start + itemsPerPage)
})

function handleRemove(id: Task['id']) {
  emit('remove', id)
}

function handleEdit(id: Task['id'], task: Partial<Omit<Task, 'id'>>) {
  emit('edit', id, task)
}
</script>

<style></style>
