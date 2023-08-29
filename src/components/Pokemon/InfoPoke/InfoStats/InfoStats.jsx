import React from 'react'
import styled from 'styled-components';
import LevelStat from './LevelStat';

const InfoStats = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin: 50px 0;
`;

const ContainerStats = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const ContainerStat = styled.div`
    margin: 20px 0;
`;

const TitleStat = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContainerBarra = styled.div`
    position: relative;
`;

const GreyLabel = styled.div`
    width: 100%;
    height: 30px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(194,194,194,1) 45%, rgba(106,106,106,1) 100%);
`
const YellowLabel = styled.div`
    position: absolute;
    top: 0;
    height: 30px;
    background: rgb(252,214,118);
    background: linear-gradient(90deg, rgba(252,214,118,1) 0%, rgba(230,144,30,1) 45%, rgba(255,58,0,1) 100%);
`;


const InfoStatsComponent = ( {hpPokemon, defensePokemon, attackPokemon, speedPokemon} ) => {

    const pokemonStats = {
        HP: hpPokemon || 'load',
        DEFENSA: defensePokemon || 'load',
        ATTACK: attackPokemon || 'load',
        SPEED: speedPokemon || 'load'
    };


    return (
        <InfoStats>

            <h2>Stats</h2>

            <ContainerStats className="container__stats">

                <LevelStat
                    name='HP' 
                    level={pokemonStats.HP}
                />

                <LevelStat
                    name='DEFENSA' 
                    level={pokemonStats.DEFENSA}
                />

                <LevelStat
                    name='ATTACK' 
                    level={pokemonStats.ATTACK}
                />

                <LevelStat
                    name='SPEED' 
                    level={pokemonStats.SPEED}
                />

                
            </ContainerStats>

        </InfoStats>
    )
}

export default InfoStatsComponent