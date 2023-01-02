import React, { useReducer } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { FaMoon, FaLightbulb} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import { useTheme } from '../../utils/ThemeContext';
import { reducer } from '../../utils/reducers';
import { TOGGLE_THEME } from '../../utils/actions';

// logo
import  logo  from '../../images/logo.png';


const FancyNavbar = () => {
    const location = useLocation();
    // const [theme, setTheme] = useState('light');
  const initialState = useTheme();
  const [state, dispatch] = useReducer(reducer, initialState);


    const themeStyles = {
        background: state.darkTheme
        ? '#333'
        : '#fff',
        color: '#D3D3D3'
    }



    const NavbarContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: themeStyles.background;
        color: themeStyles.color;
        width: 100%;
       
        a {
            color: 	themeStyles.color;
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
        }
`
    // Styles the lightbulb fa-icon from it's default black colour to white
    const StyledLightbulb = styled(FaLightbulb)`
    color: white;
    `;

return (
    <>
        <NavbarContainer>
            <img className="mx-4" src={logo} alt="Logo" style={{ height: 58, width: 58 }}  />
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </NavLinks>
        <button className="mx-4" onClick={() =>
          dispatch({ type: TOGGLE_THEME, payload: state.darkTheme })
        }>
            {state.darkTheme ? <StyledLightbulb  />: <FaMoon /> }
        </button>
        </NavbarContainer>
    </>
)
};

export default FancyNavbar;