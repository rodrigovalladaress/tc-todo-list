import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskList from './TaskList.vue'

const ITEMS = [
  {
    id: 0,
    name: 'A test list item'
  },
  {
    id: 1,
    name: 'Another test item'
  }
]

describe('TaskList', () => {
  beforeEach(async () => {})

  it('shows the list items', async () => {
    render(TaskList, {
      props: {
        items: ITEMS
      }
    })

    expect(screen.getByText(ITEMS.at(0)!.name)).toBeDefined()
    expect(screen.getByText(ITEMS.at(1)!.name)).toBeDefined()
  })

  it('shows the edit button', async () => {
    render(TaskList, {
      props: {
        items: [ITEMS.at(0)!]
      }
    })

    expect(screen.getByRole('button', { name: /Edit/i })).toBeDefined()
  })

  it('shows the delete button', async () => {
    render(TaskList, {
      props: {
        items: [ITEMS.at(0)!]
      }
    })

    expect(screen.getByRole('button', { name: /Delete/i })).toBeDefined()
  })

  it('shows the checkbox', async () => {
    render(TaskList, {
      props: {
        items: [ITEMS.at(0)!]
      }
    })

    expect(screen.getByRole('checkbox', { name: /Mark as done/i })).toBeDefined()
  })
})
