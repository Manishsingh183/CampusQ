import React from 'react';
import './project.css';

function Project(props){

    return <div>
  
               <div className='proj_grid_containers'>
                   <div id='grid_img'>
                       <img src = "https://picsum.photos/450/250" alt="Proj_1Photo"/>
                   </div>
                   <div id='grid_item'>
                       <h3>{props.projName}</h3>
                       <p>{props.descr}</p>
                       <p id="collab-req"><span>Skills Required: </span>{props.skills}</p>
                       <p id="collab-req"><span>Collaborator Required:</span><span>{props.collab}</span></p>
                   </div>
                   <button id="proj-btn">Apply !</button>
               </div>
               <hr></hr>
           </div>
}
export default Project;