import React, { useState} from 'react';
import Posts from '../components/Posts';
import '../index.css';
import PostDetails from '../components/PostDetails';
import AddPost from '../components/AddPost';
import {SelectedPostContext} from  "./context/Postcontext";


function Dashboard() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  

  return (

    <SelectedPostContext.Provider value={selectedPostId}>
    <div>
      <h1>Dashboard</h1>

      <Posts onPostClick={handlePostClick} />
      <label>
        {" "}
        Name
        <input type="text" size={26} />
      </label>
      <br />
      <br />

      <button> ChangeName </button>

      <div className="postDetails">
        <PostDetails />
      </div>
      <div className="addPost">
        <AddPost />

      </div>
    </div>
    </SelectedPostContext.Provider>

  );
}

export default Dashboard;
