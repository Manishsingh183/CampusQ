import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Project from './project/project';
import People from './People/People';
import './Collab.css'
import AddIcon from '@mui/icons-material/Add';
import baseURL from '../../baseUrl';
import axios from 'axios';

function Collab(){

    const [ProjectActive,setProjectActive] = useState(true);
    const [PersonActive,setPersonActive] = useState(false);

    const [arr,setarr] = useState([]);

    useEffect(()=>{
        getProjectDetails();
    }, []);

    async function getProjectDetails(){
        axios({
            method:'get',
            url: baseURL + 'collab'
        }).then(res => {
            setarr(res.data);
            console.log(res.data);
        })
        .catch(err=>console.log(err));
     }


    function handleProject(){
        setPersonActive(false);
        setProjectActive(true);
    }

    function handlePeople(){
        setPersonActive(true);
        setProjectActive(false);
    }

    return (
        <React.Fragment>
            <NavBar/>
            {/* <h6>Hello</h6> */}
                <div id='collab_btn'>
                  <button id="project" onClick={handleProject}>Project</button>
                  {/* <button id="people" onClick={handlePeople}>People</button> */}
                </div>
                <div>
                  <Link to="/add_proj">
                  <button id="add-proj"><span><AddIcon/></span>Add Project</button>
                  </Link>
                  {/* <Link to="/add_self">
                  <button id ="add-self"><span><AddIcon/></span>Add Yourself</button>
                  </Link> */}
                </div>
 
            <div>
            {ProjectActive ?
               <div id='collabList'>

               {arr.map((ele)=>{
                     return (
                        <Project 
                        key={ele.id}
                        projName={ele.projName}
                        descr={ele.descr}
                        collab={ele.collab}
                        skills={ele.skills}
                    />
                     )
                 })
                }
                </div>: null}
            
            {PersonActive ?
              <div id='people_css'>
                  <People/>
                  {/* <People/>
                  <People/>
                  <People/>
                  <People/> */}
              </div>
            
            :null}
            
            
            </div>
        </React.Fragment>
    )
}
export default Collab;