const MovesInformation = ({
	playerMove,
	opponentMove,
	opponentCharacter,
	damageDealt,
	winner,
}) => {
	return (
		<div className="move-information-container">
			{winner === 'player' ? (
				<div className="move-information">
					<h1>
						<b>You</b>
					</h1>
					<h2>
						{playerMove.name}ed for {damageDealt} damage
					</h2>
				</div>
			) : winner === 'opponent' ? (
				<div className="opponent-move-information">
					<h1>
						<b>{opponentCharacter.name}</b>
					</h1>
					<h2>
						{opponentMove.name}ed for {damageDealt} damage
					</h2>
				</div>
			) : winner === 'blocked' ? (
				<>
					<div className="move-information">
						<h1>
							<b>You</b>
						</h1>
						<h2>{playerMove.name}ed</h2>
					</div>
					<div className="move-information">
						<h1>
							<b>{opponentCharacter.name}</b>
						</h1>
						<h2>{opponentMove.name}ed</h2>
					</div>
				</>
			) : null}
		</div>
	);
};

export default MovesInformation;
