import About from "../pages/About"
import Error from "../pages/Error"
import PostPage from "../pages/PostPage"
import Posts from "../pages/Posts"

export const routes = [
	{ path: '/about', element: <About /> },
	{ path: '/posts', routes: [
		{ index: true, element: <Posts /> },
		{ path: ':id', element: <PostPage /> }
	] },
	{ path: '*', element: <Error />, elementProps: {
		code: 404,
		text: 'Not Found!'
	} }
]
