import { useEffect } from 'react';
import NavBar from './NavBar';

function About({ fightState }) {
	useEffect(() => {
		if (fightState) {
			location.reload();
		}
	}, []);

	return (
		<div>
			<NavBar />
			<h2>How to Play: </h2>
			<p>
				Pick your warrior, and FIGHT! GITBASH is a battle to the death.
				Select your move and each turn whoever hits harder causes damage
				to their opponent. Cause enough damage, and you will earn your
				devastating special move! <br></br> So what are you waiting for?
				Get out there and FIGHT!
			</p>
		</div>
	);
}

export default About;
