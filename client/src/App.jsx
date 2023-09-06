import { useState, useEffect } from 'react';
import CharacterSelect from './components/CharacterSelect';
import PlayerMovesModal from './components/PlayerMovesModal';
import CharacterImage from './components/CharacterImage';
import RoundCounter from './components/RoundCounter';
import Result from './components/Result';

function App() {
	const [characters, setCharacters] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState({});
	const [opponentCharacter, setOpponentCharacter] = useState({});
	const [playerMove, setPlayerMove] = useState({});
	const [opponentMove, setOpponentMove] = useState({});
	const [playerHealth, setPlayerHealth] = useState(100);
	const [opponentHealth, setOpponentHealth] = useState(100);
	const [result, setResult] = useState('');
	const [roundTracker, setRoundTracker] = useState(0);

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
		setRoundTracker(roundTracker + 1);
		if (playerMove.name == 'Block' || opponentMove.name == 'Block') {
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

	console.log('Health out of the loop');
	console.log(playerHealth);
	console.log(opponentHealth);

	useEffect(() => {
		if (characters.length > 0) {
			const moveTypes = ['punch', 'kick', 'block', 'specialMove'];
			const randomMove = Math.floor(Math.random() * 4);
			setOpponentMove(characters[0].moves[moveTypes[randomMove]]);
		}
	}, [playerMove]);

	useEffect(() => {
		if (playerHealth <= 0) {
			setResult('loss');
		}
	}, [playerHealth]);

	useEffect(() => {
		if (opponentHealth <= 0) {
			setResult('victory');
		}
	}, [opponentHealth]);

	return (
		<div>
			{characters.length > 0 && (
				<>
					{result === 'victory' ? (
						<Result result={result} />
					) : result === 'loss' ? (
						<Result result={result} />
					) : (
						<RoundCounter roundTracker={roundTracker} />
					)}
					<CharacterSelect
						characters={characters}
						setSelectedCharacter={setSelectedCharacter}
					/>
					<CharacterImage
						selectedCharacter={selectedCharacter}
						opponentCharacter={opponentCharacter}
					/>
					<PlayerMovesModal
						selectedCharacter={selectedCharacter}
						setPlayerMove={setPlayerMove}
					/>
					<p>
						<b>Your move: </b>
					</p>
					<p>{playerMove.name}</p>
					<p>
						<b>Opponents move: </b>
					</p>
					<p>{opponentMove.name}</p>
					<button onClick={compareMoves}>FIGHT</button>
					<p>
						<b>Your health: </b>
					</p>
					<p>{playerHealth}</p>
					<p>
						<b>Opponents health: </b>
					</p>
					<p>{opponentHealth}</p>
				</>
			)}
		</div>
	);
}

export default App;
