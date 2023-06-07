import React from 'react';
import * as S from './ShareMainStyle';
import { Link } from 'react-router-dom';


const SharePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <Link to="/community/share/1" key={post.id}>
            <S.PostSpan>
              <img src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              DATE: {post.date}
            </S.PostSpan>
            </Link>
          ))}
        </div>
      </>
    );
  };

  export default SharePosts;