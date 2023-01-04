import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

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

  const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme === 'light' ? darkMode.backgroundColor : lightMode.backgroundColor};
    color: ${theme === 'light' ? darkMode.color : lightMode.color};
    padding: 1.8rem;
    transition: background-color 0.2s ease-in-out;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &:hover {
      background-color: ${theme === 'light' ? darkMode.hoverBackground : lightMode.hoverBackground};
    }

    & a {
      color: ${theme === 'light' ? darkMode.color : lightMode.color};
      text-decoration: none;
    }

    & a:hover {
      color:  ${theme === 'light' ? darkMode.hoverColor : lightMode.hoverColor};
    }

    & .copyright {
      font-size: 0.8rem;
    }
  `;

  const Icon = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      display: block;
      margin: 0.5rem 0;
    }

    ${props =>
      props.github &&
      css`
        color: ${theme === 'light' ? '#888' : '#555'};
      `}

    ${props =>
      props.instagram &&
      css`
        color: #e4405f;
      `}

    ${props =>
      props.linkedin &&
      css`
        color: #0077b5;
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
    <FooterContainer>
      <div>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
          <Icon icon={faGithub} github />
        </a>
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
          <Icon icon={faInstagram} instagram />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
          <Icon icon={faLinkedin} linkedin />
        </a>
      </div>
      <div className="copyright">&copy;  {new Date().getFullYear()} KangaWorks</div>
  </FooterContainer>
);
};

export default Footer;
