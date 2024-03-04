import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ component: Component, ...rest }) => {
	return localStorage.getItem('token') ? (
		<Outlet/>
	) : (
		<Navigate to="/"/>
	);
};
