import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import "./Card.css";
import axios from 'axios';
import qs from 'qs';
import baseURL from "../../baseUrl";

function Card(props) {

    const [cardId,setCardID] = useState('');

    async function handleReadMore(){
        console.log("Clicked id: ",props.id);
        setCardID(props.id);
        const data = {
            id_details : props.id,
            question : props.question,
            completed : false
        }
        await axios({
            method:'post',
            url: baseURL+'collab',
            data: qs.stringify(data),
        }).then(res => {
            console.log("data sent",cardId);
            console.log(res);
        }).catch(err=>{console.log(err);console.log("Cant send Data",cardId)});
     } 



    return <div className="card">
        
        <div className="card-heading">
            <div className="card-img-div">
                <img className="card-img" src="https://picsum.photos/50/50" alt="" />
            </div>
            <div className="name-div">
                <h2>{props.name}</h2>
                <p>{props.time} {props.date}, {props.branch}</p>
            </div>
        </div>

        <div className="card-body">
            <h3>{props.question}</h3>
            <p>{props.topAnswer}
            {/* <Link to='/post'> */}
            <span id="read-more" onClick={handleReadMore}>Read More..</span>
            {/* </Link> */}
            </p>
        </div>

    </div>;
}

export default Card;