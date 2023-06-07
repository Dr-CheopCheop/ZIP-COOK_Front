import React from 'react';
import * as S from './SaleMainStyle';
import { Link } from 'react-router-dom';

const SalePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <Link to="/community/recipe/1" key={post.id}>
            <S.PostSpan>
              <img src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              PRICE: {post.discountPrice}{<br />}
              LOCATION: {post.location}
            </S.PostSpan>
            </Link>
          ))}
        </div>
      </>
    );
  };

  export default SalePosts;