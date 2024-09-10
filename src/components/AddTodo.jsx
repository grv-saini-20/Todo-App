import React,{useState, useContext} from 'react'
import { TodoContext } from '../context/todoContext';

function AddTodo() {
    const [text, setText] = useState("");
    const {addTodo} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) addTodo(text);
        setText("");
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder='Add a todo' value={text} onChange={(e) => setText(e.target.value)}/>
    <button type="submit">Add</button>
    </form>
    </>
  )
}

export default AddTodo