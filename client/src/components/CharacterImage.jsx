const CharacterImage = ({ selectedCharacter, opponentCharacter }) => {
	return (
		<div>
			<p>Player Character: </p>
			<img
				src={`./images/character_sprites/${selectedCharacter.file_name}/${selectedCharacter.file_name}_default.png`}
			/>
			<p>Opponent: </p>
			<img
				src={`./images/character_sprites/${opponentCharacter.file_name}/${opponentCharacter.file_name}_default.png`}
			/>
		</div>
	);
};

export default CharacterImage;
