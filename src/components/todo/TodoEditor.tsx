import { useState } from 'react'

const TodoEditor = ({ onCreate }: { onCreate: (content: string) => void }) => {
  const [content, setContent] = useState<string>('')

  const onSubmit = () => {
    if (content === '') {
      return
    }
    onCreate(content)
    setContent('')
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  return (
    <div>
      <input
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo를 입력하시오"
      />
      <button onClick={() => onSubmit()}>추가</button>
    </div>
  )
}

export default TodoEditor
