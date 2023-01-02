import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { FaMoon, FaLightbulb} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// logo
import  logo  from '../../images/logo.png';


const Navbar = () => {
    const location = useLocation();
    const { theme, setTheme } = useContext(ThemeContext);

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

        @media only screen and (max-width: 768px) {
            flex-direction:column;
            justify-content: start;
        }
       
        a {
            color: 	${theme === 'light' ? lightMode.color : darkMode.color};
            font-family: 'calibri';
            font-size: 1.2rem;
        }

        button {
            border-radius: 20%;
            padding: 2px 5px;  
            border: none;
            background: none;
        }

        button:hover {
            background-color: #555;
            color: #fff;
        }

        button:active {
            background-color: #333;
            color: #fff;
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

    a[href='${location.pathname}'] {
      font-weight: bold;
    }
        
`
    // Styles the lightbulb fa-icon from it's default black colour to white
    const StyledLightbulb = styled(FaLightbulb)`
    color: white;
    @media only screen and (max-width: 768px) {
            height: 50px;
            width: 50px;
        }
    `;

    const StyledMoon = styled(FaMoon)`
    @media only screen and (max-width: 768px) {
            height: 50px;
            width: 50px;
        }
    `;

    const ThemeButton = styled.button`
          @media only screen and (max-width: 768px) {
            height: 64px;
            width: 64px;
        }
    `;

return (
        <NavbarContainer>
            <img className="mx-4" src={logo} alt="Logo" style={{ height: 58, width: 58 }}  />
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </NavLinks>
        <ThemeButton className="mx-4" onClick={toggleTheme}>
            {theme === 'light' ? <StyledLightbulb  />: <StyledMoon /> }
        </ThemeButton>
        </NavbarContainer>
)
};

export default Navbar;