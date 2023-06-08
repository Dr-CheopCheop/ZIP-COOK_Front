import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';


const RecipePosts = ({ posts, loading }: any) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <M.PostList>
          {posts.map((post: any) => (
            <M.PostLink to={`community/recipe/${post.id}`} key={post.id}>
            <M.PostWrap>
              <M.PostImg src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              {post.level}
            </M.PostWrap>
            </M.PostLink>
          ))}
      </M.PostList>
    </>
  );
};

export default RecipePosts;
