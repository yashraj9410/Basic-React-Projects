import { useState } from 'react'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0)
  let obj = {
    title:"The Warm Sunset",
    place:"Scenic beauty of garhwal himalyas",
    tags:"#Uttarakhand"
  }

  return (
    <>
    <Card />
    <Card myObj ={obj}/>
    </>
  )
}

export default App
