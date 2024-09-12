<script setup lang="ts">
import TaskClearCompleted from './components/task/TaskClearCompleted.vue'
import TaskList from './components/task/TaskList.vue'
import TaskNew from './components/task/TaskNew.vue'

const list = [
  {
    id: 0,
    name: 'Godzilla'
  }
]

const longList = (new Array(100) as typeof list).fill(list.at(0)!, 0)
</script>

<template>
  <div id="tc-vue-template" class="min-h-full h-full flex" style="background-color: aqua">
    <div class="flex flex-col flex-grow p-8 pt-6 overflow-y-auto bg-lime-400">
      <div class="flex flex-col flex-grow p-4 space-y-4 bg-white rounded-sm">
        <h1 class="text-3xl font-bold">TODO list</h1>

        <div class="flex-grow space-y-2">
          <TaskList :items="list"></TaskList>

          <TaskNew></TaskNew>
        </div>

        <TaskClearCompleted />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
