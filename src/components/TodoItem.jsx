import React,{useContext, useState} from 'react'
import { TodoContext } from '../context/todoContext';

function TodoItem({todo}) {
    const [isEditing, setIsEditing] = useState(false);
    const {toggleTodo, updateTodo, deleteTodo} = useContext(TodoContext);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if(isEditing) {
            updateTodo(todo.id, newText)
        }
        setIsEditing(!isEditing);
    }
  return (
    <>
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
    </>
  )
}

export default TodoItem