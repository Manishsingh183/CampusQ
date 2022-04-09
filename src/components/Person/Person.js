import React from 'react';
import "./Person.css"

function Person(){
    return (
        <div className='grid_container'>
            <div className='grid_img user_img'>
                <img src="https://picsum.photos/450/250" alt="User Photo"/>
            </div>
            <div>Name</div>
            <div>Details</div>
        </div>

    )
}
export default Person;