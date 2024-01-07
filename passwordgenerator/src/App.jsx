import { useCallback, useState } from 'react'

function App() {

  // maintaing the hook for all the factors that affect the password
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [symbolAllow, setSymbolAllow] = useState(false);
  const [password, setPassword] = useState("");

  // creating the useCallback hook for the password genration it takes a call back and a dependency list
  // the useCallback hook caches a function definition between multiple re renders ie the function will always run if any of the dependency is altered without a reload 
  const createPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str = str + "1234567890"
    if(symbolAllow) str = str + "!@#$%^&*"

    for(let i = 1 ; i<=length;i++){
      let index =  Math.floor(Math.random()*str.length +1)
      pass = pass + str.charAt(index);
    }
    
  }
    , [length, numberAllow, symbolAllow, setPassword])  // we are passing sePassword that is because that only sets the state of password

  return (
    <>
      <div></div>
    </>
  )
}

export default App
