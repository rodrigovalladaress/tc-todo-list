<template>
  <div>
    <Label for="task-new">New task</Label>

    <Input id="task-new"></Input>

    <Button type="submit">Add</Button>
  </div>
</template>

<script lang="ts" setup>
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
</script>

<style></style>
