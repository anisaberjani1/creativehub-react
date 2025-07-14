import { useState } from "react"
import Layout from "./components/Layout"

function App() {
  const [theme,setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark': 'light'))
  }
  return (
    <div className={theme === 'light' ? 'bg-white text-black min-h-screen': 'bg-black text-white min-h-screen'}>
      <Layout theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App
