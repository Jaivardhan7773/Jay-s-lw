import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { tags } = useParams(); 

  return (
    <div>
      <h1>Videos for Tag: {posts[0].tags}</h1>
      
      <p>Here you can display videos related to the tag: {tags}</p>
    </div>
  );
};

export default VideoPage;
