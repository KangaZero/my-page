import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

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

  const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme === 'light' ? lightMode.backgroundColor : darkMode.backgroundColor};
    color: ${theme === 'light' ? lightMode.color : darkMode.color};
    padding: 1rem;
    transition: background-color 0.2s ease-in-out;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &:hover {
      background-color: ${theme === 'light' ? lightMode.hoverBackground : darkMode.hoverBackground};
    }

    & a {
      color: ${theme === 'light' ? lightMode.color : darkMode.color};
      text-decoration: none;
    }

    & a:hover {
      color:  ${theme === 'light' ? lightMode.hoverColor : darkMode.hoverColor};
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
        color: #333;
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
      <div className="copyright">&copy;  {new Date().getFullYear()} Samuel Wai Weng Yong</div>
  </FooterContainer>
);
};

export default Footer;
