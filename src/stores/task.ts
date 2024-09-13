import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    nextId: 1,
    itemsById: {} as Record<string, Task>
  }),

  getters: { items: (state) => Object.values(state.itemsById) },

  actions: {
    add(item: Omit<Task, 'id'>) {
      const id = this.nextId

      this.nextId += 1

      this.itemsById[id] = { ...item, id }

      return id
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
