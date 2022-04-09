import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import NavBar from "../../components/NavBar/NavBar";

function NotFound(){

   
    return <div>
      <NavBar/>
     <div id="notfound">
         <span><SentimentVeryDissatisfiedIcon id="failedIcon"/></span>
         <h1>Service Unavailable!!</h1>
         <Link to="/">
         <button>Return to Home Page</button>
         </Link>
     </div>
    

    </div>

}
export default NotFound;