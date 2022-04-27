import React, { useState,useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./Canvas.css";
import Card from "../Card/Card";
import HomeHeading from "../HomeHeading/HomeHeading";
import CreateIcon from '@mui/icons-material/Create';
import baseURL from '../../baseUrl';

function Canvas() {

    // const arr = [];
    // for(let i = 0; i < 10;i++) {
    //     arr.push(i);
    // }
     const [que,setQue] = useState([]);


    function handleAskHere(){

    }

    useEffect(()=>{
        getHomeCards();
    },[])

    async function getHomeCards() {
        await axios({
                method:'get',
                url: baseURL
        }).then(res => {setQue(res.data)})
        .catch(err => console.error(err)) 
            

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
                {que.map((ele)=>{
                     return (
                        <Card 
                        key={ele._id}
                        id = {ele._id}
                        name="Denise Richards"
                        time={ele.time}
                        date={ele.date}
                        branch="Rocket Science"
                        question={ele.question}
                        topAnswer={ele.answers[0]}
                    />
                     )
                 })
                }    
                    
                    


            </div>
            
        </div>
        

    </div>
    </React.Fragment>;
}

export default Canvas;