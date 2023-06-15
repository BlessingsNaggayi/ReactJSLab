import React from 'react';

const Comment = ({ id, name }) => {


  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
};

export default Comment;