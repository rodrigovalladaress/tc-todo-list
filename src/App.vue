<script setup lang="ts">
import TaskList from './components/task/TaskList.vue'
import TaskNew from './components/task/TaskNew.vue'
</script>

<template>
  <div id="tc-vue-template">
    <h1>TODO list</h1>

    <TaskNew></TaskNew>

    <TaskList
      :items="[
        {
          id: 0,
          name: 'Godzilla'
        }
      ]"
    ></TaskList>
  </div>
</template>

<style scoped></style>
