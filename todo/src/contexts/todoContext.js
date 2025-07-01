import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "This is a todo msg",
            checked: false
        }
    ],
    addTodo : (todoMsg) => {},
    deleteTodo: (id) => {},
    editTodo: (id, todoMsg) => {},
    toggleTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider