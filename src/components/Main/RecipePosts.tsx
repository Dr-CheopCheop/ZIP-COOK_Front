import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';


const RecipePosts = ({ posts, loading }: any) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <div>
          {posts.map((post: any) => (
            <Link to={`community/recipe/${post.id}`} key={post.id}>
            <M.PostSpan>
              <img src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              {post.level}
            </M.PostSpan>
            </Link>
          ))}
      </div>
    </>
  );
};

export default RecipePosts;
