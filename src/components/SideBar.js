import React from "react";
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
    render() {
        return <div id='sidebar'>
            <Link to='/about-me'><img src='https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png' /></Link>
            <Link to='/contact-me'><img src='https://cdn-icons-png.flaticon.com/512/4812/4812397.png' /></Link>
            <a href='https://github.com/jzkime' target='_blank'><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'/></a>
            {/* 
                TO-DO: Projects Page when I have more projects
                <Link to='/projects'>Projects</Link> 
            */}
        </div>
    }
}
export default SideBar;