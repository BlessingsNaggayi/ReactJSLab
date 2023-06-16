import React from "react";
import { useState, useEffect,useContext} from 'react';

import Comment from "./comment";
import axios from 'axios';
import { SelectedPostContext } from '../pages/context/Postcontext';


const PostDetails = ({props}) => {
    const[postDetail, setPostDetail]= useState(null);
    const selectedPostId = useContext(SelectedPostContext);
    const [comments, setComments] = useState([]);

    const post = props;


    const deletePost = async () => {
      try {
        await axios.delete(`http://localhost:8080/api/v1/posts/${props.id}`);
       
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };
    
    useEffect(() => {
      deletePost();
    }, [props.id]);
    
    


        useEffect(() => {
          const fetchComments = async () => {
            try {
              const response = await axios.get(`http://localhost:8080/api/v1/posts/${selectedPostId}/comments`);
              setComments(response.data);
            } catch (error) {
              console.error('Error fetching comments:', error);
            }
          };
      
          fetchComments();
        }, [selectedPostId]);

  return (

    <div>
      {post ? (
        <div>
          <h3>Post Details</h3>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button>Edit</button>
          <button onClick={deletePost}>Delete</button>
          <h3>Comments</h3>
          {post.comments.map((comment) => (
            <Comment key={comment.id} name={comment.name} />
          ))}

        </div>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
};

export default PostDetails;
