import { NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faSun, faMoon} from "@fortawesome/free-regular-svg-icons";

import {movieAction} from "../../redux";
import css from './Header.module.css'


const Header = () => {
    const [theme,setTheme] = useState('light');

    const changeTheme = () => {
        if (theme ==='light'){
            setTheme('dark')
        }else {
            setTheme('light')
        }
    };

    useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = "#333"
            document.body.style.color = "white"
        } else {
            document.body.style.backgroundColor = "#fff"
            document.body.style.color = "black"

        }

    }, [theme]);

    const dispatch = useDispatch();

    const reset = () => {
        dispatch(movieAction.clickOnSearch())
    };

    return (

        <div className={css.Header}>
            <NavLink to={'/'}> Films </NavLink>
            <NavLink onClick={reset} to={'search'}> Search</NavLink>

            <button onClick={changeTheme}>{theme === 'light' ?
                <FontAwesomeIcon size={'2x'} icon={faSun}/> : <FontAwesomeIcon size={'2x'} icon={faMoon}/>}</button>

            <FontAwesomeIcon icon={faUserCircle} size="2x"/>

        </div>
    );
};

export {Header};