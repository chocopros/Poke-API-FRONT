import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Elements = styled.div`
    display: flex;
    
    margin-bottom: 50px
`;

const Button = styled.button`
    padding: 10px 15px;
    color: white;
    background-color: #DD1A1A;
`;

const Pagination = ( {next, previous, setPokemons}) => {

    const navigate = useNavigate()

    
    

    const handlePrevious = () => {
       console.log(previous)

       if ( previous !== null ) {
        axios.get(previous)
            .then(res => setPokemons(res.data))
            .catch(err => console.log(err))
       }

    };

    const handleNext = () => {
        console.log(next)

        axios.get(next)
            .then(res => setPokemons(res.data))
            .catch(err => console.log(err))
        
    };

    


  return (

    <ContainerPagination>
        <Elements>
            <Button onClick={handlePrevious}>{`<`}</Button>
            <img height={`70px`} src="/images/Vector-pokedex.jpg" alt="Pokebola" />
            <Button onClick={handleNext}>{`>`}</Button>
        </Elements>
    </ContainerPagination>

  )
}

export default Pagination