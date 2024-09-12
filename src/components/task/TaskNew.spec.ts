import { render, screen, type RenderResult } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskNew from './TaskNew.vue'
import userEvent from '@testing-library/user-event'

describe('TaskNew', () => {
  let r: RenderResult

  beforeEach(async () => {
    r = render(TaskNew)
  })

  it('shows the input textbox', async () => {
    expect(screen.getByRole('textbox', { name: /New task/i })).toBeDefined()
  })

  it('shows the add button', async () => {
    expect(screen.getByRole('button', { name: /Add/i })).toBeDefined()
  })

  it('emits the add event', async () => {
    userEvent.setup()

    const input = screen.getByRole('textbox', { name: /New task/i })
    const addButton = screen.getByRole('button', { name: /Add/i })

    await userEvent.clear(input)
    await userEvent.type(input, 'The new task')
    await userEvent.click(addButton)

    expect(r.emitted().add.at(0)!).deep.contain({ name: 'The new task' })
  })
})
