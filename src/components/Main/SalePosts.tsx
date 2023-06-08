import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';

const SalePosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <M.PostList>
          {posts.map((post: any) => (
            <M.PostLink to={`/community/sale/${post.id}`} key={post.id}>
            <M.PostWrap>
              <M.PostImg src={`/images/${post.filepath}`} />{<br />}
              {post.title}{<br />}
              {post.location}{<br />}
              {post.date}
            </M.PostWrap>
            </M.PostLink>
          ))}
        </M.PostList>
      </>
    );
  };

  export default SalePosts;