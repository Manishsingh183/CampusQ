import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./postcard.css";
import Person from '../../components/Person/Person';
import RelatedPost from '../../components/RelatedPost/Relatedpost';
import axios from 'axios';
import qs from 'qs';
import baseUrl from '../../baseUrl';


function PostCard(props){

    const [moreAns,setMoreAns] = useState("");
    const [yourAns,setYourAns] = useState(0);
    const relatedAns = props.answer;
    let i=0;

     function HandleComment(){

     }

     function HandleAnswer(){
         const ans = !yourAns
         setYourAns(ans);
     }

     function handlechange(event){
         setMoreAns(event.target.value);
     }

    async function handleSubmit(){
        setYourAns(0);
         window.location.reload(); // this one refreshes page
        console.log(props.id,moreAns)
        const data = {
            id:props.id,
            ans: moreAns
        }
        await axios.post(baseUrl+'newans',qs.stringify(data))
         .then(res=>{console.log(res)})
         .catch(err=>console.log(err));

         

        
     }


    return (
        
        <div>
            <div className='gridbox'>
                  <div className='person'>
                  <Person/>
                  </div>
                  <div className='que'>
                      {/* <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Aenean ut ligula ac ligula blandit eleifend.</h5> */}
                       <h5>{props.question}</h5>
                  </div>
                  <hr></hr>
                   <img className='post_img' src="https://picsum.photos/450/250" alt='Question related Image'/>
                  <div>
                  {/* <p className='postcard_p'>Vivamus feugiat nunc sed mauris vestibulum placerat. Donec consectetur pretium nibh, in pharetra ligula efficitur vitae. 
                     Sed quis maximus nibh, non pulvinar velit. Sed euismod bibendum lectus, sit amet laoreet nunc ultricies elementum. 
                     In hac habitasse platea dictumst. Quisque lorem mi, vulputate ac scelerisque ac, dapibus non neque. 
                     Proin dolor urna, egestas nec bibendum in, gravida ac mauris.</p> */}
                   <p className='postcard_p'>{props.answer[0]}</p>
                  </div>
                  <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                  <button className='comment' onClick={HandleComment}>Comment</button>
                  <span><button className='wua' onClick={HandleAnswer}>Write your answer</button></span>
            </div>
             {yourAns ? <div className='ansbox'><textarea type="text" onChange={handlechange} rows='6' cols='50' placeholder='Type message here' name='moreAns' value={moreAns}/>
             <button id='post-ans-submit' placeholder='Type your Answer here' onClick={handleSubmit} type='submit'>Submit</button></div> : null}
            
            <div>
           
               {relatedAns.map((ele)=>{
                     if(i!=0 && relatedAns.length>1){
                     return (
                    <div className='RelPost'>
                       <RelatedPost
                        answer ={ele}
                    />
                    </div>
                   )}
                   i = i+1;
                })
                }
                
            </div>
        </div>
    )
} 
export default PostCard;