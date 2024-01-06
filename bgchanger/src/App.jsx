import { useState,useEffect } from 'react'
import ButtonComp from './components/ButtonComp'

function App() {
  const [color, setColor] = useState(null)
  const buttons = ['red','green','blue','black','yellow','pink']

  const changeBg = (color) => {
    setColor(color);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div>
        <ButtonComp colors = {buttons} onClick = {changeBg} />
      </div>
    </>
  )
}

export default App
