import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonDetails from './components/Pokemon/PokemonDetails'

  
function App() {
  const [count, setCount] = useState(0)

    
  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonDetails />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
