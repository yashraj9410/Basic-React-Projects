import {createSlice , nanoid} from '@reduxjs/toolkit'


// this is going to be used as state 
const initialState = {
    todos:[
        {
        id:1,
        text:"Hello"
        }
    ]
}

// state, action -> state is the initial state and action is used to make changes to current state
// the property name , reducers , initialState are defined and need to be same as key
// reducers are used to make changes using functions 
// payload is also an object and we can add properties 

export const todoSlice  = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=> {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// we have to export the individual functionalities
export const {addTodo,removeTodo} = todoSlice.actions

// export the list of all reducers to the store.
export default todoSlice.reducer