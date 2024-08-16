interface ItemProps {
  id: number
  content2: string
  isDone: boolean
  date: number
}

interface ListItemProps {
  item: ItemProps
  onUpdate: (targetId: number) => void
  onDelete: (targetId: number) => void
}

const ListItem: React.FC<ListItemProps> = ({ item, onUpdate, onDelete }) => {
  const onCheckUpdate = () => {
    onUpdate(item.id)
  }

  return (
    <div className="todo-list-item">
      <input checked={item.isDone} type="checkbox" onChange={onCheckUpdate} />
      <div>{item.content2}</div>
      <div>{new Date(item.date).toLocaleString()}</div>
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  )
}

export default ListItem
