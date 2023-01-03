import React from 'react';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

// Profile picture
import profileImg from '../images/profile.png';

import darkBgV2 from '../images/dark-backgroundV2.png';
import lightBg from '../images/light-background.png';



function About() {
    // For dark/light mode
  const { theme, setTheme } = useContext(ThemeContext);


  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  padding-top: 1rem;
  margin: 5vh auto;
  font-family: Garamond;
  color: ${theme === 'light' ? '#D3D3D3' : '#333'};
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 1rem;
  color: ${theme === 'light' ? '#888' : '#555'};
  font-family: Futara;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  text-align: center;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${darkBgV2});
  z-index: -1;
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${lightBg});
  z-index: -1;
`;

  return (
    <Container>
    {theme === 'light' && <Stars />}
    {theme !== 'light' && <Sky />}
      <ProfilePicture src={profileImg} alt="Profile" />
      <Title>Samuel Wai Weng Yong</Title>
      <Subtitle>MERN Full-Stack Developer</Subtitle>
      <Description>Hi there! My name is Samuel Wai Weng Yong, and I am a fullstack web developer. I am soon to be completing my bootcamp course at the end of January 2023. 
        I may be new to the world of web development, but I am always eager to learn and improve!</Description>
    </Container>
  );
}

export default About;
