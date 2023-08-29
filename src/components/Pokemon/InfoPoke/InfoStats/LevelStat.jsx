import React from 'react'
import styled from 'styled-components';

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
    border-radius: 15px;
`
const YellowLabel = styled.div`
    position: absolute;
    top: 0;
    height: 30px;
    background: rgb(252,214,118);
    background: linear-gradient(90deg, rgba(252,214,118,1) 0%, rgba(230,144,30,1) 45%, rgba(255,58,0,1) 100%);
    border-radius: 15px;
`;

const LevelStat = ({ name, level }) => {

    return (
        <ContainerStat >

            <TitleStat>
                <h3>{name}</h3>
                <h3>{`${level} / 150`}</h3>
            </TitleStat>
            
            <ContainerBarra>
                <GreyLabel className="grey__label"></GreyLabel>
                <YellowLabel style={{ width: `${level}%` }} className="yellow__label"></YellowLabel>
            </ContainerBarra>

        </ContainerStat>
    )
}

export default LevelStat