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
    font-size: clamp(0.65rem, 2.5vw, 1rem);
`;

const Contact = styled.ul`
    display: flex;
    height: 30px;
    gap: 10px
`;

const Logo = styled.img`
    height: 100%;
   
`;

const Footer = () => {
  return (
    <FooterEnd>
        <RedLabel>
            <Contact>
                <li><a href="https://github.com/chocopros"><Logo src="/images/github-1.png" alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/jesusarechider/"><Logo src="/images/LinkedIn_icon_circle.svg.png" alt="" /></a></li>
            </Contact>
            <Autor>Application created by Jesus Arechider, all rights reserved</Autor>
            
        </RedLabel>
    </FooterEnd>

    
  )
}

export default Footer