const FightButton = ({ setFightState }) => {
	return (
		<div className="fight-button-container">
			<button
				className="fight-button glow-on-hover metal-button"
				onClick={() => setFightState(true)}
			>
				FIGHT
			</button>
		</div>
	);
};

export default FightButton;
