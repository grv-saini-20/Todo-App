import React, { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import TodoItem from './TodoItem';


function TodoItemsList() {
    const {todos} = useContext(TodoContext);

  return (
    <div>
        {(todos.length === 0) ?
        <p>No todos yet!</p> : 
        todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))    
    }
    </div>
  )
}

export default TodoItemsList