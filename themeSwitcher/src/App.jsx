import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'

function App() {

  const [themeMode,setThememode] = useState("light");

  const light = ()=>{
    setThememode("light")
  }

  const dark = () =>{
    setThememode("dark")
  }

  // actual chnage in theme will be caused by this use effect hook
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
