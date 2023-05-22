import React from 'react';
import * as D from './DiscountMainStyle';

const DiscountPosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <D.PostSpan key={post.id}>
              {post[post.id].image}{<br />}
              {post[post.id].title}{<br />}
              {post[post.id].location}{<br />}
              {post[post.id].date}
            </D.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default DiscountPosts;