import { Link, Outlet } from 'react-router-dom';
import ActiveUser from './ActiveUser';

const NavBar = () => {
	return (
		<>
			<nav className="nav-container">
				<ActiveUser />
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
			<hr className="break" />
			<Outlet />
		</>
	);
};

export default NavBar;
