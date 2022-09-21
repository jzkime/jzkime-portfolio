import React from 'react'
import ProjectSelected from './ProjectSelected';
import ProjectIcons from './ProjectIcons';

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedProj: 'proj-1'}
    }

    render() {
        return (
        <div id='project-container'>
            <ProjectIcons />
            <ProjectSelected />
        </div>
        )
    }
}

export default ProjectContainer;