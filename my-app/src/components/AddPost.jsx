import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const addPost = async () => {
    try {
      await axios.post('http://localhost:8080/api/v1/posts', { title, author, content });
     
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <h3>Add Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={addPost}>Add Post</button>
    </div>
  );
};

export default AddPost;