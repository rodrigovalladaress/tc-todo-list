import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  beforeEach(async () => {
    render(App)
  })

  it('shows the title', async () => {
    expect(screen.getByRole('heading', { name: /TODO list/i })).toBeDefined()
  })
})
