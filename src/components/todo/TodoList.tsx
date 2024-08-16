import { useContext, useState } from 'react'
import ListItem from './ListItem'
import { ItemProps } from './todoTypes'
import { TodoContext } from './TodoContext'

const TodoList = () => {
  console.log('list rerendered')
  const [search, setSearch] = useState('')
  const todoContext = useContext(TodoContext)

  if (!todoContext) {
    throw new Error('TodoList must be used within a TodoProvider')
  }

  const { todos, handleUpdate, handleDelete } = todoContext

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const getFilteredTodos = () => {
    if (search === '') {
      return todos
    }
    return todos.filter((todo: ItemProps) =>
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
      {filteredTodos.map((todo: ItemProps) => {
        return (
          <ListItem
            key={todo.id}
            todoItem2={todo}
            onUpdate2={handleUpdate}
            onDelete2={handleDelete}
          />
        )
      })}
    </div>
  )
}

export default TodoList
