import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const history = useNavigate()
  
  return (
    <div className="post" id={props.post.id}>
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick = {() => history(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
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