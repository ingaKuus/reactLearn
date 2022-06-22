import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
	const id = useParams().postId
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([]);
	const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
		const post = await PostService.getById(id);
		setPost(post.data)
	})
	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
		const comments = await PostService.getComments(id);
		setComments(comments.data)
	})
	
	useEffect(() => {
		fetchPostById(id)
		fetchComments(id)
	}, [])

	return (
		<div>
			{isPostLoading
			? <Loader />
			: <div>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>}

			{isPostLoading
			? <Loader />
			: <div className="comments" style={{marginTop: 80}}>
				{comments.map(c => {
					return (
						<div className="comment" style={{marginBottom: 40}}>
							<h3>{c.name}</h3>
							<h4>{c.email}</h4>
							<p>{c.body}</p>
						</div>
					)
				})}
				</div>}

				
			
		</div>
	);
};

export default PostPage;