import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar () {
    const [theme, setTheme] = useState('light');

    const lightMode = {
        backgroundColor: '#333',
        color: '#fff'
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
        background-color: ${theme === 'light' ? lightMode.backgroundColor : darkMode.backgroundColor};
        color: ${theme === 'light' ? lightMode.color : darkMode.color};
    `

    return (
        <>
            <NavbarContainer>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            <button onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            </NavbarContainer>
        </>
    )
};

