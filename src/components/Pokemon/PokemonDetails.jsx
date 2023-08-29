import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import PokeStats from './InfoPoke/PokeStats';
import MotionsPoke from './MotionsPoke/MotionsPoke';

const MainDetailsPokemon = styled.section`
  
`;

const ContainerInfoPoke = styled.article`
  min-height: calc(100vh - 100px);
  max-width: 1300px;
  margin: 0 auto;
  background-color: rgb(243, 243, 243);
`;


const PokemonDetails = () => {

  const {name} = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, setPokemon] = useState()

  useEffect(()=> {
    axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    },[url])

    console.log(pokemon)
  
    

  return (
    <MainDetailsPokemon>
  
      <Header  />

      <ContainerInfoPoke>
        
        <PokeStats
          id={pokemon?.id} 
          name={pokemon?.name}
          imgPokemon={pokemon?.sprites.other['official-artwork']['front_default']}
          typeBg={pokemon?.types[0].type.name}
          weight={pokemon?.weight}
          height={pokemon?.height}
          types={pokemon?.types}
          abilities={pokemon?.abilities}
          stats={pokemon?.stats}
        />
        
        <MotionsPoke />
        

      </ContainerInfoPoke>

    </MainDetailsPokemon>
  )
}

export default PokemonDetails