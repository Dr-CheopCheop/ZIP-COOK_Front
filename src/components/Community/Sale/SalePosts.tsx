import React from 'react';
import * as S from './SaleMainStyle';
import { Link } from 'react-router-dom';

const SalePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <S.PostList>
          {posts.map((post: any) => (
            <S.PostLink to={`/community/sale/${post.id}`} key={post.id}>
            <S.PostWrap>
              <S.PostImg src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              PRICE: {post.discountPrice}{<br />}
              LOCATION: {post.location}
            </S.PostWrap>
            </S.PostLink>
          ))}
        </S.PostList>
      </>
    );
  };

  export default SalePosts;