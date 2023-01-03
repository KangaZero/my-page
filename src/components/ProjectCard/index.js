import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const ProjectCard = ({projectLink, title, text, image }) => (
  <CardContainer>
    <a href={projectLink}>
    <CardImage src={image} alt={title} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardBody>
    </a>
  </CardContainer>
);


export default ProjectCard;