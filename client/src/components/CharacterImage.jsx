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
				src={`${
					fightState
						? `./images/character_sprites/${opponentCharacter.file_name}/${opponentCharacter.file_name}_default_inverted.gif`
						: './images/character_sprites/question_mark/question_mark.gif'
				}`}
				height={`${fightState ? `275px` : `300px`}`}
				className={`character-sprite ${fightState ? 'active' : ''}`}
			/>
		</div>
	);
};

export default CharacterImage;
