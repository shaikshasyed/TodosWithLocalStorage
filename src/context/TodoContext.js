import { createContext, useContext } from "react"
import { v4 as uuid } from "uuid";


export const TodoContext = createContext({
    todos: [
        { id: uuid(), todo: "Task 1", completed: false },
        // Add more tasks as needed
    ],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => { },
    toggleComplete: (id) => {}
})

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider