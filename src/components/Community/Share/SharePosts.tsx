import React from 'react';
import * as S from './ShareMainStyle';

const SharePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <S.PostSpan key={post.id}>
              {post[post.id].image}{<br />}
              {post[post.id].title}{<br />}
              {post[post.id].date}
            </S.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default SharePosts;