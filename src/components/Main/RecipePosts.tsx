import React from 'react';
import * as M from './MainStyle';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <M.PostSpan key={post.id}>
              {post.image}{<br />}
              {post.title}{<br />}
              {post.level}
            </M.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default RecipePosts;