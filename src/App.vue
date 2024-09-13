<script setup lang="ts">
import TaskClearCompletedStore from './components/task/TaskClearCompletedStore.vue'
import TaskListStore from './components/task/TaskListStore.vue'
import TaskNewStore from './components/task/TaskNewStore.vue'
</script>

<template>
  <div id="tc-vue-template" class="min-h-full h-full flex" style="background-color: aqua">
    <div class="flex flex-col flex-grow p-8 pt-6 overflow-y-auto bg-lime-400">
      <div class="flex flex-col flex-grow p-4 space-y-4 bg-white rounded-sm">
        <h1 class="text-3xl font-bold">TODO list</h1>

        <div class="flex-grow space-y-2">
          <TaskListStore></TaskListStore>

          <TaskNewStore></TaskNewStore>
        </div>

        <TaskClearCompletedStore />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
