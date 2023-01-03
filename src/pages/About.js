import React from 'react';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { FaGithub } from 'react-icons/fa';
// Profile picture
import profileImg from '../images/profile.png';

import darkBgV2 from '../images/dark-backgroundV2.png';
import lightBg from '../images/light-background.png';



function About() {
    // For dark/light mode
  const { theme, setTheme } = useContext(ThemeContext);

//    For Fade-in animation of text when page renders, and depended on when the theme changes
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [theme, setTheme]);


  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 70.5vh;
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
  transition: transform 0.2s;

    &:hover {
  transform: scale(1.05);
    }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  opacity: 0;
  animation: fade-in 0.5s forwards;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-style: italic;
  font-family: Futara;
  margin-top: 1rem;
  color: ${theme === 'light' ? '#888' : '#555'};
  opacity: 0;
  animation: fade-in 0.5s 0.2s forwards;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  text-align: center;
  opacity: 0;
  animation: fade-in 0.5s 0.4s forwards;
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  color: ${theme === 'light' ? '#888' : '#555'};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${theme === 'light' ? '#555' : '#888'};
  }
`;

// Backgrounds
const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${darkBgV2});
  background-repeat: repeat;
  z-index: -1;

  @media (max-width: 1024px) {
    backgroundColor: '#12130c';
  }
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${lightBg});
  background-repeat: repeat;
  z-index: -1;

  @media (max-width: 1024px) {
    backgroundColor: '#cbd5e4';
  }
`;

  return (
    <Container>
    {theme === 'light' && <Stars />}
    {theme !== 'light' && <Sky />}
      <ProfilePicture src={profileImg} alt="Profile" />
      <Title>
      Samuel Wai Weng Yong
      </Title>
      <Subtitle>
      MERN Full-Stack Developer
      </Subtitle>
      <Description>
      Hi there! My name is Samuel Wai Weng Yong, and I am a fullstack web developer. I am soon to be completing my bootcamp course at the end of January 2023. 
        I may be new to the world of web development, but I am always eager to learn and improve!
        </Description>
        <GitHubLink href="https://github.com/KangaZero">
            <FaGithub size={32} />
             GitHub
          </GitHubLink>
    </Container>
  );
}

export default About;
