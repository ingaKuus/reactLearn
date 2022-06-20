import React from 'react';
import MyButton from './UI/button/MyButton';
import { createBrowserHistory } from "history";

const PostItem = (props) => {
  const router = createBrowserHistory()
  
  return (
    <div className="post" id={props.post.id}>
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick = {() => router.push(`/posts/${props.post.id}`)}>
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