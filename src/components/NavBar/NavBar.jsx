import React from "react";
import "./NavBar.css";
import {Route,Link} from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Collab from '../../Pages/Collab/collab';
import Contact from '../../Pages/Conatct/contact';



function NavBar() {

    function handleCollab() {
        <Link to= "/collab"><Collab/></Link>
    }
    function handleResource() {
        <Link to="/contact"><Contact/></Link>
    }
    function handleContact() {
        // <Link to= "/contact"></Link>

    }

    return <div id="navbar">

        <Link to="/">
        <h1>Campus<span>Q</span></h1>
        </Link>
        


        <form>
            <input id="search-input" type="search" placeholder="Search"></input>
        </form>

        <Link className="nav-btn" to="/collab">
            <div className="icon-div">
                <PeopleIcon />
                <span>Collaboration</span>
            </div> 
        </Link>
        
        <Link className="nav-btn" to="/resources">Resources</Link>
        <Link className="nav-btn" to="/contact">Contact Us</Link>
        
        {/* <button className="nav-btn" onClick={handleContact}>Contact Us</button> */}

        <button className="login-btn">
            <div className="icon-div">
                <AccountCircleIcon />
                <span>Login</span>
            </div>
        </button>

    </div>;
}

export default NavBar;