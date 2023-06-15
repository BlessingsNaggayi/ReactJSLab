import React, { useState} from 'react';
import Posts from '../components/Posts';
import '../index.css';
import PostDetails from '../components/PostDetails';


function Dashboard() {

const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };
    

    return (
        
        <div>
            <h1>Dashboard</h1>

            <Posts onPostClick={handlePostClick} />
            <label> Name
            <input type="text" size={26}/>
            </label><br /><br />

            <button > ChangeName </button>

            <div className="postDetails">
            <PostDetails/>

           </div>
           <div className="addPost">
           <AddPost/>


           </div>

        </div> 

    )
}

export default Dashboard;
