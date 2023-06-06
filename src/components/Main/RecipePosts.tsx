import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';


const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <Link to="/community/recipe/1" key={post.id}>
            <M.PostSpan>
              {post.image}{<br />}
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