const CharacterSelect = ({ characters, setSelectedCharacter }) => {
	return (
		<div className="character--grid">
			{characters.map((character) => (
				<div key={character._id} className="character--tile">
					<button
						onClick={() => {
							setSelectedCharacter(character);
						}}
						className="tile--button"
					>
					</button>
					<div className="tile--info">
						<img src={`./images/character_sprites/${character.file_name}/${character.file_name + "_default"}.png`} className="tile--icon"/>
						<h2>{character.name}</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default CharacterSelect;
