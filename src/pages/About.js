import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: gray;
`;

const Text = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  text-align: center;
`;

function About() {
  return (
    <Container>
      <ProfilePicture src="your-image-url-here" alt="Profile" />
      <Title>Your Name</Title>
      <Subtitle>Your Skills</Subtitle>
      <Text>Some text about you goes here</Text>
    </Container>
  );
}

export default About;
