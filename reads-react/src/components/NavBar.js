import React from 'react';
import { Link } from '@reach/router'

const NavBar = (props) => {
    console.log(props)
    return (
        <nav>
            {navItems(props.links)}
        </nav>
        )
}

const navItems = (links) => {
    return links.map(link => <Link to={link.toLowerCase()} className="px-1">{link}</Link>)
}

export default NavBar;
