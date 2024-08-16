import TodoEditor from './components/todo/TodoEditor'
import TodoHeader from './components/todo/TodoHeader'
import TodoList from './components/todo/TodoList'
import './App.scss'
import { useRef, useState } from 'react'

const mockData = [
  {
    id: 1,
    content2: '할일 1',
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content2: '할일 2',
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 3,
    content2: '할일 3',
    isDone: false,
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(4)

  const handleCreate = (content1: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content2: content1,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  const handleDelete = (targetId: number) => {
    return setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  const handleUpdate = (targetId: number) => {
    return setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  return (
    <div>
      <div className="main-container">
        <TodoHeader />
        <TodoEditor onCreateggg={handleCreate} />
        <TodoList
          todos={todos}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
