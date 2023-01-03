
import React from 'react';
import styled from 'styled-components';

import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
// components
import ProjectCard  from '../components/ProjectCard';

// images
import holidayCalendar from '../images/holiday-calendar.png';
import purrfection from '../images/purrfection.png';
import teamProfileGenerator from '../images/team-profile-generator.png';
import weatherDashboard from '../images/weather-dashboard.png';
import codingQuiz from '../images/coding-quiz.png';
import workDayScheduler from '../images/work-day-scheduler.png';


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
      title: 'Profile Generator',
      image: teamProfileGenerator,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: weatherDashboard,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 5,
      title: 'Coding Quiz',
      image: codingQuiz,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
    {
      id: 6,
      title: 'Work Day Scheduler',
      image: workDayScheduler,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'

    },
  ];


const TestProjects = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const darkMode = {
    backgroundColor: `#222`,
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
  margin: 0rem 2rem;
  padding: 1rem 1rem;
  background-color: ${theme === 'light' ? darkMode.backgroundColor : lightMode.backgroundColor};
  color: ${theme === 'light' ? darkMode.color : lightMode.color};
`;

  return (
    // className provided to center the Container div using bootstrap's CSS
    <CardContainer className ="mx-auto">
    {cards.map(card => (
      <ProjectCard 
        key={card.id}
        image={card.image}
        title={card.title}
        text={card.text}
        projectLink={card.projectLink}
      />
    ))}
  </CardContainer>
  )
      }

export default TestProjects;