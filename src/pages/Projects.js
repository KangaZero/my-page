// import React from 'react';
// import styled from 'styled-components';

// // components
// import ProjectCard from '../components/ProjectCard';



// function Projects() {
//   return (
//     <>
//       {cards.map(card => (
//         <ProjectCard
//           key={card.id}
//           id={card.id}
//           title={card.title}
//           image={card.image}
//           content={card.content}
//         />
//       ))}
//     </>
//   )
//       }

// export default Projects;

// Alternative
import React from 'react';
import styled from 'styled-components';

import { Card } from '../components/FancyCard';

const cards = [
    {
      id: 1,
      title: 'Card 1',
      image: '/card1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970'
    },
    {
      id: 2,
      title: 'Card 2',
      image: '/card2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970'
    },
    {
      id: 3,
      title: 'Card 3',
      image: '/card3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '1/1/1970'
    },
  ];

function Projects() {
  return (
    <div>
    {cards.map(card => (
      <Card
        key={card.id}
        image={card.image}
        title={card.title}
        text={card.text}
        date={card.date}
      />
    ))}
  </div>
  )
      }

export default Projects;