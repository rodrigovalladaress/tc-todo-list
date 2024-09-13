import { render, screen } from '@testing-library/vue'
import { beforeEach, expect, describe, it } from 'vitest'
import App from './App.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('App', () => {
  beforeEach(async () => {
    setActivePinia(createPinia())

    render(App)
  })

  it('shows the title', async () => {
    expect(screen.getByRole('heading', { name: /TODO list/i })).toBeDefined()
  })
})
