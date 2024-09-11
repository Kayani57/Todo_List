import { useState } from 'react'
import { Navbar } from './components/Navbar'
import Addtask from './components/Addtask'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
      <h1 className='text-5xl font-bold text-center p-4 font-serif font-extrabold'>Todo List</h1>

      <Addtask />
     
  
     
        
    </>
  )
}

export default App
