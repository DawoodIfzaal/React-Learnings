import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [],
    addTodo : (todoMsg) => {},
    deleteTodo: (id) => {},
    editTodo: (id, todo) => {},
    toggleTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider