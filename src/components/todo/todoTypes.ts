export interface ItemProps {
  id: number
  content2: string
  isDone: boolean
  date: number
}

export interface TodoListProps {
  todoItem: ItemProps[]
  onUpdate: (targetId: number) => void
  onDelete: (targetId: number) => void
}

export interface TodoItemProps {
  todoItem: ItemProps
  onUpdate: (targetId: number) => void
  onDelete: (targetId: number) => void
}
