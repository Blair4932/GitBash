import { useState, useEffect } from 'react';
import CharacterSelect from './components/CharacterSelect';
import PlayerMovesModal from './components/PlayerMovesModal';

function App() {
	const [characters, setCharacters] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState({});
	const [opponentCharacter, setOpponentCharacter] = useState({});
	const [playerMove, setPlayerMove] = useState({});
	const [opponentMove, setOpponentMove] = useState({});
	const [playerHealth, setPlayerHealth] = useState(100);
	const [opponentHealth, setOpponentHealth] = useState(100);

	const fetchCharacters = () => {
		fetch('http://localhost:9000/api/characters/')
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data);
				setSelectedCharacter(data[0]);
				setOpponentCharacter(data[0]);
			});
	};

	useEffect(() => {
		fetchCharacters();
	}, []);

	const compareMoves = () => {
		if (playerMove.name == 'block' || opponentMove.name == 'block') {
			return;
		} else {
			const playerMoveDamage =
				Math.floor(
					Math.random() *
						(playerMove.damageMax - playerMove.damageMin + 1)
				) + playerMove.damageMin;
			const opponentMoveDamage =
				Math.floor(
					Math.random() *
						(opponentMove.damageMax - opponentMove.damageMin + 1)
				) + opponentMove.damageMin;

			playerMoveDamage > opponentMoveDamage
				? setOpponentHealth(
						opponentHealth -
							(playerMoveDamage - opponentMove.defense)
				  )
				: setPlayerHealth(
						playerHealth - (opponentMoveDamage - playerMove.defense)
				  );
			console.log(playerHealth);
			console.log(opponentHealth);
		}
	};

	useEffect(() => {
		if (characters.length > 0) {
			const moveTypes = ['punch', 'kick', 'block', 'specialMove'];
			const randomMove = Math.floor(Math.random() * 4);
			setOpponentMove(characters[0].moves[moveTypes[randomMove]]);
		}
	}, [characters]);

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
				<CharacterImage
					selectedCharacter={selectedCharacter}
					opponentCharacter={opponentCharacter}
				/>
			) : (
				'Loading Image'
			)}
			{characters.length > 0 ? (
				<PlayerMovesModal
					selectedCharacter={selectedCharacter}
					setPlayerMove={setPlayerMove}
				/>
			) : (
				'Loading...'
			)}
			<p>Your move:</p>
			<p>{playerMove.name}</p>
			<p>Opponents move:</p>
			<p>{opponentMove.name}</p>
			<button onClick={compareMoves}>FIGHT</button>
			<p>Your health: </p>
			<p>{playerHealth}</p>
			<p>Opponents health:</p>
			<p>{opponentHealth}</p>
		</div>
	);
}

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

export default App;
