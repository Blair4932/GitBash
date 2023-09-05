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

	console.log(playerMove);

	return (
		<div>
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

const PlayersMoves = ({ selectedCharacter, setPlayerMove }) => {
	return (
		<div className="select-move">
			<input
				type="radio"
				name="move"
				id="punch"
				onChange={() => {
					setPlayerMove(selectedCharacter.moves.punch);
				}}
			/>
			<label htmlFor="punch">{selectedCharacter.moves.punch.name}</label>
			<input
				type="radio"
				name="move"
				id="kick"
				onChange={() => {
					setPlayerMove(selectedCharacter.moves.kick);
				}}
			/>
			<label htmlFor="kick">{selectedCharacter.moves.kick.name}</label>
			<input
				type="radio"
				name="move"
				id="block"
				onChange={() => {
					setPlayerMove(selectedCharacter.moves.block);
				}}
			/>
			<label htmlFor="block">{selectedCharacter.moves.block.name}</label>
			<input
				type="radio"
				name="move"
				id="specialMove"
				onChange={() => {
					setPlayerMove(selectedCharacter.moves.specialMove);
				}}
			/>
			<label htmlFor="specialMove">
				{selectedCharacter.moves.specialMove.name}
			</label>
		</div>
	);
};

export default App;
