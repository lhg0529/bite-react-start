import { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

const TodoEditor = () => {
  console.log('editor rerendered')
  const [content11, setContent11] = useState<string>('')
  const todoContext = useContext(TodoContext)

  if (!todoContext) {
    throw new Error('TodoEditor must be used within a TodoProvider')
  }

  const { handleCreate } = todoContext

  const onSubmit = () => {
    if (content11 === '') {
      return
    }
    handleCreate(content11)
    setContent11('')
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent11(e.target.value)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <div>
      <input
        // value가 없으면 onSubmit이 실행돼도 setContent11이 실행되지 않음
        // value가 있어야 제어 컴포넌트로 동작해서 실시간 동기화가 가
        value={content11}
        onChange={onChangeContent}
        placeholder="새로운 Todo를 입력하세요"
        onKeyDown={onKeyDown}
      />
      <button onClick={() => onSubmit()}>추가</button>
    </div>
  )
}

export default TodoEditor
