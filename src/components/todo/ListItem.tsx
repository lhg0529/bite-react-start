import { TodoItemProps } from './todoTypes'

const ListItem: React.FC<TodoItemProps> = ({
  todoItem2,
  onUpdate2,
  onDelete2,
}) => {
  console.log('item rerendered')
  const onClickCheckbox = () => {
    onUpdate2(todoItem2.id)
  }

  const onClickDeleteButton = () => {
    return onDelete2(todoItem2.id)
  }

  return (
    <div className="todo-list-item">
      <input
        checked={todoItem2.isDone}
        type="checkbox"
        onChange={onClickCheckbox}
      />
      <div>{todoItem2.content2}</div>
      <div>{new Date(todoItem2.date).toLocaleString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

export default ListItem
