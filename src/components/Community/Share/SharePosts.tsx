import React from 'react';
import * as S from './ShareMainStyle';
import { Link } from 'react-router-dom';


const SharePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
        <S.PostList>
          <Link to="/community/share">
          {posts.map((post: any) => (
            <Link to={`/community/share/${post.id}`} key={post.id}>
            <S.PostWrap>
              <S.PostImg src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              DATE: {post.date}
            </S.PostWrap>
            </Link>
          ))}
          </Link>
          </S.PostList>
        </div>
      </>
    );
  };

  export default SharePosts;