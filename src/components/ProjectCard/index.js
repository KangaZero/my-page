import React from 'react';
import styled from 'styled-components';




const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  ${'' /* KEEP THIS CONSISTENT */}
  margin-top: 1.5rem;
  border: 1px solid;
`; 

const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  color: #333;
`;

function ProjectCard(props) {
    return (
      <CardContainer>
        <CardLink key={props.id} href={`/card/${props.id}`}>
          <Card direction="row">
            <CardHeader>
              <h3>{props.title}</h3>
              <button>Close</button>
            </CardHeader>
            <CardBody>
              <img src={props.image} alt={props.title} />
              <p>{props.content}</p>
            </CardBody>
          </Card>
        </CardLink>
      </CardContainer>
    )
  }

export default ProjectCard;