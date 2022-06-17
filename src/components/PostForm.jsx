import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create, ...props}) => {

  const [post, setPost] = useState({title: '', body: ''})

  
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }

    create(newPost)
    setPost({title: '', body: ''})
  }
  
  return (
    <form action="post">
        <MyInput 
          value = {post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Post Title" 
        />

        <MyInput 
          value = {post.body}
          onChange = {e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Post Text" 
        />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
  );
};

export default PostForm;