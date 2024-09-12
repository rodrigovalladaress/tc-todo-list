import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTaskStore } from './task'

describe('Task store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a new task', () => {
    const ITEM = { id: 1, name: 'The test item', isChecked: false }

    const store = useTaskStore()
    store.add(ITEM)
    expect(store.itemsById[1]).deep.equal(ITEM)
  })

  it('edits a task', () => {
    const ITEM = { id: 0, name: 'The test item', isChecked: false }
    const NEW_NAME = 'The new name'

    const store = useTaskStore()
    store.add(ITEM)

    store.edit(ITEM.id, { name: NEW_NAME })
    expect(store.itemsById[ITEM.id].name).equal(NEW_NAME)

    store.edit(ITEM.id, { isChecked: true })
    expect(store.itemsById[ITEM.id].isChecked).equal(true)
  })

  it('removes a task', () => {
    const ITEM = { id: 0, name: 'The test item', isChecked: false }

    const store = useTaskStore()
    store.add(ITEM)

    store.remove(ITEM.id)
    expect(store.itemsById[ITEM.id]).toBeUndefined()
  })
})
