import React from "react";
import "./HomeHeading.css"

function HomeHeading() {

    return <div> 
        {/* <div id="home-heading"> */}
         

        {/* <div className="home-content">
            <h2 className="title">Lorem ipsum dolor</h2>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="home-img">
            <img src="https://picsum.photos/450/250" alt="" />
        </div> */}
         <div className="youtube">
         <iframe 
        //  width="560" height="315" 
         src="https://www.youtube.com/embed/6z7dYISoMqw?autoplay=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>

    </div>;
}

export default HomeHeading;