const PlayerMovesModal = ({
	selectedCharacter,
	setPlayerMove,
	playerMove,
	playerSpecialMoveCharge,
	fightState,
	compareMoves,
}) => {
	const modalClassName = `select-move-modal ${fightState ? 'active' : ''}`;

	console.log(playerMove);

	return (
		<div className={`modal-overlay ${fightState ? 'active' : ''}`}>
			<div className={modalClassName}>
				<h1 className="modal-hero-text">Pick your move: </h1>
				<div className="move-inputs">
					<input
						className="modal-input glow-on-hover"
						type="radio"
						name="move"
						id="punch"
						checked={playerMove.name === 'Punch'}
						onClick={() => {
							setPlayerMove(selectedCharacter.moves.punch);
						}}
					/>
					<label className="modal-text" htmlFor="punch">
						{selectedCharacter.moves.punch.name}
					</label>
					<input
						className="modal-input"
						type="radio"
						name="move"
						id="kick"
						checked={playerMove.name === 'Kick'}
						onClick={() => {
							setPlayerMove(selectedCharacter.moves.kick);
						}}
					/>
					<label className="modal-text" htmlFor="kick">
						{selectedCharacter.moves.kick.name}
					</label>
					<input
						className="modal-input"
						type="radio"
						name="move"
						id="block"
						checked={playerMove.name === 'Block'}
						onClick={() => {
							setPlayerMove(selectedCharacter.moves.block);
						}}
					/>
					<label className="modal-text" htmlFor="block">
						{selectedCharacter.moves.block.name}
					</label>
					{playerSpecialMoveCharge >= 50 ? (
						<div>
							<h3>Special Move Ready!</h3>
							<input
								className="modal-input"
								type="radio"
								name="move"
								id="specialMove"
								checked={
									playerMove.name ===
									selectedCharacter.moves.specialMove
								}
								onClick={() => {
									setPlayerMove(
										selectedCharacter.moves.specialMove
									);
								}}
							/>
							<label className="modal-text" htmlFor="specialMove">
								{selectedCharacter.moves.specialMove.name}
							</label>
						</div>
					) : (
						<div>
							<p className="modal-text">
								Your special move charge:{' '}
								{playerSpecialMoveCharge}
							</p>
						</div>
					)}
				</div>
				<div className="move-stats">
					<h3>{playerMove.name} stats: </h3>
					<p>
						Damage: {playerMove.damageMin} - {playerMove.damageMax}
					</p>
					<p>Guard: {playerMove.defense}</p>
				</div>
				<button onClick={compareMoves}>ATTACK</button>
			</div>
		</div>
	);
};

export default PlayerMovesModal;
