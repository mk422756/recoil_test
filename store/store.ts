import {atom, selector, DefaultValue} from 'recoil'

const localStorageEffect = (key) => ({setSelf, onSet}) => {
  if (typeof window === 'undefined') {
    return
  }
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  })
}

export const todoListState = atom({
  key: 'todoListState',
  default: [],
  effects_UNSTABLE: [localStorageEffect('todoist')],
})

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete)
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})
