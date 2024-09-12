<script setup lang="ts">
import TaskClearCompleted from './components/task/TaskClearCompleted.vue'
import TaskList from './components/task/TaskList.vue'
import TaskNew from './components/task/TaskNew.vue'
</script>

<template>
  <div id="tc-vue-template" class="h-[100vh]">
    <div class="flex-1 h-full p-8 pt-6 bg-lime-400">
      <div class="flex flex-col p-4 h-full space-y-4 bg-white rounded-sm">
        <h1 class="text-3xl font-bold">TODO list</h1>

        <div class="flex-grow space-y-2">
          <TaskList
            :items="[
              {
                id: 0,
                name: 'Godzilla'
              }
            ]"
          ></TaskList>

          <TaskNew></TaskNew>
        </div>

        <TaskClearCompleted />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
