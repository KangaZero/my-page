import React, { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import Clipboard from 'clipboard';


const Resume = () => {
    // For dark/light mode
  const { theme, setTheme } = useContext(ThemeContext);

    const code = `
    # RESUME
  
    I am a full stack web developer with a Bachelor of Arts degree from 2019 to 2022 and a 6-month coding bootcamp under my belt.
    
    ## Skills
    
    - Strong foundation in computer science principles
    - Proficiency in HTML, CSS, and JavaScript
    - Experience with modern web development frameworks and libraries such as React, Node.js, and Express
    - Familiarity with server-side languages and frameworks such as Python and Django
    
    ## Education
    
    - Bachelor of Arts, Major in Computer Science, 2019 - 2022
    - 6-month coding bootcamp, 2022 July - 2023 January
    
    ## Projects
    
    - Project 1: A web application that allows users to search and book vacation rentals
      - Technologies used: React, Node.js, Express, MongoDB
      - Responsibilities: Implemented the search and booking functionality
    - Project 2: A social media platform for pet owners
      - Technologies used: Django, Python, PostgreSQL
      - Responsibilities: Developed the backend API and implemented the user authentication system
    
    ## Personal Interests
    
    In my free time, I enjoy staying up to date with the latest developments in the tech industry and tinkering with new technologies. 
    I am also an avid animal lover and enjoy spending time with my pets.
    `;
    const language = 'markdown';

    const darkMode = {
        CodeSnippetContainerBackgroundColor: '#444',
        CodeSnippetContainerColor: '#fff',
        backgroundColor: '#222',
        hoverBackground: '#555',
        color: '#D3D3D3',
        hoverColor: '#E3D3D3'
    }
    
      const lightMode = {
        CodeSnippetContainerBackgroundColor: '#fff',
        CodeSnippetContainerColor: '#111',
        backgroundColor: '#cbd5e4',
        hoverBackground: '#f9f9ff',
        color: '#333',
        hoverColor: '#111'
    }

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme === 'light' ? darkMode.backgroundColor : lightMode.backgroundColor};
`


const ButtonText = styled.span`
  font-size: 1rem;
  vertical-align: middle;
`;

const CodeSnippetContainer = styled.div`
  width: 80%;
  margin: 0 auto -0.5rem auto;
  background-color: ${theme === 'light' ? darkMode.CodeSnippetContainerBackgroundColor : lightMode.CodeSnippetContainerBackgroundColor};
  color: ${theme === 'light' ? darkMode.CodeSnippetContainerColor : lightMode.CodeSnippetContainerColor};
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const CodeSnippetPre = styled.pre`
  margin: 0;
  white-space: pre-wrap;
`;

const CodeSnippetButton = styled.button`
  display: block;
  margin: 1rem 1rem 1rem auto;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #555;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

const CodeBlock = ({ language, code }) => {
  const languageClass = `language-${language}`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={languageClass}>
      <code className={languageClass}>{code}</code>
    </pre>
  );
};

const CopyButton = ({ code }) => {
  const buttonRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const clipboard = new Clipboard(buttonRef.current, {
      text: () => code,
    });

    clipboard.on('success', () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      });

    return () => {
      clipboard.destroy();
    };
  }, [code]);

  return (
    <CodeSnippetButton ref={buttonRef} type="button">
      <FontAwesomeIcon className="mx-2" icon={copied ? faCheckCircle : faCopy} />
      <ButtonText>{copied ? 'Copied!' : 'Copy code'}</ButtonText>
    </CodeSnippetButton>
  );
};

  return (
    <Background>
    <CodeSnippetContainer>
    <CodeSnippetPre></CodeSnippetPre>
        <CopyButton code={code} />
        <CodeBlock language={language} code={code} />
    </CodeSnippetContainer>
    </Background>
    );
};

export default Resume;
