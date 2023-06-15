import { useState, useEffect} from 'react'
import Post from './Post'
import axios from 'axios';


const Posts = () => {
  
    console.log("Showing posts...");

    const [posts, setPost] = useState([]);

    useEffect(()=>{

        () => {
            axios.get('http://localhost:8080/api/v1/posts/')
                .then(response => {
                    setPost(response.data)
                    
                })
                .catch(err => console.log(err.message))
        },
        [props.id]}) 

     return (
       <div>
         {posts.map((post) => {
           <Post id={post.id} key={post.id} />;
         })}
       </div>
     );

}

export default Posts;
