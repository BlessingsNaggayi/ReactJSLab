import { useContext,useState, useEffect} from 'react'
import Post from './Post'
import axios from 'axios';
import {SelectedPostContext} from  "../pages/context/Postcontext";

const Posts = (props) => {
  
    console.log("Showing posts...");

    const [posts, setPost] = useState([]);
    const selectedPostId = useContext(SelectedPostContext);

    useEffect(() => {
      const fetchPosts = () => {
        axios.get('http://localhost:8080/api/v1/posts/')
          .then(response => {
            setPost(response.data);
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
          });
      };
    
      fetchPosts();
    }, [props.id]);

    

     return (
       <div>
         {posts.map((post) => {

          return <Post id={post.id} 
           key={post.id} 
           title={post.title}
           author={post.author}
           content={post.content}

           />;
         })}
       </div>
     );

}

export default Posts;
