import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const MainNoInfo = styled.section`
    
`;

const ContainerInfo = styled.article`
    height: calc(100vh - 250px) ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoInfo = () => {
  return (
    <MainNoInfo>
        <Header />
        <ContainerInfo>
            <img src="https://media.tenor.com/XoZyoVCRB5oAAAAC/estamos-perdidas-girls.gif" alt="" />
        </ContainerInfo>
    </MainNoInfo>
  )
}

export default NoInfo