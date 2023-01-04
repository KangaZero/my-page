import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

  const handleSubmit = event => {
    event.preventDefault();

    // validation
    if (!name) {
      return alert('Name field is required');
    }
    if (!email && !phone) {
      return alert('Email or phone field is required');
    }
    if (email && !emailRegex.test(email)) {
      return alert('Invalid email format');
    }
    if (phone && !phoneRegex.test(phone)) {
      return alert('Invalid phone format');
    }

    // send form data to server or backend
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor='name'>Name:</Label>
        <Input type='text' id='name' value={name} onChange={e => setName(e.target.value)} required />
      <Label htmlFor='email'>Email:</Label>
        <Input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
      <Label htmlFor='phone'>Phone:</Label>
        <Input type='tel' id='phone' value={phone} onChange={e => setPhone(e.target.value)} />
      <Label htmlFor='message'>Message:</Label>
        <Textarea id='message' value={message} onChange={e => setMessage(e.target.value)} />
      <Button type='submit'>Send</Button>
    </Form>
    );
};

const Form = styled.form`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    width: 50%; 
    margin: 0 auto; 
    
    @media (max-width: 768px) { 
        width: 80%; 
};`

const Label = styled.label`
    font-size: 1.2rem; 
    margin: 1rem 0 0.5rem;
`;

const Input = styled.input`
    width: 100%; 
    padding: 0.5rem; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    font-size: 1.2rem; 
    margin-bottom: 1rem;
`;

const Textarea = styled.textarea `
    width: 100%; 
    height: 200px; 
    padding: 0.5rem; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    font-size: 1.2rem; 
    margin-bottom: 1rem;
`;

const Button = styled.button`
    width: 50%;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    background-color: #333;
    cursor: pointer;

    &:hover {
    background-color: #555;
    }
`;

export default Contact;
