const TodoHeader = () => {
  return (
    <div className="todo-header">
      <div>오늘은 {new Date().toLocaleDateString()}</div>
      <div>🗓️</div>
    </div>
  )
}

export default TodoHeader
