import { useState, useEffect } from 'react';

function App() {
	const [characters, setCharacters] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState({});
	const [playerMove, setPlayerMove] = useState({});

	const fetchCharacters = () => {
		fetch('http://localhost:9000/api/characters/')
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data);
				setSelectedCharacter(data[0]);
			});
	};
	useEffect(() => {
		fetchCharacters();
	}, []);

	const PlayersMoves = ({ selectedCharacter, setPlayerMove }) => {
		return (
			<div className="select-move">
				<input
					type="radio"
					name="move"
					id="punch"
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
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.block);
					}}
				/>
				<label htmlFor="block">
					{selectedCharacter.moves.block.name}
				</label>
				<input
					type="radio"
					name="move"
					id="specialMove"
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

	const CharacterSelect = ({ characters, setSelectedCharacter }) => {
		return (
			<ul>
				{characters.map((character) => (
					<li key={character._id}>
						<button
							onClick={() => {
								setSelectedCharacter(character);
							}}
						>
							{character.name}
						</button>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div>
			{characters.length > 0 ? (
				<CharacterSelect
					characters={characters}
					setSelectedCharacter={setSelectedCharacter}
				/>
			) : (
				'Loading Characters'
			)}
			{characters.length > 0 ? (
				<PlayersMoves
					selectedCharacter={selectedCharacter}
					setPlayerMove={setPlayerMove}
				/>
			) : (
				'Loading...'
			)}
		</div>
	);
}
export default App;
