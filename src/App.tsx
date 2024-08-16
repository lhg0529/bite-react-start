import TodoEditor from './components/todo/TodoEditor'
import TodoHeader from './components/todo/TodoHeader'
import TodoList from './components/todo/TodoList'
import './App.scss'

function App() {
  return (
    <div>
      <div className="main-container">
        <TodoHeader />
        <TodoEditor />
        <TodoList />
      </div>
    </div>
  )
}

export default App
