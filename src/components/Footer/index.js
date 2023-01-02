import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  padding: 1rem;
`;

const SocialLinks = styled.div`
  a {
    color: #fff;
    margin-right: 20px;
  }

  a:hover {
    color: #eee;
  }
`;

const CopyrightTag = styled.section`
  p {
    margin: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/KangaZero" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
      </SocialLinks>
      <CopyrightTag>
        <p>Copyright &copy; {new Date().getFullYear()} by Samuel Wai Weng Yong</p>
      </CopyrightTag>
    </FooterContainer>
  );
}

export default Footer;