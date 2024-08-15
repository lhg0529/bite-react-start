const ListItem = () => {
  return (
    <div className="todo-list-item">
      <input type="checkbox" />
      <div>할 일 내용 들어갈 부분</div>
      <div>{new Date().toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  )
}

export default ListItem
