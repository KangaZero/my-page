
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
import petNanny from '../images/pet-nanny.png';


const cards = [
    {
      id: 7,
      title: 'Pet Nanny',
      image: petNanny,
      text: 'Want a holiday? But who will take care of my pet? We will!',
      projectLink: 'https://github.com/mecuboi/pet-nanny',
      liveLink: 'https://pet-nanny-msc.herokuapp.com/'
    },
    {
      id: 1,
      title: 'Holiday Calendar',
      image: holidayCalendar,
      text: 'Wiki facts about holidays you pick from our calendar',
      projectLink: 'https://kangazero.github.io/holiday-calendar-discoverer/',
      liveLink: 'https://kangazero.github.io/holiday-calendar-discoverer/'
    },
    {
      id: 2,
      title: 'Pet Store',
      image: purrfection,
      text: `Looking or selling your pet? It's all here!`,
      projectLink: 'https://github.com/KangaZero/purrfection',
      liveLink: 'https://purrfection-pet-store.herokuapp.com/'
    },
    {
      id: 3,
      title: 'Profile Generator',
      image: teamProfileGenerator,
      text: `Create your teams' profile cards with KangaZero's inbuilt CMS`,
      projectLink: 'https://github.com/KangaZero/Team_Profile_Generator',
      liveLink: 'https://kangazero.github.io/Team_Profile_Generator/'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: weatherDashboard,
      text: 'Want to know the weather for your city? Look no more',
      projectLink: 'https://github.com/KangaZero/kangazero.weatherdashboard.io',
      liveLink: 'https://kangazero.github.io/kangazero.weatherdashboard.io/'
    },
    {
      id: 5,
      title: 'Coding Quiz',
      image: codingQuiz,
      text: 'Brush up on your coding knowledge',
      projectLink: 'https://github.com/KangaZero/kangazero.Coding_quiz.io',
      liveLink: 'https://kangazero.github.io/kangazero.Coding_quiz.io/'
    },
    {
      id: 6,
      title: 'Work Day Scheduler',
      image: workDayScheduler,
      text: 'The lovely 9 to 5 to plan your totally wanting to do stuff',
      projectLink: 'https://github.com/KangaZero/kangazero.scheduler.io',
      liveLink: 'https://kangazero.github.io/kangazero.scheduler.io/'
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
        liveLink={card.liveLink}
      />
    ))}
  </CardContainer>
  )
      }

export default TestProjects;