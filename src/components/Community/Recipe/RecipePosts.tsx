import React from 'react';
import * as R from './RecipeMainStyle';
import { Link } from 'react-router-dom';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <Link to="/community/recipe/1" key={post.id}>
            <R.PostSpan >
              <img src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              TIME: {post.time}{<br />}
              LEVEL: {post.level}
            </R.PostSpan>
            </Link>
          ))}
        </div>
      </>
    );
  };

  export default RecipePosts;