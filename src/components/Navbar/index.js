import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { FaMoon, FaLightbulb} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { audio } from 'react-dom';

// logo
import  logo  from '../../images/logo.png';
// audio
import smoTheme from '../../audio/SMO-theme.mp3';


const Navbar = () => {
    const location = useLocation();
    // For Dark/Light Mode, uses global state
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
         
         &:hover {
            background-color: ${theme === 'light' ? lightMode.hoverBackground : darkMode.hoverBackground};
        }

       
        a {
            color: 	${theme === 'light' ? lightMode.color : darkMode.color};
            font-family: 'calibri';
            font-size: 1.2rem;
        }
        
        & a:hover {
            color:  ${theme === 'light' ? lightMode.hoverColor : darkMode.hoverColor};
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

            @media only screen and (max-width: 768px) {
            ${'' /* flex-direction:column; */}
        }

    a {
            margin: 0 1rem;
            text-decoration: none;

            @media only screen and (max-width: 768px) {
            ${'' /* margin: 0.5rem 0; */}
        }
    &:hover {
            transform: scale(1.1);
            transition: transform 0.2s;
    }
    &:active {
            transform: scale(1);
            transition: transform 0.2s;
        }
    }

    a[href='${location.pathname}'] {
      font-weight: bold;
    }
        
`

const NavbarImage = styled.img`
    &:hover {
    animation: spin-animation 2s linear infinite;
    document.getElementById('hover-sound').play();
    }

    @keyframes spin-animation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;
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
            <audio src={smoTheme} id="hover-sound"/>
            <NavbarImage 
            onMouseEnter={()=>document.getElementById('hover-sound').play()}
            onMouseLeave={() =>document.getElementById('hover-sound').pause()} 
            className="mx-4" src={logo} alt="Logo" style={{ height: 58, width: 58 }}  />
            <NavLinks>
                <Link to="/my-page">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </NavLinks>
        <ThemeButton className="mx-4" onClick={toggleTheme}>
            {theme === 'light' ? <StyledLightbulb  />: <StyledMoon /> }
        </ThemeButton>
        </NavbarContainer>
    );
};

export default Navbar;