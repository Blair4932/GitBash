import { useEffect } from 'react';
import NavBar from './NavBar';

function Leaderboard({ users, fightState }) {
	useEffect(() => {
		if (fightState) {
			location.reload();
		}
	}, []);

	return (
		<div>
			<NavBar />
			<div className="container">
				<h1>Hall of Champions </h1>
				{users.map((user) => (
					<ul>
						<li key={user._id}>
							<h2>User Name: {user.userName}</h2>
							<p>
								Wins: {user.wins} | Losses: {user.losses}
							</p>
						</li>
					</ul>
				))}
			</div>
		</div>
	);
}

export default Leaderboard;
