import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskNewStore from './TaskNewStore.vue'
import userEvent from '@testing-library/user-event'
import { createPinia, setActivePinia } from 'pinia'
import { useTaskStore } from '@/stores/task'

describe('TaskNewStore', () => {
  beforeEach(async () => {
    setActivePinia(createPinia())

    render(TaskNewStore)
  })

  it('adds the new task to the store', async () => {
    userEvent.setup()

    const store = useTaskStore()

    const input = screen.getByRole('textbox')
    const addButton = screen.getByRole('button')

    await userEvent.clear(input)
    await userEvent.type(input, 'The new task')
    await userEvent.click(addButton)

    expect(store.items[0].name).toBe('The new task')
  })
})
