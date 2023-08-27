import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import PokeMotions from './InfoPoke/PokeMotions';
import PokeStats from './InfoPoke/PokeStats';

const MainDetailsPokemon = styled.section`
  min-height: calc(100vh - 100px);
`;

const ContainerInfoPoke = styled.article`

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
        />

      </ContainerInfoPoke>

    </MainDetailsPokemon>
  )
}

export default PokemonDetails