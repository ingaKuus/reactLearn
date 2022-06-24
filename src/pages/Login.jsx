import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	const nav = useNavigate()
	const login = e => {
		e.preventDefault()
		setIsAuth(true)
		nav('/posts')
	}

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Enter Login"/>
				<MyInput type="text" placeholder="Enter Password"/>
				<MyButton>
					Login
				</MyButton>
			</form>
		</div>
	);
};

export default Login;