import React from 'react'
import ProjectSelected from './ProjectSelected';
import ProjectIcons from './ProjectIcons';
import projects from '../../data/projects'

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProj: projects[0]
        }
    }

    findProj = (p) => {
        const fp = projects.find(pr => pr.title === p);
        return fp
    }

    setSelected = (id) => {
        console.log('container', id)
        const newpr = this.findProj(id);
        this.setState({
            ...this.state,
            selectedProj: newpr
        })
    }

    render() {
        return (
        <div id='project-container'>
            <ProjectIcons setSelected={this.setSelected} proj={this.state.selectedProj} />
            <ProjectSelected proj={this.state.selectedProj}/>
        </div>
        )
    }
}

export default ProjectContainer;