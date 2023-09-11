import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TitlePage = ({ fightState }) => {
	useEffect(() => {
		if (fightState) {
			location.reload();
		}
	}, []);

	return (
		<>
			<div className="background">
				<div className="hero-text">
					<h3 className="fade-in-first">Welcome To</h3>
					<h1 className="fade-in-second">GITBASH</h1>
					<div className="enter-buttons">
						<Link to="/login">
							<button className="enter-button glow-on-hover metal-button fade-in-third">
								Login
							</button>
						</Link>
						<Link to="/fight">
							<button className="enter-button glow-on-hover metal-button fade-in-third">
								Fight
							</button>
						</Link>
						<Link to="/new">
							<button className="enter-button glow-on-hover metal-button fade-in-third">
								Create User
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default TitlePage;
