import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskList from './TaskList.vue'
import userEvent from '@testing-library/user-event'

const ITEMS = [
  {
    id: 0,
    name: 'A test list item',
    isChecked: false
  },
  {
    id: 1,
    name: 'Another test item',
    isChecked: false
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

  it('shows the remove button', async () => {
    render(TaskList, {
      props: {
        items: [ITEMS.at(0)!]
      }
    })

    expect(screen.getByRole('button', { name: /Remove/i })).toBeDefined()
  })

  it('shows the checkbox', async () => {
    render(TaskList, {
      props: {
        items: [ITEMS.at(0)!]
      }
    })

    expect(screen.getByRole('checkbox', { name: /Mark as done/i })).toBeDefined()
  })

  it('handles the remove button click', async () => {
    const { emitted } = render(TaskList, {
      props: {
        items: [ITEMS.at(0)!]
      }
    })

    userEvent.setup()

    await userEvent.click(screen.getByRole('button', { name: /Remove/i }))

    expect(emitted().remove.at(0)).toContain(ITEMS.at(0)!.id)
  })
})
