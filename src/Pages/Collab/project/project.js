import React from 'react';
import './project.css';

function Project(){

    return <div>
  
               <div className='grid_containers'>
                   <div id='grid_img'>
                       <img src = "https://picsum.photos/450/250" alt="Proj_1Photo"/>
                   </div>
                   <div id='grid_item'>
                       <h3>Project No 1.</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ante nec risus suscipit 
                       accumsan. Sed volutpat quis metus id ullamcorper. Aenean mattis est lorem. 
                       Mauris non varius nunc. Nunc sed ex ut ligula convallis faucibus.</p>
                       <p><span>Skills Required: </span> C++, Python, HTML, CSS, React.js</p>
                       <button id="proj-btn">Apply !</button>
                   </div>
                   
               </div>
               <hr></hr>
           </div>
}
export default Project;