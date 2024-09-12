import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    itemsById: {} as Record<Task['id'], Task>
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

type Task = {
  id: number
  name: string
  isChecked: boolean
}
