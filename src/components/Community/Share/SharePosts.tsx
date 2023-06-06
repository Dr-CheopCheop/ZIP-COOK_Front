import React from 'react';
import * as S from './ShareMainStyle';

const SharePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <S.PostSpan key={post.id}>
              {post.filepath}{<br />}
              {post.title}{<br />}
              DATE: {post.date}
            </S.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default SharePosts;