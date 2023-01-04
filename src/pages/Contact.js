import React from 'react';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

import darkBgV2 from '../images/dark-backgroundV2.png';
import lightBg from '../images/light-background.png';

const Contact = () => {
    // For dark/light mode
    const { theme, setTheme } = useContext(ThemeContext);

    const lightMode = {
        backgroundColor: '#333',
        hoverBackground: '#555',
        color: '#D3D3D3',
        hoverColor: '#E3D3D3'
    }

    const darkMode = {
        backgroundColor: '#d8e8e6',
        hoverBackground: '#f9f9ff',
        color: '#333',
        hoverColor: '#111'
    }

    //    For Fade-in animation of text when page renders, and depended on when the theme changes
      const [isLoaded, setIsLoaded] = useState(false);
    
      useEffect(() => {
        setIsLoaded(true);
      }, [theme, setTheme]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

  const handleSubmit = async (e) => {
   e.preventDefault();
  
   // validation
   setNameError('');
   setEmailError('');
   setPhoneError('');

   if (!name) {
     setNameError('This field is required');
   }
   if (!email && !phone) {
     setEmailError('Either email or phone is required');
     setPhoneError('Either email or phone is required');
   }
   if (email && !emailRegex.test(email)) {
     setEmailError('Invalid email format');
   }
   if (phone && !phoneRegex.test(phone)) {
     setPhoneError('Invalid phone format');
   }

   if (nameError || emailError || phoneError) {
     // there was an error, do not submit form
     return;
   }

   // send form data to server or backend
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ name, email, phone, message }),
   });

   if (response.ok) {
     // form was successfully submitted
     setName('');
     setEmail('');
     setPhone('');
     setMessage('');
   } else {
        // there was an error
        alert('An error occurred while submitting the form');
      }
};

  const Form = styled.form`
    display: flex; 
    flex-direction: column; 
    align-items: start;
    width: 50%;
    height: 80vh; 
    margin: 0 auto; 
    font-family: Futara;
    color: ${theme === 'light' ? '#D3D3D3' : '#333'};
 
    @media (max-width: 768px) { 
        width: 80%; 
        height: 71vh;
        margin: 4vh auto 0 auto;
};`

const Label = styled.label`
    font-size: 1.3rem;
    font-style: italic;
    margin: 1rem 0 0.5rem;
   animation: fade-in 0.5s forwards;

   @media (max-width: 768px) { 
    margin: 0.5rem 0 0;
   }
`;

const Error = styled.span`
  color: red;
  font-size: 0.9rem;
`;

const Input = styled.input`
    width: 100%; 
    padding: 0.5rem; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    font-size: 1.2rem; 
    margin-bottom: 1rem;
    color: ${theme === 'light' ? lightMode.hoverColor : darkMode.hoverColor};
    background-color: ${theme === 'light' ? lightMode.hoverBackground : darkMode.hoverBackground};
`;

const Textarea = styled.textarea `
    width: 100%; 
    height: 200px; 
    padding: 0.5rem; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    font-size: 1.2rem; 
    margin-bottom: 1rem;
    color: ${theme === 'light' ? lightMode.hoverColor : darkMode.hoverColor};
    background-color: ${theme === 'light' ? lightMode.hoverBackground : darkMode.hoverBackground};
    overflow: auto;
`;

const Button = styled.button`
    width: 50%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    align-self: end;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${theme === 'light' ? '#D3D3D3' : '#333'};
    background-color: ${theme === 'light' ? lightMode.backgroundColor : darkMode.backgroundColor};
    cursor: pointer;
   animation: fade-in 0.5s 0.3s backwards;
   @media (max-width: 768px) { 
    align-self: center;
   }


    &:hover {
        background-color: ${theme === 'light' ? lightMode.hoverBackground : darkMode.hoverBackground};
        color: ${theme === 'light' ? '#D3D3D3' : '#333'};
    }
`;

// Backgrounds
const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${darkBgV2});
  background-repeat: repeat;
  z-index: -1;

  @media (max-width: 1024px) {
    backgroundColor: '#12130c';
  }
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${lightBg});
  background-repeat: repeat;
  z-index: -1;

  @media (max-width: 1024px) {
    backgroundColor: '#cbd5e4';
  }
`;

  return (
        <Form onSubmit={handleSubmit}>
        {theme === 'light' && <Stars />}
        {theme !== 'light' && <Sky />}
        <Label htmlFor='name'>Name:  {nameError && <Error>{nameError}</Error>} </Label>
            <Input type='text' id='name' value={name} onChange={e => setName(e.target.value)} required />
        <Label htmlFor='email'>Email: {emailError && <Error>{emailError}</Error>}</Label>
            <Input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
        <Label htmlFor='phone'>Phone: {phoneError && <Error>{phoneError}</Error>}</Label>
            <Input type='tel' id='phone' value={phone} onChange={e => setPhone(e.target.value)} />
        <Label htmlFor='message'>Message:</Label>
            <Textarea id='message' value={message} onChange={e => setMessage(e.target.value)} />
        <Button type='submit'>Send</Button>
        </Form>
    );
};



export default Contact;
