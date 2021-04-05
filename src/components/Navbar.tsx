import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper pr light-blue darken-3">
                <NavLink to="/" className="brand-logo right">Todos</NavLink>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Список</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Информация</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}