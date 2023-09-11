const FightButton = ({ setFightState }) => {
	var fightAudio = new Audio('./audio/arena_audio/fight.mp3');

	const handleFightClick = () => {
		setFightState(true);
		fightAudio.play();
	};

	return (
		<div className="fight-button-container">
			<button
				className="fight-button glow-on-hover metal-button"
				onClick={handleFightClick}
			>
				FIGHT
			</button>
		</div>
	);
};

export default FightButton;
