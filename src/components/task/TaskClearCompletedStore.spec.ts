import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskClearCompletedStore from './TaskClearCompletedStore.vue'
import { setActivePinia } from 'pinia'
import userEvent from '@testing-library/user-event'
import { useTaskStore } from '@/stores/task'
import { createTestingPinia } from '@pinia/testing'

const ITEMS = [
  {
    id: 1,
    name: 'A test list item to clear',
    isChecked: true
  },
  {
    id: 2,
    name: 'Another test item',
    isChecked: false
  },
  {
    id: 3,
    name: 'Ganon to clear',
    isChecked: true
  }
]

describe('TaskClearCompletedStore', () => {
  beforeEach(async () => {
    const pinia = createTestingPinia({
      initialState: {
        tasks: {
          itemsById: ITEMS.reduce((prev, item) => ({ ...prev, [item.id]: item }), {})
        }
      },
      stubActions: false
    })

    setActivePinia(pinia)

    render(TaskClearCompletedStore)
  })

  it('adds the new task to the store', async () => {
    userEvent.setup()

    const store = useTaskStore()

    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(store.items[1]).toBeUndefined()
    expect(store.items[2]).toBeDefined
    expect(store.items[3]).toBeUndefined()
  })
})
