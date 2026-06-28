import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TicTac from './components/TicTacToe.jsx'
const App=()=>{


  return (
    <div className='bg-black-400 h-screen w-full'>
      <TicTac/>
    </div>
  )
}

export default App
