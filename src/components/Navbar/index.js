import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar () {
    const [theme, setTheme] = useState('light');

    const lightMode = {
        backgroundColor: '#333',
        color: '#D3D3D3'
    }

    const darkMode = {
        backgroundColor: '#fff',
        color: '#333'
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const NavbarContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme === 'light' ? lightMode.backgroundColor : darkMode.backgroundColor};
        color: ${theme === 'light' ? lightMode.color : darkMode.color};
        width: 100%;

        a {
            color: 	${theme === 'light' ? lightMode.color : darkMode.color};
        }
`
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0.5rem;

    a {
            margin: 0 1rem;
            text-decoration: none;
        }
`

return (
    <>
        <NavbarContainer>
            <img className="mx-4" src="/logo.png" alt="Logo" />
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </NavLinks>
        <button className="mx-4" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        </NavbarContainer>
    </>
)
};