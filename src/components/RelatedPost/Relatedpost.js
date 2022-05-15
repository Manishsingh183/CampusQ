import React from 'react';
import "./RelatedPost.css";
import Person from '../Person/Person';

function RelatedPost(props){
    
      return (
        <div>
        <div className='person'>
        <Person/>
        </div>
          <p className='rel_p'>{props.answer}</p>
      </div>
      
      )
}
export default RelatedPost;