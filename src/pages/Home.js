import React from 'react';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

import Typed from 'typed.js';

// import darkBg from '../images/dark-background.png';
import darkBgV2 from '../images/dark-backgroundV2.png';
import lightBg from '../images/light-background.png';

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
  ${'' /* Same height as About Page */}
  height: 80.5vh;
  ${'' /* height: 100%; */}
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
  font-family: Garamond;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: ${theme === 'light' ? '#D3D3D3' : '#333'};
  line-height: 1.5;
  font-family: Futara;
`;

  return (
    <Container>
    {theme === 'light' && <Stars />}
    {theme !== 'light' && <Sky />}
      <Content>
        <Title className="title"></Title>
        <Text className="text">
        </Text>
      </Content>
    </Container>
  );
};

export default Home;

