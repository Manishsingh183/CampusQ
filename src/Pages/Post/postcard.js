import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./postcard.css";
import Person from '../../components/Person/Person';
import RelatedPost from '../../components/RelatedPost/Relatedpost';


function PostCard(){

     function HandleComment(){

     }

     function HandleAnswer(){
         
     }


    return (
        
        <div>
            <div className='gridbox'>
                  <div className='person'>
                  <Person/>
                  </div>
                  <div className='que'>
                      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Aenean ut ligula ac ligula blandit eleifend.</h5>
                  </div>
                  <hr></hr>
                   <img className='post_img' src="https://picsum.photos/450/250" alt='Question related Image'/>
                  <div>
                  <p className='postcard_p'>Vivamus feugiat nunc sed mauris vestibulum placerat. Donec consectetur pretium nibh, in pharetra ligula efficitur vitae. 
                     Sed quis maximus nibh, non pulvinar velit. Sed euismod bibendum lectus, sit amet laoreet nunc ultricies elementum. 
                     In hac habitasse platea dictumst. Quisque lorem mi, vulputate ac scelerisque ac, dapibus non neque. 
                     Proin dolor urna, egestas nec bibendum in, gravida ac mauris.</p>
                  </div>
                  <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                  <button className='comment' onClick={HandleComment}>Comment</button>
                  <span><button className='wua' onClick={HandleAnswer}>Write your answer</button></span>
                  
            </div>
            <div className='RelPost'>
                <RelatedPost/>
            </div>
            <div className='RelPost'>
                <RelatedPost/>
            </div>
            <div className='RelPost'>
                <RelatedPost/>
            </div>
            
        </div>
    )
} 
export default PostCard;