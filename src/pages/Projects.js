
import React from 'react';
import styled from 'styled-components';

// components
import { Card } from '../components/FancyCard';

// images
import holidayCalender from '../images/holidayCalendar.png';
import purrfection from '../images/purrfection.png';

const cards = [
    {
      id: 1,
      title: 'Card 1',
      image: holidayCalender,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://www.mozilla.org/'
    },
    {
      id: 2,
      title: 'Card 2',
      image: purrfection,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'
    },
    {
      id: 3,
      title: 'Card 3',
      image: '/card3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 4,
      title: 'Card 4',
      image: '/card4.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 5,
      title: 'Card 5',
      image: '/card4.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 6,
      title: 'Card 6',
      image: '/card4.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
  ];

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin: 1.5rem 2rem;
  padding: 1rem 1rem;
  ${'' /* TODO remove border once done */}
  border: 1px solid;
`;

function Projects() {
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