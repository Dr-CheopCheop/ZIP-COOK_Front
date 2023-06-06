import React from 'react';
import * as M from './MainStyle';
import { Link } from 'react-router-dom';

const SharingPosts = ({ posts, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {posts.map((post: any) => (
            <Link to="/community/share/1" key={post.id}>
            <M.PostSpan>
              {post.img}
              {post.title}{<br />}
              {post.date}
            </M.PostSpan>
            </Link>
          ))}
        </div>
      </>
    );
  };

  export default SharingPosts;