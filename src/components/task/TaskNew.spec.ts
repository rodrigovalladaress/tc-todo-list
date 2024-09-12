import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import TaskNew from './TaskNew.vue'

describe('TaskNew', () => {
  beforeEach(async () => {
    render(TaskNew)
  })

  it('shows the input textbox', async () => {
    expect(screen.getByRole('textbox', { name: /New task/i })).toBeDefined()
  })

  it('shows the add button', async () => {
    expect(screen.getByRole('button', { name: /Add/i })).toBeDefined()
  })
})
