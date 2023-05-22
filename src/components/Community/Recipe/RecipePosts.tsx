import React from 'react';
import * as R from './RecipeMainStyle';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <R.PostSpan key={post.id}>
              {post[post.id].image}{<br />}
              {post[post.id].title}{<br />}
              {post[post.id].level}
            </R.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default RecipePosts;