import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './StyleColorPokemon.css'
import { useNavigate } from 'react-router-dom';

const ArticleCard = styled.div`

    display: flex;
    align-items: center;
    padding-left: 30px;
    
    position: relative;
    width: 300px;
    height: 200px;
    
    border-radius: 15px;
    padding-top: -10px;
    overflow: hidden;

    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: transform 200ms ease;
        -webkit-box-shadow: 10px 10px 34px -12px rgba(0,0,0,0.45);
        -moz-box-shadow: 10px 10px 34px -12px rgba(0,0,0,0.45);
        box-shadow: 10px 10px 34px -12px rgba(0,0,0,0.45);
    }
    
`;

const ImgPokemon = styled.img`

    display: inline-block;
    height: 150px;
    bottom: 25px;
    right: 10px;
    position: absolute;
    z-index: 2;
`;

const BgPoke = styled.img`
    display: inline-block;
    height: 180px;
    bottom: -35px;
    right: -10px;
    position: absolute;
    z-index: 1;
    opacity: 0.07;
`

const SectionsDetails = styled.section`
   display: flex;
   flex-direction: column;
   width: 100px;
`;

const PokemonName = styled.h2`
    margin-bottom: 15px;
    text-transform: capitalize;
    color: #fff;
`

const ListTypeElement = styled.ul`
    list-style: none;
    color: #fff;
    
`
const ElementSlop = styled.li`
    border-radius: 15px;
    padding: 7px 0;
    margin-bottom: 15px;
    text-align: center;
`

const CardPokemon = ( { url } ) => {

    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    },[url])

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.name}`)
    };


  return (

    <ArticleCard onClick={handleClick} className={`${pokemon?.types[0].type.name}`} >

        <ImgPokemon src={pokemon?.sprites.other['official-artwork']['front_default']} alt={pokemon?.name}  />
        <BgPoke src='/images/pokeBallBg.png' />

        <SectionsDetails>
            <PokemonName>{pokemon?.name}</PokemonName>
            <ListTypeElement>
                {
                    pokemon?.types.map(slop => (
                        <ElementSlop  className={`${pokemon?.types[0].type.name}-slop`}  key={slop.type.url}> {slop.type.name} </ElementSlop >
                    ))
                }
            </ListTypeElement>
        </SectionsDetails>

    </ArticleCard>
        
     
    

  )
}

export default CardPokemon