import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'
const App = () => {

  const [darkMode, setDarkMode] = useState(true)

  function toggleMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className='app'>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App