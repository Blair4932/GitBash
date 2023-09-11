import { useEffect } from 'react';
import NavBar from './NavBar';

const Login = ({ users, setActiveUser, fightState }) => {
	useEffect(() => {
		if (fightState) {
			location.reload();
		}
	}, []);

	return (
		<>
			<NavBar />
			<h1>Select User:</h1>
			<select
				name="users"
				onChange={(e) => setActiveUser(e.target.value)}
			>
				{users.map((user) => (
					<option value={user}>{user.userName}</option>
				))}
			</select>
		</>
	);
};

export default Login;
