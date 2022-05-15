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
import baseURL from '../../baseUrl';



function Askque(){

    const [Que,setQue] = useState("");
    const [IsRedirect,setRedirect] = useState(0);
    const [queImg,setQueImg] = useState(null)

    function handleChange(event){
        const Q = event.target.value;
        setQue(Q);
    }

    function handleQueImgChange(e){
        setQueImg(e.target.files[0]);
    }


    async function handleSubmit(){
        const imgData = new FormData();
        imgData.append('file',queImg);
        
        const data = {
            userName:"user1",
            question:Que,
            completed: false,
        }
        imgData.append('text',qs.stringify(data));
        await axios({
            method:'post',
            url: baseURL+'askque',
            data :qs.stringify(data),
            // data:imgData,
            // header: {
            //     'Content-Type': 'multipart/form-data'
            // }
        }).then(res => {console.log(res); setRedirect(1)})
        .catch(err=>console.log(err));
        };
        

    return ( 
           <div id="center-box">
            <div id="ask_popup">
                <div id="askque-intro">
                <span id="askhere-heading">Ask Question here</span>
                <span id="askque_cancel_icon"><Link to="/">
                <CancelIcon />
                </Link></span>
                </div>
                <div id="ask-grid">
                     {/* Image Upload Box */}
                    <div id="img_upload">
                      <div id="font_upload">
                        <p>Upload Image Here</p>
                        <img id="question-photo-render" src="https://picsum.photos/450/250" alt='Question related Image'/>
                      </div>
                     <input id="question-photo" type="file" name="queImg" onChange={handleQueImgChange} ></input>
                    </div>   
                    {/* Question Box */}
                    <div id="que_box">
                        <textarea type="text" onChange={handleChange} name="Que" cols="30" rows="10" value={Que} placeholder="Type Question here...."/>
                        <div><button id="que_submit_button" onClick={handleSubmit}>Submit</button></div>
                    </div>
                </div>
                </div>
                {IsRedirect ? <Navigate to="/" /> : null}
    </div>
)}

export default Askque;

