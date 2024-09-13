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
    store.add([ITEM])
    expect(store.itemsById[1]).deep.equal(ITEM)
  })

  it('adds many tasks', () => {
    const ITEMS = [
      { name: 'The test item', isChecked: false },
      { name: 'Another test', isChecked: true }
    ]

    const store = useTaskStore()
    const ids = store.add(ITEMS)
    expect(store.itemsById[ids[0]]).deep.equal({ id: ids[0], ...ITEMS.at(0) })
    expect(store.itemsById[ids[1]]).deep.equal({ id: ids[1], ...ITEMS.at(1) })
  })

  it('edits a task', () => {
    const ITEM = { name: 'The test item', isChecked: false }
    const NEW_NAME = 'The new name'

    const store = useTaskStore()
    const [id] = store.add([ITEM])

    store.edit(id, { name: NEW_NAME })
    expect(store.itemsById[id].name).equal(NEW_NAME)

    store.edit(id, { isChecked: true })
    expect(store.itemsById[id].isChecked).equal(true)
  })

  it('removes a task', () => {
    const ITEM = { name: 'The test item', isChecked: false }

    const store = useTaskStore()
    const [id] = store.add([ITEM])

    store.remove(id)
    expect(store.itemsById[id]).toBeUndefined()
  })

  it('removes completed tasks', async () => {
    const ITEM = { name: 'The task to not clear', isChecked: false }
    const ITEM_TO_CLEAR = { name: 'The task to add and clear', isChecked: true }

    const store = useTaskStore()
    const [id, idToClear] = store.add([ITEM, ITEM_TO_CLEAR])
    expect(store.itemsById[id]).toBeDefined()
    expect(store.itemsById[idToClear]).toBeDefined()

    store.removeAllChecked()
    expect(store.itemsById[id]).toBeDefined()
    expect(store.itemsById[idToClear]).toBeUndefined()
  })

  it('removes all tasks', async () => {
    const ITEMS = [
      { name: 'Task 1', isChecked: false },
      { name: 'Task 2', isChecked: false },
      { name: 'Task 3', isChecked: false }
    ]

    const store = useTaskStore()
    store.add(ITEMS)
    expect(store.items.length).toBe(3)

    store.removeAll()
    expect(store.items.length).toBe(0)
  })
})
