import { render, screen } from '@testing-library/vue'
import { expect, describe, it } from 'vitest'
import TaskListItem from './TaskListItem.vue'
import userEvent from '@testing-library/user-event'

const ITEM = { id: 200, name: 'Another item', isChecked: false }

describe('TaskListItem', () => {
  it('shows the item', async () => {
    render(TaskListItem, {
      props: {
        id: ITEM.id,
        name: ITEM.name
      }
    })

    expect(screen.queryByText(ITEM.name)).not.toBeNull()
  })

  it('shows the edit input when clicking on edit', async () => {
    render(TaskListItem, {
      props: {
        id: ITEM.id,
        name: ITEM.name
      }
    })

    userEvent.setup()

    await userEvent.click(screen.getByRole('button', { name: /Edit/i }))

    const input = screen.queryByRole('textbox', { name: `Edit ${ITEM.name}` })
    expect(input).not.toBeNull()
    expect(input!.closest('input')?.value).toBe(ITEM.name)
  })

  it('changes the edit button to save button when clicking on edit', async () => {
    render(TaskListItem, {
      props: {
        id: ITEM.id,
        name: ITEM.name
      }
    })

    userEvent.setup()

    await userEvent.click(screen.getByRole('button', { name: /Edit/i }))

    expect(screen.queryByRole('button', { name: /Edit/i })).toBeNull()
    expect(screen.getByRole('button', { name: /Save/i })).toBeDefined()
  })

  it('emits the save event when clicking on save button', async () => {
    const { emitted } = render(TaskListItem, {
      props: {
        id: ITEM.id,
        name: ITEM.name
      }
    })

    userEvent.setup()

    await userEvent.click(screen.getByRole('button', { name: /Edit/i }))

    const input = screen.getByRole('textbox', { name: `Edit ${ITEM.name}` })

    await userEvent.clear(input)
    await userEvent.type(input, 'The new text')
    await userEvent.click(screen.getByRole('button', { name: /Save/i }))

    expect(emitted().edit.at(0)).deep.includes({ name: 'The new text' })
  })

  it('shows the edit button again when clicking on save', async () => {
    render(TaskListItem, {
      props: {
        id: ITEM.id,
        name: ITEM.name
      }
    })

    userEvent.setup()

    await userEvent.click(screen.getByRole('button', { name: /Edit/i }))
    await userEvent.click(screen.getByRole('button', { name: /Save/i }))

    expect(screen.getByRole('button', { name: /Edit/i })).toBeDefined()
    expect(screen.queryByRole('button', { name: /Save/i })).toBeNull()
  })
})
