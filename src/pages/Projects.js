
import React from 'react';
import styled from 'styled-components';

import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
// components
import { Card } from '../components/FancyCard';

// images
import holidayCalendar from '../images/holidayCalendar.png';
import purrfection from '../images/purrfection.png';
import darkBgV2 from '../images/dark-backgroundV2.png';
import lightBg from '../images/light-background.png';

const cards = [
    {
      id: 1,
      title: 'Holiday Calendar',
      image: holidayCalendar,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'
    },
    {
      id: 2,
      title: 'Pet Store',
      image: purrfection,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'
    },
    {
      id: 3,
      title: 'Card 3',
      image: '/card3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 4,
      title: 'Card 4',
      image: '/card4.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 5,
      title: 'Card 5',
      image: '/card4.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 6,
      title: 'Card 6',
      image: '/card4.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
  ];


function Projects() {

  const { theme, setTheme } = useContext(ThemeContext);

  const darkMode = {
    backgroundColor: `#12130c`,
    color: '#D3D3D3'
  };
  
  const lightMode = {
    backgroundColor: `#cbd5e4`,
    color: '#333'
  };

  const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${'' /* gives endless height */}
  overflow: auto;
  justify-text: space-between;
  width: 100%;
  height: 100vh;
  margin: 0rem 2rem 1.5rem 2rem;
  padding: 1rem 1rem;
  ${'' /* TODO remove border once done */}
  border: 1px solid;
  background-color: ${theme === 'light' ? darkMode.backgroundColor : lightMode.backgroundColor};
  color: ${theme === 'light' ? darkMode.color : lightMode.color};
`;

  return (
    // className provided to center the Container div using bootstrap's CSS
    <CardContainer className ="mx-auto">
    {cards.map(card => (
      <Card 
        key={card.id}
        image={card.image}
        title={card.title}
        text={card.text}
        date={card.date}
        projectLink={card.projectLink}
      />
    ))}
  </CardContainer>
  )
      }

export default Projects;