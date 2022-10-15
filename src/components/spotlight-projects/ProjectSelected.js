import React from 'react';

class ProjectSelected extends React.Component {
    render() {
        const p = this.props.proj
        return(
        <section id='proj-selected-container' >
            <img src={p?.img || 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-15/f55f7ac0-3eda-11eb-ba02-af36eefa2322.jpg'} alt='wireframe'/>
               <div id='proj-main'>
                        <h3>{p?.title || 'title'}</h3>
                        <p>{p?.summary || 'summary'}</p>
                    
                        <p>{p?.stack || 'stack'}</p>
                </div>
        </section>
        )
    }
}

export default ProjectSelected;