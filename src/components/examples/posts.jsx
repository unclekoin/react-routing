import React from 'react';
import _ from "lodash";
import query from "query-string";
import Post from './post';
import PostsList from './posts-list';

const Posts = ({ match, location }) => {
  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' },
  ];

  // Example with query parameters, query-string, locarion.serch, etc.

  const search = query.parse(location.search);
  const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts;
  const postId = match.params.postId;
  const display = match.params.display;

  return (
    <>
      {!postId && <h1>Posts</h1>}
      {postId ? (
        <>
          {display && <h2>Display: {display}</h2>}
          <Post posts={posts} id={postId} />
        </>
      ) : (
        <PostsList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
