import { createContext, useState, useRef, ReactNode } from 'react'
import { ItemProps, mockData } from './todoTypes'

interface TodoContextProps {
  todos: ItemProps[]
  handleCreate: (content: string) => void
  handleDelete: (targetId: number) => void
  handleUpdate: (targetId: number) => void
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(4)

  const handleCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content2: content,
      date: new Date().getTime(),
    }
    setTodos([newTodo, ...todos])
  }

  const handleDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  const handleUpdate = (targetId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  return (
    <TodoContext.Provider
      value={{ todos, handleCreate, handleDelete, handleUpdate }}
    >
      {children}
    </TodoContext.Provider>
  )
}
