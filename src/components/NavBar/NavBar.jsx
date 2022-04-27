import React from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from '../../login'



function NavBar() {


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
        
        
        {/* <form action="/auth/google">
        <button className="login-btn" type="submit">
            <div className="icon-div">
                <AccountCircleIcon />
                <span>Login</span>
            </div>
        </button>
        </form> */}
        <Login className="g-login"/>

    </div>;
}

export default NavBar;