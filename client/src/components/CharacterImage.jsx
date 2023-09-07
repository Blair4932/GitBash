const CharacterImage = ({
	selectedCharacter,
	opponentCharacter,
	fightState,
}) => {
	return (
		<div className="character-image-container">
			<img
				src={`./images/character_sprites/${selectedCharacter.file_name}/${selectedCharacter.file_name}_default.gif`}
				height="275px"
				className={`character-sprite ${fightState ? 'active' : ''}`}
			/>
			<img
				src={`./images/character_sprites/${opponentCharacter.file_name}/${opponentCharacter.file_name}_default_inverted.gif`}
				height="275px"
				className={`character-sprite ${fightState ? 'active' : ''}`}
			/>
		</div>
	);
};

export default CharacterImage;
