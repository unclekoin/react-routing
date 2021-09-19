import React from 'react';
import { useParams } from 'react-router-dom';
import Post from './post';
import PostsList from './posts-list';

const Posts = () => {
  const params = useParams();
  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' },
  ];

  const {postId, display} = params;

  return (
    <>
      {!postId && <h1>Posts</h1>}
      {postId ? (
        <>
          {display && <h2>Display: {display}</h2>}
          <Post posts={posts} id={postId} />
        </>
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
