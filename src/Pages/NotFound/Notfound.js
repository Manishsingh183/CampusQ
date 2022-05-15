import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import NavBar from "../../components/NavBar/NavBar";

function NotFound(){

   
    return <div>
      <NavBar/>
    <div id="notfound-outerbox">
     <div id="notfound">
         <div id="together">
         <span><SentimentVeryDissatisfiedIcon id="failedIcon"/></span>
         </div>
         <div id="notfound-statement">
            <div><h1>Service</h1></div>
            <div><h1> Unavailable!!</h1></div>
         </div>
    </div>
    <div id="submit-return">
         <Link to="/">
         <button id="noservice-return-button">Return to Home Page</button>
         </Link>
    </div>    
  </div>
</div>

}
export default NotFound;