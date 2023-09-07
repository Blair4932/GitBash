const GameplayInformation = ({
	playerMove,
	opponentMove,
	playerHealth,
	opponentHealth,
}) => {
	return (
		<>
			<p>
				<b>Your move: </b>
			</p>
			<p>{playerMove.name}</p>
			<p>
				<b>Opponents move: </b>
			</p>
			<p>{opponentMove.name}</p>
			<p>
				<b>Your health: </b>
			</p>
			<p>{playerHealth}</p>
			<p>
				<b>Opponents health: </b>
			</p>
			<p>{opponentHealth}</p>
		</>
	);
};

export default GameplayInformation;
