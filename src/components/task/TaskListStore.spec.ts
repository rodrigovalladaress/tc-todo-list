import { render, screen, waitFor, within } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import userEvent from '@testing-library/user-event'

import { beforeEach, expect, describe, it } from 'vitest'
import TaskListStore from './TaskListStore.vue'
import { setActivePinia } from 'pinia'
import { useTaskStore } from '@/stores/task'

const ITEMS = [
  {
    id: 1,
    name: 'A test list item',
    isChecked: false
  },
  {
    id: 2,
    name: 'Another test item',
    isChecked: false
  },
  {
    id: 3,
    name: 'Márika',
    isChecked: false
  }
]

describe('TaskListStore', () => {
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

    render(TaskListStore, {
      global: {
        plugins: [pinia]
      }
    })
  })

  it('shows the correct items', async () => {
    expect(screen.getByText(ITEMS.at(0)!.name)).toBeDefined()
    expect(screen.getByText(ITEMS.at(1)!.name)).toBeDefined()
    expect(screen.getByText(ITEMS.at(2)!.name)).toBeDefined()
  })

  it('shows the new item after adding it directly in the store', async () => {
    const ITEM = { id: 100, name: 'This new item', isChecked: false }

    const store = useTaskStore()
    await store.add(ITEM)

    expect(screen.getByText(ITEM.name)).toBeDefined()
  })

  it('stops showing the item after removing it directly in the store', async () => {
    const store = useTaskStore()
    await store.remove(ITEMS.at(2)!.id)

    expect(screen.queryByText(ITEMS.at(2)!.name)).toBeNull()
  })

  it('removes the item when clicking on the remove button', async () => {
    const ITEM = ITEMS.at(2)!

    userEvent.setup()

    expect(screen.getByText(ITEM.name)).toBeDefined()

    const listItem = screen.getByTestId(`list-item-${ITEM.id}`)
    const removeButton = within(listItem).getByRole('button', { name: /Remove/i })
    await userEvent.click(removeButton)

    expect(screen.queryByText(ITEM.name)).toBeNull()
  })
})
