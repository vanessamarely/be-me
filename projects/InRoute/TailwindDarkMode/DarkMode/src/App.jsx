//En el README.md se encuentran los pasos de como hacer este proyecto

/* Recursos:
https://tailwindcss.com/docs/installation
https://tailwindcss.com/docs/guides/vite */

import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light')
    }
    /* if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light"; */
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div
      className="h-screen 
  flex
  justify-center
  items-center
  dark:bg-neutral-900"
    >
      <button
        className="bg-slate-200 
      px-4
      py-2
      rounded
      hover:bg-slate-300
      dark:bg-slate-950
      dark:text-white
      dark:hover:bg-slate-900
      "
        onClick={handleChangeTheme}
      >
        Change Theme
      </button>
    </div>
  )
}

export default App
