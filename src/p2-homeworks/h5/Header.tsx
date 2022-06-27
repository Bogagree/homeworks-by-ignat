import React from 'react'
import {NavLink} from "react-router-dom";
import style from '../h5/HW5.module.css'
import {PATH} from "./RoutesComponent";

function Header() {
    return (
        <div>
            <nav className={style.menu}>
                <ul className={style.nav}>
                    <li><NavLink to={PATH.PRE_JUNIOR} className={style.nav__link}>pre_Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNOR} className={style.nav__link}>Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS} className={style.nav__link}>Junior +</NavLink></li>
                </ul>
                <div className={style.title}>HW5</div>
            </nav>
        </div>
    )
}

export default Header
