import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    nextId: 1,
    itemsById: {} as Record<string, Task>
  }),

  getters: { items: (state) => Object.values(state.itemsById) },

  actions: {
    add(items: Omit<Task, 'id'>[]) {
      const ids: number[] = []

      for (const item of items) {
        const id = this.nextId
        this.nextId += 1

        this.itemsById[id] = { ...item, id }
        ids.push(id)
      }

      return ids
    },

    edit(id: Task['id'], item: Partial<Omit<Task, 'id'>>) {
      this.itemsById[id] = { ...this.itemsById[id], ...item }
    },

    remove(id: Task['id']) {
      delete this.itemsById[id]
    },

    clearChecked() {
      for (const { id, isChecked } of this.items) {
        if (isChecked) {
          delete this.itemsById[id]
        }
      }
    }
  }
})

export type Task = {
  id: number
  name: string
  isChecked: boolean
}
