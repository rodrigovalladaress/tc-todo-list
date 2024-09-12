import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    itemsById: { 0: { id: 0, name: 'Godzilla', isChecked: false } } as Record<string, Task>
  }),

  getters: { items: (state) => Object.values(state.itemsById) },

  actions: {
    add(item: Task) {
      this.itemsById[item.id] = item
    },

    edit(id: Task['id'], item: Partial<Omit<Task, 'id'>>) {
      this.itemsById[id] = { ...this.itemsById[id], ...item }
    },

    remove(id: Task['id']) {
      delete this.itemsById[id]
    }
  }
})

export type Task = {
  id: number
  name: string
  isChecked: boolean
}
