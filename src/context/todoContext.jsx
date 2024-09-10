import { createContext, useState } from "react";
import React from 'react'
export const TodoContext = createContext();

function TodoProvider({children}) {
    const [todos, setTodos] = useState([])

    
    const addTodo = (text) => {
        const newTodo = {id: Date.now(), text, completed: false}
        setTodos([...todos,newTodo])
    };

    const updateTodo = (id, newText) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
            setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <TodoContext.Provider value={{todos, addTodo, deleteTodo, toggleTodo, updateTodo}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;