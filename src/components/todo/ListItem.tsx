import { TodoItemProps } from './todoTypes'

const ListItem: React.FC<TodoItemProps> = ({
  todoItem,
  onUpdate,
  onDelete,
}) => {
  const onCheckUpdate = () => {
    onUpdate(todoItem.id)
  }

  return (
    <div className="todo-list-item">
      <input
        checked={todoItem.isDone}
        type="checkbox"
        onChange={onCheckUpdate}
      />
      <div>{todoItem.content2}</div>
      <div>{new Date(todoItem.date).toLocaleString()}</div>
      <button onClick={() => onDelete(todoItem.id)}>삭제</button>
    </div>
  )
}

export default ListItem
