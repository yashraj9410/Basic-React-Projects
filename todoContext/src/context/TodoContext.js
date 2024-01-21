import { createContext,useContext } from "react";

// our context contains array of todo list in the form of object each with unique title
// the addTodo function takes a todo and creates a functionality
// in the similar way all uther CRUD functions are working 
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete: (id) => {}
})

// use context always requires a context related to anything 
export const useTodo =()=> {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;