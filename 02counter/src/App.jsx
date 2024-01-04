import { useState } from 'react'


// let counter = 0;
// const increase = ()=> {
//   counter++;
//   console.log(counter)
// }                                      this way will no effect to counter hence we use hooks to update a variable with a single click over the page 
// const decrease = ()=>{
//   counter--;
//   console.log(counter)
// } 

function App() {
 
  let [counter,setCounter] = useState(0);              // let [varName , funcToChangeVariable] = useState(initialState);

  const increase = ()=> {
      setCounter((counter<20)?counter+1:counter)
  }

  const decrease = ()=> {
      setCounter((counter>0)?counter-1: counter)
  }

  return (
    <>
      <h1>Chai aur react {counter}</h1>
      <button onClick={increase}>Increase Value</button>
      <br></br>
      <button onClick={decrease} >Decrease Value</button>
    </>
  )
}

export default App
