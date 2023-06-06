import React from "react";
import * as M from "./MainStyle";
import { Link } from "react-router-dom";

const RecipePosts = ({ posts, loading }: any) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <div>
        <Link to="/community/recipe/">
          {posts.map((post: any) => (
            <M.PostSpan key={post.id}>
              {post.image}
              {<br />}
              {post.title}
              {<br />}
              {post.level}
            </M.PostSpan>
          ))}
        </Link>
      </div>
    </>
  );
};

export default RecipePosts;
