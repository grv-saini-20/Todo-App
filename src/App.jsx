import './App.css'
import TodoProvider from './context/todoContext';
import AddTodo from './components/AddTodo';
import TodoItemsList from "./components/TodoItemsList"

function App() {
  return (
    <>
    <TodoProvider>
      <div className="App">
        <h1>Todo App with Context API</h1>
        <AddTodo />
        <TodoItemsList />
      </div>
    </TodoProvider>
    </>
  )
}

export default App
