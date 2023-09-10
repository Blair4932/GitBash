import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<nav>
				<ul className="nav-bar">
					<li>
						<Link to="/">Home</Link>
					</li>
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
			<hr className="fade-in-fourth break" />
			<Outlet />
		</>
	);
};

export default NavBar;
