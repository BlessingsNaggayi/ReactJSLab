import React from 'react'

const Post = (props) =>{

    return (
        <div className='Content'>

           <h2>Id : {props.id}</h2>
           <h2>Title : {props.title}</h2>
           <h2>Author : {props.author}</h2>
           <h2>Content : {props.content}</h2>


        </div>
        
    )
}

export default Post;

