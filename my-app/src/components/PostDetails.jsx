import React from "react";
import { useState, useEffect} from 'react';
import { fetchService } from '../fetchServices/FetchService';

import Comment from "./comment";

const PostDetails = ({props}) => {
  

  const[postDetail, setPostDetail]= useState(null);

  useEffect(()=>{

    () => {
        axios.get('http://localhost:8080/api/v1/posts/' + props.id)
            .then(response => {
                setPostDetail(response.data)
                
            })
            .catch(err => console.log(err.message))
    },
    [props.id]})
    
  
    useEffect(()=>{

        () => {
            axios.delete('http://localhost:8080/api/v1/posts/' + props.id)
                .then(response => {
                    setPostDetail(response.data)
                    
                })
                .catch(err => console.log(err.message))
        },
        [props.id]})

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
