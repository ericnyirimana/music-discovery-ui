import { useEffect } from 'react';
import axios from 'axios';
import axiosPayload from './AxiosPayload';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = () => {
			axios.get('/sanctum/csrf-cookie').then((response) => {
				axios
					.get(
						`${process.env.REACT_APP_API_URL}/google/callback${location.search}`,
						axiosPayload()
					)
					.then((response) => {
						return response;
					})
					.then((data) => {
						localStorage.setItem('token', data.data.access_token);
						localStorage.setItem('username', data.data.user?.name);
						navigate('/dashboard');
					})
					.catch((error) => console.error(error));
			});
		};
		fetchData();
	}, [location, navigate]);

	return null;
};

export default GoogleCallback;
