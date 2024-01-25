import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


// useSelector is used to access hook from the store state 

function Todo() {

    // we get the access of state 
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}
        <button onClick={()=> dispatch(removeTodo(todo.id))}> Delete</button>
        </li>
    ))}
    </>
    
  )
}

export default Todo