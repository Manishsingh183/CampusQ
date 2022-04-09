import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PostCard from './postcard';

function Post(){   
    return (
        <React.Fragment>
             <NavBar />
             <PostCard />
        </React.Fragment>
    )
}
export default Post;