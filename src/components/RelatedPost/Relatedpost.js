import React from 'react';
import "./RelatedPost.css";
import Person from '../Person/Person';

function RelatedPost(){
    
      return (
        <div>
        <div className='person'>
        <Person/>
        </div>
          <p className='rel_p'>Vivamus feugiat nunc sed mauris vestibulum placerat. Donec consectetur pretium nibh, in pharetra ligula efficitur vitae. 
              Sed quis maximus nibh, non pulvinar velit.</p>
      </div>
      
      )
}
export default RelatedPost;