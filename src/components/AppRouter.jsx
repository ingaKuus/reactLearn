import React from 'react';
import { Routes, Route, Outlet, useNavigate, createBrowserHistory, useLocation } from 'react-router-dom';
import About from './../pages/About';
import Posts from './../pages/Posts';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';
import { useEffect } from 'react';
import { routes } from '../router/route';

const AppRouter = () => {
	const loc = useLocation();
	const navigate = useNavigate()

	useEffect(() => {
		if (loc.pathname === '/') {
			navigate('/posts')
		}
	}, [])

	function drawRoutes(routes = []) {
		return routes.map( r => {
			return (
				<Route 
					path={r.path || ''}
					element = {r.element || ''}
					index = {r.index}
					key = {r.path || Date.now()}
				>
					{r.routes
						? drawRoutes(r.routes)
						: ''
					}
				</Route>
			)
		})
	}

	console.log(drawRoutes(routes));
	
	return (
		<Routes>
			{drawRoutes(routes)}
		</Routes>
	);
};

export default AppRouter;