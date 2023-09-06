const PlayerMovesModal = ({ selectedCharacter, playerMove, setPlayerMove }) => {
	return (
		<div className="select-move">
			<p>Pick your move: </p>
			<input
				type="radio"
				name="move"
				id="punch"
				checked={playerMove.name === "Punch"}
				onClick={() => {
					setPlayerMove(selectedCharacter.moves.punch);
				}}
			/>
			<label htmlFor="punch">{selectedCharacter.moves.punch.name}</label>
			<input
				type="radio"
				name="move"
				id="kick"
				checked={playerMove.name === "Kick"}
				onClick={() => {
					setPlayerMove(selectedCharacter.moves.kick);
					console.log(playerMove)
				}}
			/>
			<label htmlFor="kick">{selectedCharacter.moves.kick.name}</label>
			<input
				type="radio"
				name="move"
				id="block"
				checked={playerMove.name === "Block"}
				onClick={() => {
					setPlayerMove(selectedCharacter.moves.block);
				}}
			/>
			<label htmlFor="block">{selectedCharacter.moves.block.name}</label>
			<input
				type="radio"
				name="move"
				id="specialMove"
				checked={playerMove.name === selectedCharacter.moves.specialMove}
				onClick={() => {
					setPlayerMove(selectedCharacter.moves.specialMove);
				}}
			/>
			<label htmlFor="specialMove">
				{selectedCharacter.moves.specialMove.name}
			</label>
		</div>
	);
};

export default PlayerMovesModal;
