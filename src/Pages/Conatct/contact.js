import React,{useState} from 'react';
import "./Contact.css";
import NavBar from "../../components/NavBar/NavBar";

function Contact(){

    const [Content,setContent] = useState({contact_mail: "",
                              contact_name: "",
                              contact_content:""
 })
  
 function handlechange(event){
      const {name,value} = event.target;
      setContent(prevValue=>{
          return {
              ...prevValue,
              [name]:value
          }
      });
 }

 function submitChange(event){
     console.log(Content);
     event.preventDefault();
 }



    return (
        <div>
           <NavBar/>
           
           <div className='grid_boxes'>
                <h2>Developers</h2>
                <div className='grid_containers_contact'>
                    <div className='grid_img'>
                        <img src = "https://picsum.photos/450/250" alt="DevPhoto"/>
                    </div>
                    <div className='grid_item'>
                        <h3 id="contact_h3">Developer No 1.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ante nec risus suscipit 
                        accumsan. Sed volutpat quis metus id ullamcorper. Aenean mattis est lorem. 
                        Mauris non varius nunc. Nunc sed ex ut ligula convallis faucibus.</p>
                    </div>
                    <div className='grid_contain'>
                       <div></div>
                       <div></div>
                    </div>
                </div>

                 {/* .............Person 2.................. */}

                <div className='grid_containers_contact'>
                    <div className='grid_img'>
                        <img src = "https://picsum.photos/450/250" alt="DevPhoto"/>
                    </div>
                    <div className='grid_item'>
                        <h3 id="contact_h3">Developer No. 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ante nec risus suscipit 
                        accumsan. Sed volutpat quis metus id ullamcorper. Aenean mattis est lorem. 
                        Mauris non varius nunc. Nunc sed ex ut ligula convallis faucibus.</p>
                    </div>
                </div>

                
                                              {/* Contact form started */}
                                              
                     <form className='form_cont'>
                        <h2>Contact Us</h2>
                        <div className='contact_container'>
                           
                           <div className='contact_form'>
                                <input onChange={handlechange} type='text' name='contact_name' value={Content.contact_name} placeholder="Full Name"></input>
                                <input onChange={handlechange} type='email' name='contact_mail' value={Content.contact_mail} placeholder="College Email" ></input>
                                <textarea type="text" onChange={handlechange} rows='6' cols='31' placeholder='Type message here' name='contact_content' value={Content.contact_content}/>
                                <button onClick={submitChange} type='submit'>Send Message</button>
                          </div>
                           
                           
                           <div className='contact_help'>
                               <h4>How can we help you</h4>
                               <hr/>
                               <p>
                               It is a long established fact that a reader will be distracted by the readable content of a page 
                               when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                               distribution of letters, as opposed to using 'Content here, content here', making it look like 
                               readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                               their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
                               their infancy.
                               </p>
                           </div>
                        
                        </div> 
                     </form> 
           </div>
        </div>
    )
}
export default Contact;