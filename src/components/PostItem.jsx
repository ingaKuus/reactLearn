import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  
  return (
    <div className="post" id={props.post.id}>
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton
          onClick = {(e) => props.remove(props.post)}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;