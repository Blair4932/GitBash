import './player-moves-modal.css';

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
				<p>Pick your move: </p>
				<input
					type="radio"
					name="move"
					id="punch"
					checked={playerMove.name === 'Punch'}
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.punch);
					}}
				/>
				<label htmlFor="punch">
					{selectedCharacter.moves.punch.name}
				</label>
				<input
					type="radio"
					name="move"
					id="kick"
					checked={playerMove.name === 'Kick'}
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.kick);
					}}
				/>
				<label htmlFor="kick">
					{selectedCharacter.moves.kick.name}
				</label>
				<input
					type="radio"
					name="move"
					id="block"
					checked={playerMove.name === 'Block'}
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.block);
					}}
				/>
				<label htmlFor="block">
					{selectedCharacter.moves.block.name}
				</label>
				{playerSpecialMoveCharge >= 50 ? (
					<div>
						<h3>Special Move Ready!</h3>
						<input
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
						<label htmlFor="specialMove">
							{selectedCharacter.moves.specialMove.name}
						</label>
					</div>
				) : (
					<div>
						<p>
							Your special move charge: {playerSpecialMoveCharge}
						</p>
					</div>
				)}
				<button onClick={compareMoves}>ATTACK</button>
			</div>
		</div>
	);
};

export default PlayerMovesModal;
