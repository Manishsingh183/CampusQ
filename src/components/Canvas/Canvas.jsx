import React from "react";
import {Link} from 'react-router-dom'
import "./Canvas.css";
import Card from "../Card/Card";
import HomeHeading from "../HomeHeading/HomeHeading";
import CreateIcon from '@mui/icons-material/Create';
import Askque from "../../Pages/Askque/Askque";

function Canvas() {

    const arr = [];
    for(let i = 0; i < 10;i++) {
        arr.push(i);
    }

    function handleAskHere() {

    }

    return <React.Fragment>

    <div id="canvas">
        <Link to="/askque">
        <button id="ask-btn" onClick={handleAskHere}>
            <div className="ask-btn-div">
                <span>Ask Here</span>
                <CreateIcon />
            </div>     
        </button>
        </Link>

        <div id="vertical-line">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>        

        <div id="home-container">

            <HomeHeading />

            <div id="cards-container">
                {/* <Link to='/postcard'> */}
                {arr.map((ele)=> {
                    return (
                    <Link to='/post'>
                    <Card 
                        key={Math.random()}
                        name="Denise Richards"
                        time="17:32PM"
                        date="03rd-Feb-22"
                        branch="Electrical"
                        question="Velit sed ullamcorper morbi tincidunt ornare massa eget. Risus feugiat in ante metus dictum"
                        topAnswer="Ipsum nunc aliquet bibendum enim. A pellentesque sit amet porttitor eget. Tortor at auctor urna nunc id cursus. Donec et odio pellentesque diam volutpat commodo sed egestas. Orci a scelerisque purus semper eget duis. Id aliquet lectus proin nibh nisl condimentum id venenatis. Leo integer malesuada nunc vel risus commodo viverra. Orci ac auctor augue mauris augue. Vehicula ipsum a arcu cursus vitae congue. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget."

                    />
                     </Link>);
                })}
                {/* </Link> */}
            </div>
            
        </div>
        

    </div>
    </React.Fragment>;
}

export default Canvas;