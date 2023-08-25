import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch';
import CardPokemon from './CARD/CardPokemon';
import styled from 'styled-components';

const MainPokedex = styled.section`

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

const Header = styled.header`
  height: 100px;
  background-color: #DD1A1A;
`;

const Greeting = styled.h2`
  width: 1300px;
  margin: 10px auto;
`;


const Pokedex = () => {

  const pokemons = useFetch('https://pokeapi.co/api/v2/pokemon');
  //console.log(pokemons)

  const nameTrainer = useSelector(state => state.nameTrainer);

  return (
    <MainPokedex>

      <Header />
      

      <Greeting>{`Welcome Trainer to Pokedex APP >>${nameTrainer}<<`}</Greeting>

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