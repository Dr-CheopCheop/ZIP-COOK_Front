import React from 'react';
import * as S from './SaleMainStyle';

const SalePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <S.PostSpan key={post.id}>
              {post.filepath}{<br />}
              {post.title}{<br />}
              PRICE: {post.discountPrice}{<br />}
              LOCATION: {post.location}
            </S.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default SalePosts;