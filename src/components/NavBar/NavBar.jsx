import React, { useState } from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReorderIcon from '@mui/icons-material/Reorder';
import CancelIcon from '@mui/icons-material/Cancel';
import Login from '../../login';



function NavBar() {

    const[mobileview,setMobileView] = useState(false);

    function handleClick(){
        setMobileView(true);
    }

    function handleCancel(){
        setMobileView(false);
    }

    return (
        <div>
        {mobileview ? <div className="sidenav" id="mysideNav">
            <CancelIcon id="cancel_icon" onClick={handleCancel}/>
            <p><Link id="link" className="side-link" to="/askque">Ask question</Link></p>
            <p><Link id="link" className="side-link" to="/collab">Collaboration</Link></p>
            <p><Link id="link" className="side-link" to="/resources">Resources</Link></p>
            <p><Link id="link" className="side-link" to="/contact">Contact Us</Link></p>
//             <p><Link id="link" className="side-link" to="/askque">Ask Question</Link></p>
            <p><Link id="link" className="side-link" to="/add_proj">Add Project</Link></p>
            <p><Login /></p>
        </div>
        : <div id="nav-center"><div id="navbar">
        
        <ReorderIcon id="more-option" onClick={handleClick}/>
        <Link id="campusQlink" to="/">
        <h1 id="campusTitle">Campus<span>Q</span></h1>
        </Link>
        <form id="search-input-form">
            <input id="search-input" type="search" placeholder="Search"></input>
        </form>
        <div id="nav-more-links">
        <Link className="nav-btn" to="/collab">
            <div className="icon-div">
                <PeopleIcon />
                <span>Collaboration</span>
            </div> 
        </Link>
        
        <Link className="nav-btn" to="/resources">Resources</Link>
        <Link className="nav-btn" to="/contact">Contact Us</Link>
        </div>
        
        
        {/* <form action='/auth/google'>
        <button className="login-btn" type="submit">
            <div className="icon-div">
                <AccountCircleIcon />
                <span>Login</span>
            </div>
        </button>
        </form> */}


        <div id="g-login">
        <Login />
        </div>
        
        </div></div>}
    </div>)
}

export default NavBar;
