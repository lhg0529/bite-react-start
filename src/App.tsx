import TodoEditor from './components/todo/TodoEditor'
import TodoHeader from './components/todo/TodoHeader'
// import TodoList from "./components/todo/TodoList"
import './App.scss'
import { useRef, useState } from 'react'

const mockData = [
  {
    id: 1,
    content: '할일 1',
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: '할일 2',
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 3,
    content: '할일 3',
    isDone: false,
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(4)

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <div>
      <div className="main-container">
        <TodoHeader />
        <TodoEditor onCreate={onCreate} />
        {/* <TodoList /> */}
        <div>
          {todos.map((파라미터명아무거나) => (
            <li key={파라미터명아무거나.id}>{파라미터명아무거나.content}</li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
