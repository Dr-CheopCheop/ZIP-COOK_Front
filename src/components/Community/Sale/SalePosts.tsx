import React from 'react';
import * as S from './SaleMainStyle';

const SalePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <S.PostSpan key={post.id}>
              {post[post.id].filepath}{<br />}
              {post[post.id].title}{<br />}
              PRICE: {post[post.id].discountPrice}{<br />}
              LOCATION: {post[post.id].location}
            </S.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default SalePosts;