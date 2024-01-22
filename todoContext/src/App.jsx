import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import {TodoForm , TodoItem} from './components/index'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(todo)=>{
    setTodos((prevTodo) => [{id:Date.now(), ...todo},...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodo) => prevTodo.map((todo)=> (todo.id === id ? {...todo, completed:!todo.completed}: todo)))
  }

  // for getting all the todos from local storage 
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((currentTodo) =>(
                    <div key={currentTodo.id} className='w-full'>
                      <TodoItem todo={currentTodo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
