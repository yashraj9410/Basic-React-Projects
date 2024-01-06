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
    <Card title= {kumaon_obj.title} place={kumaon_obj.place} tags = {kumaon_obj.tags}/>
    <Card title= {garhwal_obj.title} place={garhwal_obj.place} tags = {garhwal_obj.tags}/>
    </>
  )
}

export default App
