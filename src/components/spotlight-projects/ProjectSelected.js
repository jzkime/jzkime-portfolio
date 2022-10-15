import React from 'react';

class ProjectSelected extends React.Component {
    render() {
        const p = this.props.proj
        return(
        <section id='proj-selected-container' >
            <span id='proj-top'>
                <img src={p?.img || ''} alt='wireframe'/>
                <span id='proj-top-right'>
                    <h3>{p?.title || 'title'}</h3>
                </span>
            </span>
            <div id='proj-main'>
                    <p>{p?.summary || 'summary'}</p>
                    <p>{p?.stack || 'stack'}</p>
            </div>
        </section>
        )
    }
}

export default ProjectSelected;