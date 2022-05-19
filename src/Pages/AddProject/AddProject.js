import React,{useState} from 'react';
import './AddProject.css';
import axios from 'axios';
import qs from 'qs'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link, Navigate} from 'react-router-dom';
import baseURL from '../../baseUrl';

function AddProject(){
  

    const [Project,setProject] = useState({projName:"",descr:"",collab:0,skills:""});
    const [isRedirect,setRedirect] = useState(0);
    
    function handleChange(event){
        const {name,value} = event.target;
        setProject(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        });
   }


    

    async function handleSubmit(){
        console.log(Project);
        const data = {
            projName:Project.projName,
            descr:Project.descr,
            collab: Project.collab,
            skills: Project.skills,
            completed: false
        }
        await axios({
            method:'post',
            url: baseURL+ 'add_proj',
            data :qs.stringify(data) 
            
        }).then(res => {console.log(res);setRedirect(1)})
        .catch(err=>console.log(err));
        };
        
   


    return (
        <div id="project_popup">
                <div><h3>Add Project
                <span><Link to="/collab">
                <CancelIcon id="proj_cancel_icon"/>
                </Link></span></h3>
                </div>
                <div id="proj-grid">
                     {/* Image Upload Box */}
                    <div id="img_upload">
                      <div id="font_upload">
                        <p>Upload Image Here</p>
                        <FileUploadIcon id="font-icon-upload"/>
                      </div>
                      <div>
                       <button id="upload-button"> Upload </button>
                      </div>
                    </div>   
                    {/* Question Box */}
                    <div id="proj_box">
                         <input id="Proj_name" onChange={handleChange} type='text' placeholder='Project Name' name="projName" value={Project.projName}  />
                        <textarea type="text" onChange={handleChange} name="descr" cols="30" rows="10" value={Project.descr} placeholder="Describe your Project"/>
                        <input className='addproj_input' type='text' onChange={handleChange} name="skills" value={Project.skills} placeholder='Skills Required' />
                        <input className='addproj_input' type='text' onChange={handleChange} name="collab" value={Project.collab} placeholder='No of Collaborators Required' />
                        <button id="proj_submit_button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                {isRedirect ? <Navigate to="/collab" /> : null}
        </div>
        
    )

}

export default AddProject;