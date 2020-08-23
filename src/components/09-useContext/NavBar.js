import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="./">MGQ - useContext</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
            </div>
        </div>
        </nav>
        // <nav>
        //     <ul>
        //         <li>
        //             {/* <a href="./">Home</a> */}
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             {/* <a href="./about">About</a> */}
        //             <Link to="/about">About</Link>
        //         </li>
        //         <li>
        //             {/* <a href="./login">login</a> */}
        //             <Link to="/login">login</Link>
        //         </li>
        //     </ul>
        // </nav>
    )
}
