import React, { useEffect, useState } from 'react'
import axios from 'axios'


const CardPokemon = ( { url } ) => {

    const [pokemon, setPokemon] = useState()

    useEffect(()=> {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    },[])

    console.log(pokemon)

  return (

    <article>
        <header>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
        </header>
        <section>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(slop => (
                        <li key={slop.type.url}> {slop.type.name} </li>
                    ))
                }
            </ul>
        </section>
     
    </article>

  )
}

export default CardPokemon