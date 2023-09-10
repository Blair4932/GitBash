import NavBar from './NavBar';

function Leaderboard({ users }) {
	console.log(users);
	return (
		<div>
			<NavBar />
			<h1>Hall of Champions </h1>
			{users.map((user) => (
				<ol>
					<li key={user._id}>
						<h2>User Name: {user.userName}</h2>
						<p>
							Wins: {user.wins} | Losses: {user.losses}
						</p>
					</li>
				</ol>
			))}
		</div>
	);
}

export default Leaderboard;
