const CharacterImage = ({ selectedCharacter, opponentCharacter }) => {
	return (
		<div className="character-image-container">
			<p>Player Character: </p>
			<img
				src={`./images/character_sprites/${selectedCharacter.file_name}/${selectedCharacter.file_name}_default.png`}
				height="300px"
			/>
			<p>Opponent: </p>
			<img
				src={`./images/character_sprites/${opponentCharacter.file_name}/${opponentCharacter.file_name}_default_inverted.png`}
			/>
		</div>
	);
};

export default CharacterImage;
