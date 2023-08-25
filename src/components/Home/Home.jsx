import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainHome = styled.section`

  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;

`;

const ContainerLogo = styled.div`
  
  width:75vw;
  
`;


const LogoPokedex = styled.img`
  width: 100%;
  
`

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    const handleSubmit = e => {

        e.preventDefault();
        const nameTrainerPoke = e.target.name.value.trim();
        if (nameTrainerPoke.length !== 0) {
          dispatch(setNameTrainer(nameTrainerPoke));
          e.target.name.value = '';
          navigate('/pokedex')
        };
        
    };

  return (
    <MainHome>
      <ContainerLogo>
        <LogoPokedex src="/images/POKEDEX-LOGO.png" alt="Pokedex Logo" />
      </ContainerLogo>
        <h1>Hi Trainer! Pokemon</h1>
        <p>To Start give me your trainer name</p>
        <form onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button>Go!</button>
        </form>
    </MainHome>
  )
}

export default Home