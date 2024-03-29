import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [themeMode,setThememode] = useState("light");

  const lightTheme = ()=>{
    setThememode("light")
  }

  const darkTheme = () =>{
    setThememode("dark")
  }

  // actual chnage in theme will be caused by this use effect hook whenever there will be a chnage in themeMode
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
    {/* Providing the themeMode , and the functions for the childs ThemeBtn and Card to be used */}
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
