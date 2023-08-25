import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonDetails from './components/Pokemon/PokemonDetails'
import Footer from './components/Footer/Footer'
import NoInfo from './components/NoInfo/Noinfo'

  
function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>} />
    
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokemonDetails />} />
        </Route>

        <Route path='*' element={<NoInfo />} />

      </Routes>
      
      <Footer />
    </>
  )
}

export default App
