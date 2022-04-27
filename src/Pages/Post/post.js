import axios,{useEffect} from 'axios';
import React,{useState} from 'react';
import NavBar from '../../components\/NavBar/NavBar';
import PostCard from './postcard';
import baseURL from '../../baseUrl';

function Post(){   

    const [idcarddetails,setidcard] = useState('');
    useEffect(()=>{
        getidCard();
    },[])

    async function getidCard(){
        await axios({
            method: 'get',
            url: baseURL+'/post',
        }).then(res => {console.log(res.data);console.log("Hello there"); setidcard(res.data.question)})
        .catch(err => console.log(err))
    }

    return (
        <React.Fragment>
             <NavBar />
             <PostCard data={idcarddetails} />
        </React.Fragment>
    )
}
export default Post;