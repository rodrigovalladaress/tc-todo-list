import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskClearCompleted from './TaskClearCompleted.vue'

describe('TaskClearCompleted', () => {
  beforeEach(async () => {
    render(TaskClearCompleted)
  })

  it('shows the button', async () => {
    expect(screen.getByRole('button', { name: /Clear completed/i })).toBeDefined()
  })
})
