import { useState } from 'react'

function App() {

  // maintaing the hook for all the factors that affect the password
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [symbolAllow, setSymbolAllow] = useState(false);

  return (
    <>
      <div></div>
    </>
  )
}

export default App
