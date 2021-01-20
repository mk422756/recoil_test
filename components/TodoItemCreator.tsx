import {useState} from 'react'
import {useSetRecoilState} from 'recoil'
import {todoListState} from 'store/store'

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const SetTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    SetTodoList((oldTodoList) => [...oldTodoList, {
      id: getId(),
      text: inputValue,
      isComplete:false
    }])
    setInputValue('')
  }

  const onChange = ({target: {value}})=> {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}></input>
      <button onClick={addItem}>Add</button>
    </div>
  )
}
let id = 0
function getId() {
  return id++
}
