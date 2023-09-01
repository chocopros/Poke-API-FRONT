import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Elements = styled.div`
    display: flex;
`;

const Button = styled.button`
    padding: 10px 15px;
`;

const Pagination = ( {next, previous}) => {

    const navigate = useNavigate()

    const handlePrevious = () => {
       
    };

    const handleNext = () => {

    };

    


  return (

    <ContainerPagination>
        <Elements>
            <Button onClick={handlePrevious}>{`<`}</Button>
            <Button>{`>`}</Button>
        </Elements>
    </ContainerPagination>

  )
}

export default Pagination