import React from 'react';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

import Typed from 'typed.js';

import darkBg from '../images/dark-background.png';

function Home () {
// For dark/light mode
  const { theme, setTheme } = useContext(ThemeContext);


  useEffect(() => {
    new Typed('.title', {
      strings: ['Welcome to My Website'],
      typeSpeed: 50
    });

    new Typed('.text', {
      strings: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non facilisis nisl. Donec aliquet mauris nibh, eget elementum nisi tempus sed. Aliquam erat volutpat.'
      ],
      typeSpeed: 10
    });
  }, [ theme, setTheme ]);

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${darkBg});
  z-index: -1;
`;
// TODO make one for light mode

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${theme === 'light' ? '#D3D3D3' : '#333'};
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: ${theme === 'light' ? '#D3D3D3' : '#333'};
  line-height: 1.5;
`;

  return (
    <Container>
    {theme === 'light' && <Stars />}
      <Content>
        <Title className="title"></Title>
        <Text className="text">
        </Text>
      </Content>
    </Container>
  );
};

export default Home;

