import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch';
import CardPokemon from './CARD/CardPokemon';
import styled from 'styled-components';
import Header from '../Header/Header'

const MainPokedex = styled.section`
  min-width: 320px;
`;

const ContainerCards = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 70px auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 70px;
`;


const Greeting = styled.h2`
  max-width: 1300px;
  margin: 30px auto;
`;




const Pokedex = () => {

  const pokemons = useFetch('https://pokeapi.co/api/v2/pokemon');
  //console.log(pokemons)

  const nameTrainer = useSelector(state => state.nameTrainer);

  return (
    <MainPokedex>

      <Header />
      

      <Greeting>{`Welcome ${nameTrainer}, to Pokedex!!`}</Greeting>

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

    </MainPokedex>
  )
}

export default Pokedex