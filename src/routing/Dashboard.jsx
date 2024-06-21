import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/navigation.css';

export default function Dashboard() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li><NavLink to="home">Home</NavLink></li>
                    <li><NavLink to="class-demo">Class Compo</NavLink></li>
                    <li><NavLink to="func-demo">Functional Compo</NavLink></li>
                    <li><NavLink to="lifecycle-demo">LifeCycle Demo</NavLink></li>
                    <li className="dropdown">
                        <NavLink to="hooks" className="dropbtn">Hooks</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="hooks/use-effect">Use Effect</NavLink>
                            <NavLink to="hooks/use-memo">Use Memo</NavLink>
                            <NavLink to="hooks/use-context">Use Context</NavLink>
                        </div>
                    </li>
                    <li className="dropdown">
                        <NavLink to="college" className="dropbtn">College</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="college/student">Students</NavLink>
                            <NavLink to="college/teacher">Teachers</NavLink>
                        </div>
                    </li>
                    <li><NavLink to="conditional-component">Conditional Compo</NavLink></li>
                    <li><NavLink to="axios">Axios</NavLink></li>
                    <li><NavLink to="counter">Counter</NavLink></li>
                    <li><NavLink to="map-demo">Map</NavLink></li>
                    <li><NavLink to="spa">SPA</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li>
                </ul>

            </nav>
            <Outlet/>
        </div>
    );
}

