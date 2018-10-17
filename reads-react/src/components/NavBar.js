import React from 'react';
import { Link } from '@reach/router'

const NavBar = (props) => {
    return (
        <nav className="d-flex">
            {navItems(props.links)}
        </nav>
        )
}

const navItems = (links) => {
    return links.map(link => <button type="button" className="btn btn-secondary"><Link to={link.toLowerCase()} className="px-1 text-light">{link}</Link></button>)
}

export default NavBar;
