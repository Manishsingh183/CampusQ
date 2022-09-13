import React from 'react';
import "./Person.css"

function Person(){
    return (
        <div className='grid_container'>
            <div className='grid_img user_img' id='person-photo'>
                <img src="https://picsum.photos/450/250" alt="User Photo"/>
            </div>
            <div>Anonymous User</div>
            <div>MNIT JAIPUR</div>
        </div>

    )
}
export default Person;
