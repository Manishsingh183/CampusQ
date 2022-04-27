import React,{useState} from "react";
import axios from "axios";
import  {Navigate} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import './Askque.css';
import { Link } from "react-router-dom";
import qs from 'qs';
import { render } from "@testing-library/react";



function Askque(){

    const baseURL = "http://localhost:4000/askque";
    const [Que,setQue] = useState("");
    const [IsRedirect,setRedirect] = useState(0);

    function handleChange(event){
        const Q = event.target.value;
        setQue(Q);
    }


    async function handleSubmit(){
        const data = {
            userName:"user1",
            question:Que,
            completed: false
        }
        await axios({
            method:'post',
            url: baseURL,
            data :qs.stringify(data) 
        }).then(res => {console.log(res); setRedirect(1)})
        .catch(err=>console.log(err));
        };
        

    return ( 
            <div id="ask_popup">
                <h3>Ask Question here</h3>
                <Link to="/">
                <CancelIcon id="askque_cancel_icon"/>
                </Link>
                <div id="ask-flex">
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
                    <div id="que_box">
                        <textarea type="text" onChange={handleChange} name="Que" cols="30" rows="10" value={Que} placeholder="Type Question here...."/>
                        <button id="que_submit_button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                {IsRedirect ? <Navigate to="/" /> : null}
    </div>
)}

export default Askque;

