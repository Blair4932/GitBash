const CharacterImage = ({ selectedCharacter, opponentCharacter }) => {
	return (
		<div className="character-image-container">
			<img
				src={`./images/character_sprites/${selectedCharacter.file_name}/${selectedCharacter.file_name}_default.png`}
				height="300px"
			/>
			<img
				src={`./images/character_sprites/${opponentCharacter.file_name}/${opponentCharacter.file_name}_default_inverted.png`}
				height="300px"
			/>
		</div>
	);
};

export default CharacterImage;
