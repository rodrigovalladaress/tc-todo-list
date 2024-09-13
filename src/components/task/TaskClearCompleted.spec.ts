import { render, screen, type RenderResult } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskClearCompleted from './TaskClearCompleted.vue'
import userEvent from '@testing-library/user-event'

describe('TaskClearCompleted', () => {
  let r: RenderResult

  beforeEach(async () => {
    r = render(TaskClearCompleted)
  })

  it('shows the button', async () => {
    expect(screen.getByRole('button', { name: /Clear completed/i })).toBeDefined()
  })

  it('emits the clear event when clicking on the button', async () => {
    const { emitted } = r

    userEvent.setup()

    await userEvent.click(screen.getByRole('button'))

    expect(emitted().clear.at(0)).toBeDefined()
  })
})
