import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch';
import CardPokemon from './CARD/CardPokemon';
import styled from 'styled-components';

const ContainerCards = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`

const Pokedex = () => {

  const pokemons = useFetch('https://pokeapi.co/api/v2/pokemon');
  //console.log(pokemons)

  const nameTrainer = useSelector(state => state.nameTrainer);

  return (
    <div>

      <h2>{`Welcome to Pokedex APP >>${nameTrainer}<<`}</h2>
      <ContainerCards>
        {
          pokemons?.results.map( pokemon => (
            <CardPokemon
              key={pokemon.url} 
              url={pokemon.url} 
            />

          ))
        }
      </ContainerCards>

    </div>
  )
}

export default Pokedex