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
  todoItem2: ItemProps
  onUpdate2: (targetId: number) => void
  onDelete2: (targetId: number) => void
}

export const mockData = [
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
