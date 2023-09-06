const FightButton = ({ setFightState }) => {
	return (
		<div>
			<button onClick={() => setFightState(true)}>FIGHT</button>
		</div>
	);
};

export default FightButton;
