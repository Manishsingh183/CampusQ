import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Project from './project/project';
import './Collab.css'

function Collab(){
    return (
        <React.Fragment>
            <NavBar/>
            <h6>Hello</h6>
            <div id='collab_btn'>
                <button id="project">Project</button>
                <button id="people">People</button>
            </div>
            <div>
                <button id="add-proj">Add Project</button>
                <button id ="add-self">Add Yourself</button>
            </div>

 
            <div>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </React.Fragment>
    )
}
export default Collab;