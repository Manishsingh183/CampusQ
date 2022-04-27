import React from 'react';
import './People.css';

function People(){

    return <div>
  
               <div className='people_card'>
                    <img id="people_img" src = "https://picsum.photos/450/250" alt="User_Photo"/>
                    <div id='grid_item'>
                       <h3>User Name</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ante nec risus suscipit 
                       accumsan. Sed volutpat quis metus id ullamcorper. Aenean mattis est lorem. 
                       Mauris non varius nunc. Nunc sed ex ut ligula convallis faucibus.</p>
                       <p><span>Skills Required: </span> C++, Python, HTML, CSS, React.js</p>
                       <button id="proj-btn">Collaborate!</button>
                   </div>
                   
               </div>
               <hr></hr>
           </div>
}
export default People;