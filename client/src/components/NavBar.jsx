import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/fight">Fight</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/leaderboard">Leaderboard</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
		</>
	);
};

export default NavBar;
