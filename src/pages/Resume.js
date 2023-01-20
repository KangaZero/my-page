import React, { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import Clipboard from 'clipboard';

import Resume2023 from '../files/Resume 2023.pdf';


export default function Resume() {
    // For dark/light mode
  const { theme, setTheme } = useContext(ThemeContext);

    const code = `
    # RESUME
  
    I am a full-stack web developer with experience in modern frameworks such as React, Node.js and Express. 
    Strong in customer service, teaching and time management. I speak multiple languages and hold JLPT N1 Certification.
    
    ## Skills
    
    - Experience with modern web development frameworks and libraries such as React, Node.js, and Express
    - Confident in using backend server frameworks and middlewares such as Apollo Express, Sequelize, Mongoose and Express-GraphQL 
    - Proficiency in HTML, CSS, and JavaScript, 
    - Includes 3rd party libraries - Handlebars.js, Tailwind & Bootstrap CSS, and JQuery.
    - Familiarity with database languages such as MySQL and MongoDB

    - Strong customer service skills
    - Experience in teaching and training others
    - Excellent attention to detail
    - Proficient in time management
    - Adaptable to changing situations

    ## Projects
    
    - Project 1: Implemented a search function for a web application that allows users to search for holidays and learn about their wikifacts using the built-in calendar widget.  
      - Led and delegated a team to complete the project. 
      - Utilized Node.js and Tailwind and implemented Wikipedia and Giphy APIs to provide dynamic content to users.
      - (Visit here)[https://purrfection-pet-store.herokuapp.com/]
      - (Github Repo)[https://github.com/KangaZero/purrfection]

    - Project 2: Developed a fully-functional e-commerce platform for buying and selling pets online.
      - My tasks: Included a user authentication system, backend API and seeding, profile page, and upload function feature.
      - Utilized Handlebars, MySQL, Express, and Tailwind to create a visually appealing and user-friendly platform.
      - (Visit here)[https://kangazero.github.io/holiday-calendar-discoverer/]
      - (Github Repo)[https://github.com/KangaZero//holiday-calendar-discoverer]

    - Project 3: A MERN full stack application to book and find petsitters.
      - My tasks: Implemented the user profile page, update user form and update profile picture form. 
        Created backend skeleton which includes seeding, models, schema, queries and mutations.
      - Ultilized MongoDB, Bootstrap-React, JWT, GraphQL and React to manage data, design responsive interfaces, 
        handle secure user authentication and authorization, handle efficient data retrieval and manipulation and create dynamic user experience.
      - (Visit here)[https://pet-nanny-msc.herokuapp.com/]
      - (Github Repo)[https://github.com/KangaZero/pet-nanny]

    
    ## Education
    
    - Bachelor of Arts, Major in Music and Japanese, 2019 - 2022
    - Coding bootcamp for "FullStack Web Development", 2022 July - 2023 January

    ## Certification

    - JLPT N1 Certification (2019) - Demonstrated advanced proficiency in reading, writing, and understanding Japanese language and culture.
    
    ## Languages

     - English (Native)
     - Japanese (Advanced)
     - Malay (Conversational), 
     - Mandarin Chinese (Lower-Intermediate)

    ## Work Experience

    - Food and Beverage Attendant 2019 October - 2021 December
      - Interacted with customers to provide excellent service and resolve any issues that arose.
         - Resolved customer complaints by offering a complimentary meal on their next visit.
      - Managed time effectively to complete tasks and meet deadlines in a fast-paced environment.
      - Adapted to changing situations and provided solutions to problems that arose.
        - Quickly came up with an alternative when we ran out of a popular menu item.

    - Freelance Piano Instructor 2019 - Present
      - Communicated with students and parents to understand their needs and goals.
      - Taught and trained students of all ages and skill levels in piano.
        - Adapted teaching style to fit the needs and learning styles of individual students.
      - Managed time effectively to plan and execute lessons, meet deadlines, and accommodate busy schedules.
        - Prepared students for piano exams with tailored lesson plans and ample practice time.
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
  margin: 1rem auto;
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

  //  change downloadURL to useState if fetching an API
    const downloadUrl = Resume2023;
    const [downloaded, setDownloaded] = useState(false);
    
    // const downloadResume = async () => {
    //   const response = await fetch('https://example.com/resume.pdf');
    //   const blob = await response.blob();
    //   setDownloadUrl(URL.createObjectURL(blob));
    // }

  return (
    <div className='d-flex'>
    <CodeSnippetButton ref={buttonRef} type="button">
      <FontAwesomeIcon className="mx-2" icon={copied ? faCheckCircle : faCopy} />
      <ButtonText>{copied ? 'Copied!' : 'Copy code'}</ButtonText>
    </CodeSnippetButton>
  
    <CodeSnippetButton type="button">
        <FontAwesomeIcon className="mx-2" icon={downloaded ? faCheckCircle : faDownload} />
        <ButtonText>{downloaded ? 'Downloaded!' : 'Download'}</ButtonText>
      </CodeSnippetButton>
      <a href={downloadUrl} download="resume.pdf" hidden={!downloadUrl} onClick={() => setDownloaded(true)} onLoad={() => setDownloaded(true)}>
      </a>

    </div>
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

// export default Resume;
