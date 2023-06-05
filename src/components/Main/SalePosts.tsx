import React from 'react';
import * as M from './MainStyle';

const SalePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <M.PostSpan key={post.id}>
              {post.image}{<br />}
              {post.title}{<br />}
              {post.location}{<br />}
              {post.date}
            </M.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default SalePosts;