import About from "../pages/About"
import Error from "../pages/Error"
import Login from "../pages/Login"
import PostPage from "../pages/PostPage"
import Posts from "../pages/Posts"

export const privateRoutes = [
	{ path: '/about', element: <About /> },
	{ path: '/posts', routes: [
		{ index: true, element: <Posts /> },
		{ path: ':postId', element: <PostPage /> }
	] },
	{ path: '*', element: <Error code={404} text='Not Found!' /> }
]

export const publicRoutes = [
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <Login /> }
]
