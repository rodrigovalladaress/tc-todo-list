<script setup lang="ts">
import TaskClearCompletedStore from './components/task/TaskClearCompletedStore.vue'
import TaskListStore from './components/task/TaskListStore.vue'
import TaskNewStore from './components/task/TaskNewStore.vue'
import { Button } from '@/components/ui/button'
import { useTaskStore } from './stores/task'

const store = useTaskStore()

async function onAddFakeDataClick(howMany: 10 | 100 | 1000) {
  const res = await fetch('https://jsonplaceholder.typicode.com/user/1/todos')
  const data = ((await res.json()) as { title: string }[]).splice(10)
  let repeat = 1
  if (howMany === 100) {
    repeat = 10
  } else if (howMany === 1000) {
    repeat = 100
  }

  const tasks = data.map(({ title }) => ({ name: title, isChecked: false }))
  const tasksToAdd: typeof tasks = []

  for (let i = 0; i < repeat; i++) {
    tasksToAdd.push(...tasks)
  }

  store.add(tasksToAdd)
}

function onRemoveAllTasksClick() {
  store.removeAll()
}
</script>

<template>
  <div id="tc-vue-template" class="min-h-full h-full flex" style="background-color: aqua">
    <div class="flex flex-col flex-grow p-8 pt-6 overflow-y-auto bg-lime-400">
      <div class="flex flex-col flex-grow p-4 pb-12 space-y-4 bg-white rounded-sm">
        <h1 class="text-3xl font-bold">TODO list</h1>

        <div class="flex-grow space-y-2">
          <TaskListStore></TaskListStore>

          <TaskNewStore></TaskNewStore>
        </div>

        <div class="fixed bottom-0 left-0 w-full flex bg-white border-t-2">
          <div class="flex-grow mx-8 px-0 py-3 flex justify-between gap-3 rounded-sm">
            <TaskClearCompletedStore />

            <div class="flex gap-2">
              <Button @click="onRemoveAllTasksClick">Remove all tasks</Button>

              <Button @click="onAddFakeDataClick(10)">Add 10 fake tasks</Button>

              <Button @click="onAddFakeDataClick(100)">Add 100 fake tasks</Button>

              <Button @click="onAddFakeDataClick(1000)">Add 1K fake tasks</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
