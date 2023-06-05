import React from 'react';
import * as R from './RecipeMainStyle';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <R.PostSpan key={post.id} >
              {post.filepath}{<br />}
              {post.title}{<br />}
              TIME: {post.time}{<br />}
              LEVEL: {post.level}
            </R.PostSpan>
          ))}
        </div>
      </>
    );
  };

  export default RecipePosts;