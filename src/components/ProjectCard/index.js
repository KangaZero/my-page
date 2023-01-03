import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({projectLink, liveLink, title, text, image }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    const darkMode = {
      backgroundColor: '#333',
      hoverBackground: '#555',
      color: '#D3D3D3',
      hoverColor: '#E3D3D3'
  }

    const lightMode = {
      backgroundColor: '#d8e8e6',
      hoverBackground: '#f9f9ff',
      color: '#333',
      hoverColor: '#111'
  }

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 2.8rem auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    margin: 1.5rem;
  }

  @media (max-width: 1024px) {
    margin: 1.8rem;
    width: 500px;

  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const CardText = styled.p`
  margin: 1rem 0 0;
  font-size: 1rem;
  text-align: center;
`;

const CardIcons = styled.div`
  display: flex;
  padding: 1rem;
`;

// const Icon = styled.a`
//   display: inline-block;
//   width: 30px;
//   height: 30px;
//   background-color: #333;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 30px;
//   color: #fff;
// `;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 0.5rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    margin: 0.5rem;
  }

  ${props =>
  props.github &&
  css`
    color: ${theme === 'light' ? '#888' : '#555'};
  `}

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }

  &:active {
    transform: scale(1);
    transition: transform 0.2s;
  }
  `;


return (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardIcons>
        <a href={projectLink}>
          <Icon icon={faGithub} github />
        </a>
        <a href={liveLink}>
        <Icon icon={faNpm} github />
        </a>
      </CardIcons>
    </CardBody>
  </CardContainer>
)
};


export default ProjectCard;