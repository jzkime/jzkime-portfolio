import React from 'react';

class ProjectSelected extends React.Component {
    render() {
        return(
        <div id='proj-selected-container' >
            <img src='https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/606de887c67c16e1a860bf31_5GXNnjGoajCOnoleOrYm8CfYNnTr5vVDUiCh0xlb2kn6ryQuFpzS6ZWDexQ586QgxG07ua9CSVHce46MwclXOwq4nKh89-OoxQD5ZboBCZI_0KFdD1m58SLrN_dBJrlWPEWwsHTj.png'/>
            <div className='proj-info'>
                <h3>title</h3>
                <p>summary</p>
            </div>
        </div>
        )
    }
}

export default ProjectSelected;