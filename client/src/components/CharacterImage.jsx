const CharacterImage = ({ selectedCharacter, opponentCharacter }) => {
	return (
		<div>
			<p>Player Character: </p>
			<img src={`${selectedCharacter.sprites.default}`} />
			<p>Opponent: </p>
			<img src={`${opponentCharacter.sprites.default}`} />
		</div>
	);
};

export default CharacterImage;
