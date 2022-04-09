import React from "react";
import "./Card.css";

function Card(props) {


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
            <p>{props.topAnswer}</p>
        </div>

    </div>;
}

export default Card;