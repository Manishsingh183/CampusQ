import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components\/NavBar/NavBar';
import PostCard from './postcard';
import baseURL from '../../baseUrl';

function Post(){   

    const [data,setData] = useState({
                                    question:"",
                                    answers:[],
                                    date:""

    });
    const {cardId} = useParams();
    useEffect(()=>{
        getidCard(cardId);
    },[cardId]);
    
    async function getidCard(cardId){
        await axios({
            method: 'get',
            url: baseURL+`posts/${cardId}`,
        }).then(res => {console.log(res.data);console.log("Hello there",cardId); 
                                                       setData({
                                                           id: res.data._id,
                                                          question: res.data.question,
                                                          answers: res.data.answers,
                                                          date: res.data.date
                                                       })
                        })
        .catch(err => {console.log(err);console.log("no Success")})
    }

    return (
        <React.Fragment>
              <NavBar />
              <PostCard
                  question={data.question}
                  answer={data.answers[0]}
                  date={data.date}
              /> 
        </React.Fragment>
    )
}
export default Post;