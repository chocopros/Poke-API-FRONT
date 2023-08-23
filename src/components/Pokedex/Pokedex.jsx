import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch';
import CardPokemon from './CARD/CardPokemon';


const Pokedex = () => {

  const pokemons = useFetch('https://pokeapi.co/api/v2/pokemon');
  //console.log(pokemons)

  const nameTrainer = useSelector(state => state.nameTrainer);

  return (
    <div>

      <h2>{`Welcome to Pokedex APP >>${nameTrainer}<<`}</h2>
      <div className="cards__container">
        {
          pokemons?.results.map( pokemon => (
            <CardPokemon
              key={pokemon.url} 
              url={pokemon.url} 
            />

          ))
        }
      </div>

    </div>
  )
}

export default Pokedex