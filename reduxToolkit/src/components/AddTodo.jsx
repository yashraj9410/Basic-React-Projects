import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo,removeTodo } from '../features/todo/todoSlice'

// here we will be using useDispatch because we are dispatching something to add 
// dispatch uses reducer to make changes to the store 
function AddTodo() {

    const [input , setInput]  =  useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <form onSubmit={addTodoHandler}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value ={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo