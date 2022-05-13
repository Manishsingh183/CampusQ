import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import NavBar from "../../components/NavBar/NavBar";

function NotFound(){

   
    return <div>
      <NavBar/>
     <div id="notfound">
         <div id="together">
         <span><SentimentVeryDissatisfiedIcon id="failedIcon"/></span>
         <h1>Service</h1>
         <h1> Unavailable!!</h1>
         </div>
         <Link to="/">
         <button>Return to Home Page</button>
         </Link>
     </div>
    

    </div>

}
export default NotFound;