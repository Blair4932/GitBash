import { useState } from 'react';
import NavBar from './NavBar';

const NewUser = ({ setUsers, users, setActiveUser, activeUser }) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const addUser = (e) => {
		e.preventDefault();
		const newUser = {
			userName,
			password,
		};
		const config = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		};
		fetch('http://localhost:9000/api/users', config).then((res) =>
			res.json().then((data) => setUsers(data))
		);
		setActiveUser(newUser);
		console.log(users);
		console.log(activeUser.userName);
	};

	return (
		<>
			<NavBar />
			<div className="container">
				<h1>Enter your information below: </h1>
				<form onSubmit={addUser}>
					<label htmlFor="userName">Username: </label>
					<input
						type="text"
						name="userName"
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
					<label htmlFor="password">Password: </label>
					<input
						type="text"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<input type="submit" />
				</form>
			</div>
		</>
	);
};

export default NewUser;
