import React from 'react';
import { Routes, Route, Outlet, useNavigate, createBrowserHistory, useLocation } from 'react-router-dom';
import About from './../pages/About';
import Posts from './../pages/Posts';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';
import { useEffect } from 'react';
import { privateRoutes, publicRoutes } from '../router/route';
import { useContext } from 'react';
import { AuthContext } from '../context';

const AppRouter = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	const loc = useLocation();
	const navigate = useNavigate()

	useEffect(() => {
		if (loc.pathname === '/' && isAuth) {
			navigate('/posts')
		}
	}, [])

	function drawRoutes(routes = []) {
		return routes.map( (r, i) => {
			return (
				<Route 
					path={r.path || ''}
					element = {r.element}
					index = {r.index}
					key = {i}
				>
					{r.routes
						? drawRoutes(r.routes)
						: ''
					}
				</Route>
			)
		})
	}

	
	return (
		<Routes>
			{
				isAuth
				? drawRoutes(privateRoutes)
				: drawRoutes(publicRoutes)
			}
		</Routes>
	);
};

export default AppRouter;