import {useRecoilValue} from 'recoil'
import {filteredTodoListState} from 'store/store'
import TodoItemCreator from 'components/TodoItemCreator'
import TodoItem from 'components/TodoItem'
import TodoListStats from 'components/TodoListStats'
import TodoListFilters from 'components/TodoListFilters'

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}