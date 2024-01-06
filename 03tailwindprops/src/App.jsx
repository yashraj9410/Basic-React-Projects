import { useState } from 'react'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0)

  let garhwal_obj = {
    title:"The Warm Sunset",
    place:"Scenic beauty of garhwal himalyas",
    tags:"#Uttarakhand"
  }

  let kumaon_obj = {
    title:"The Cold Sunset",
    place:"Scenic beauty of kumaon himalyas",
    tags:"#Uttarakhand"
  }



  return (
    <>
    <Card  myObj = {kumaon_obj} />
    <Card  myObj= {garhwal_obj}/>
    </>
  )
}

export default App
