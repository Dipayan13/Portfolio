import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
      <Hero/>
      <Skills/>
    </div>
    </>
  )
}

export default App
