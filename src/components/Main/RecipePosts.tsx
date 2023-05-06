import React from 'react';
import * as M from './MainStyle';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <M.PostSpan key={post.id}>
              {post[post.id].image}{<br />}
              {post[post.id].title}{<br />}
              {post[post.id].level}
            </M.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default RecipePosts;