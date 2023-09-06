import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch';
import CardPokemon from './CARD/CardPokemon';
import styled from 'styled-components';
import Header from '../Header/Header';
import InputSearch from './Input/InputSearch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination/Pagination';


const MainPokedex = styled.section`
  min-width: 320px;
  min-height: calc(100vh - 100px);
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


  const [pokemons, setPokemons] = useState();
  //console.log(pokemons)

  //! SEARCH *//
  const [pokeSearch, setPokeSearch] = useState('');
  const [pokeShType, setPokeShType] = useState('');


  const typePokemons = useFetch('https://pokeapi.co/api/v2/type')
  //console.log(typePokemons)

  const nameTrainer = useSelector(state => state.nameTrainer);

  useEffect(()=>{

    let URL;
    let arr = {};

    if (pokeSearch) {
      arr = {
        results: [
          {
            name: pokeSearch,
            url: `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
          }
        ]
      };

      setPokemons(arr)
    
      
    } else if (pokeShType) {

      URL = `https://pokeapi.co/api/v2/type/${pokeShType}`
     
      axios.get(URL)
        .then(res => {

          const obj = res.data.pokemon.map( e => e.pokemon)
          
          arr = {
            results: [obj]
          }

          console.log(arr)

          setPokemons({results: obj})

        })
        .catch(err => console.log(err))


      
    } else {
      URL = 'https://pokeapi.co/api/v2/pokemon'
        axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    };

  },[pokeSearch, pokeShType])

  const next = pokemons?.next
  const previous = pokemons?.previous

  return (
    <MainPokedex>

      <Header />
      
      <Greeting>{`Welcome ${nameTrainer}, to Pokedex!!`}</Greeting>

      <InputSearch
        types={typePokemons?.results}
        setPokeSearch={setPokeSearch}
        setPokeShType={setPokeShType}
      />

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

      <Pagination
        next={next}
        previous={previous}
        setPokemons={setPokemons}
      />

    </MainPokedex>
  )
}

export default Pokedex