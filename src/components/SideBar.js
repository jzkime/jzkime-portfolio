import React from "react";
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
    render() {
        return <div id='sidebar'>
            <Link to='/' ><img src='computer.png' alt='computer sketch'/> </Link>
            <Link to='/contact-me'><img src='book-and-envelope.png' alt='book and envelope sketch'/></Link>
            <a href='https://github.com/jzkime' target='_blank' rel="noreferrer"><img src='github.png' alt='cat with a tail, github logo sketch'/></a>
            {/* 
                TO-DO: Projects Page when I have more projects
                <Link to='/projects'>Projects</Link> 
            */}
        </div>
    }
}
export default SideBar;