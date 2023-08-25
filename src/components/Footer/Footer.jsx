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
    justify-content: space-around;
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

const Contact = styled.ul`
    display: flex;
    height: 30px;
`;

const Logo = styled.img`
    height: 100%;
   
`;

const Footer = () => {
  return (
    <FooterEnd>
        <RedLabel>
            <Contact>
                <li><a href="/images/github-1.png"><Logo src="/images/github-1.png" alt="" /></a></li>
            </Contact>
            <Autor>Application created by Jesus Arechider, all rights reserved</Autor>
            
        </RedLabel>
    </FooterEnd>

    
  )
}

export default Footer