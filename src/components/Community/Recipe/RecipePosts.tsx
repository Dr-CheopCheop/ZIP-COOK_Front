import React from 'react';
import * as R from './RecipeMainStyle';
import { Link } from 'react-router-dom';

const RecipePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <R.PostList>
          {posts.map((post: any) => (
            <Link to={`/community/recipe/${post.id}`} key={post.id}>
              <R.PostWrap>
                <R.PostImg src={`/images/${post.filepath}`} />{<br />}
                {post.title}{<br />}
                TIME: {post.time}{<br />}
                LEVEL: {post.level}
              </R.PostWrap>
            </Link>
          ))}
          </R.PostList>
      </>
    );
  };

  export default RecipePosts;