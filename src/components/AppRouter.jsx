import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './../pages/About';
import Posts from './../pages/Posts';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/about' element={<About />} />
			<Route path='/posts' element={<Posts />}>
				<Route path=':postId' element={<PostPage />} />
			</Route>
			
			<Route path='*' element={<Error code={404} text={'Not found!'} />} />
			
		</Routes>
	);
};

export default AppRouter;