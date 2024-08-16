import { useState } from 'react'
import ListItem from './ListItem'

interface TodoProps {
  id: number
  content2: string
  isDone: boolean
  date: number
}

interface TodoListProps {
  todos: TodoProps[]
  onUpdate: (targetId: number) => void
  onDelete: (targetId: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('')

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const getFilteredTodos = () => {
    if (search === '') {
      return todos
    }
    return todos.filter((todo) =>
      todo.content2.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredTodos = getFilteredTodos()

  return (
    <div>
      <div>Todo List</div>
      <div>
        <input
          placeholder="검색어를 입력하세요"
          type="text"
          value={search}
          onChange={onSearch}
        />
        <button>검색</button>
      </div>
      {filteredTodos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            item={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  )
}

export default TodoList
