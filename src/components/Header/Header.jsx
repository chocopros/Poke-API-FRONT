import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Top = styled.header`
    height: 150px;
    background-color: #FD0000;
    position: relative;
    box-shadow: 5px 10px #00000015;
`;

const BlackLabel = styled.div`
    height: 40%;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
`;

const ContainerImg = styled.div`
  max-width: 300px;
  position: absolute;
  bottom: 40px;
  left: 50px ;
  z-index: 1;
`;

const LogoPokedex = styled.img`
    width: 100%;
`;

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex`)
  };

  return (
    <Top>

      <ContainerImg onClick={handleClick}>
        <LogoPokedex src='/images/POKEDEX-LOGO.png' />
      </ContainerImg>

      <BlackLabel />
    </Top>
  )
}

export default Header