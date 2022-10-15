import React from 'react';

class ProjectIcons extends React.Component {
    constructor() {
        super()
        this.hover = this.hover.bind(this)
    }

    hover(e) {
        e.preventDefault();
        const name = e.target.id.split('-').join(' ')
        this.props.setSelected(name)
    }
    render() {
        const p = this.props.proj;
        return(
            <div id='project-icons'>
                <p id="Creation-Station" className={`project-name', ${p.title === 'Creation Station' ? 'selected' : ''}`} onClick={this.hover}>
                    Creation Station
                </p>
                <p id="Journey-Journal" className={`project-name, ${p.title === 'Journey Journal' ? 'selected' : ''}`} onClick={this.hover}>
                    Journey Journal
                </p>
            </div>
        )
    }
}

export default ProjectIcons;