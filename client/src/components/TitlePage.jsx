import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const TitlePage = () => {
	return (
		<>
			<div className="background">
				<div className="hero-text">
					<h3 className="fade-in-first">Welcome To</h3>
					<h1 className="fade-in-second">GITBASH</h1>
					<Link to="/fight">
						<button className="enter-button glow-on-hover metal-button fade-in-third">
							Enter the Arena
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default TitlePage;
