import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';

import './styles/App.scss';

import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPagesArray, getPageCount } from './components/utils/pages';
import Pagination from './components/UI/pagination/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const posts = await PostService.getAll(limit, page);
    setPosts(posts.data);

    const totalCount = posts.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }
  


  return (
    <div className="App" style={{marginTop: '20px'}}>
      <MyButton onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter posts={posts} filter={filter} setFilter={setFilter} />

      {postError &&
        <h2>{postError}</h2>}

      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: 'center', margin: '20px 0'}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List'}/>}

      <Pagination
        totalPages={totalPages} 
        page = {page}
        changePage = {changePage}
      ></Pagination>
      

      
    </div>
  );
}

export default App;
