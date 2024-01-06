import { useState } from 'react'
import ButtonComp from './components/ButtonComp'

function App() {
  const [color, setColor] = useState(null)
  const buttons = ['red','green','blue','black','yellow','pink']

  const changeBg = (color) => {
    setColor(color);
  }

  return (
    <>
      <div>
        <ButtonComp colors = {buttons} onClick = {changeBg} />
      </div>
    </>
  )
}

export default App
