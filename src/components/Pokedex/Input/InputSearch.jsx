import React, { useState } from 'react'
import styled from 'styled-components'

const SearchPokemon = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
`;

const ContainerSearch = styled.div`
  display: flex;
`;

const SearchIn = styled.input`
  padding: 10px 10%;
`;

const Button = styled.button`
  padding: 10px 20%;
  border-radius: 5px;
  color: white;
  background-color: #D93F3F;
  border-style: none;
`;

const SelectTypePokemon = styled.select`
  padding: 10px 30px;
`;

const OptionTypePokemon = styled.option`

`;


const InputSearch = ( { types, setPokeSearch, setPokeShType } ) => {

  const namePokemon = '';

  const handleSubmit = e => {
    e.preventDefault();
    const namePokemon = e.target.pokemonSh.value.trim().toLowerCase();
    //console.log(namePokemon)
    setPokeSearch(namePokemon);
    e.target.pokemonSh.value = '';
  };

  const handleSelect = e => {
    //console.log(e.target.value)
    const pokeIntype = e.target.value;
    setPokeSearch('')
    //console.log(pokeIntype)
    setPokeShType(pokeIntype)
  };
  
  return (
    <SearchPokemon onSubmit={handleSubmit}>
        <ContainerSearch >
          <SearchIn id='pokemonSh' placeholder='Introduce el nombre del Pokemon' />
          <Button >Search</Button>
        </ContainerSearch>
        <SelectTypePokemon id='selectPoke' onChange={handleSelect}>
          <OptionTypePokemon value=''>Select a Options</OptionTypePokemon>
          {
            types?.map( type => (
              <OptionTypePokemon key={type.name} value={type.name}>{type.name}</OptionTypePokemon>
            ))
          }
        </SelectTypePokemon>
    </SearchPokemon>
  )
}

export default InputSearch