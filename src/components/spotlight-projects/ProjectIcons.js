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
                <img id="Creation-Station" className={p.title === 'Creation Station' ? 'selected' : ''} onMouseOver={this.hover} src='meep.jpeg' alt='a hybrid character surrounded by: cloud, water, fire, wind' />
                <img id="Journey-Journal" className={p.title === 'Journey Journal' ? 'selected' : ''} onMouseOver={this.hover} src='meep.jpeg' alt='pencil' />
                {/* <img src='meep.jpeg' /> */}
            </div>
        )
    }
}

export default ProjectIcons;