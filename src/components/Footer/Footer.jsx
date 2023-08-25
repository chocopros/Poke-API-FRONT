import React from 'react'
import styled from 'styled-components'

const FooterEnd = styled.footer`
    height: 100px;
    width: 100%;
    background-color: #DD1A1A;
    position: relative;
    
`;

const RedLabel = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    height: 40px;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;

`;

const Autor = styled.p`
    color: white;
    margin-right: 20px;
    font-size: small;
    

`;

const Footer = () => {
  return (
    <FooterEnd>
        <RedLabel>
            <Autor>Application created by Jesus Arechider, all rights reserved</Autor>
        </RedLabel>
    </FooterEnd>

    
  )
}

export default Footer