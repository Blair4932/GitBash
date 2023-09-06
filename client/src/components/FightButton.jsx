const FightButton = ({ setFightState }) => {
	return (
		<div className="fight-button-container">
			<button onClick={() => setFightState(true)}>FIGHT</button>
		</div>
	);
};

export default FightButton;
