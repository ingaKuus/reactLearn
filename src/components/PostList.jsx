import React from 'react';
import PostItem from './PostItem';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Outlet } from 'react-router-dom';

const PostList = ({posts, title, remove}) => {
  
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {posts.length ? title : 'No posts!'}
      </h1>

      <TransitionGroup>
        {posts ? posts.map((post, index) => {
          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >

              <PostItem number={index + 1} post={post} remove={remove} />

            </CSSTransition>
          )
        }) : ''}
      </TransitionGroup>
    </div>
  );
};

export default PostList;