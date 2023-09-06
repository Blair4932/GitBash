import { useState, useEffect } from 'react';
import './App.css';
import CharacterSelect from './components/CharacterSelect';
import PlayerMovesModal from './components/PlayerMovesModal';
import CharacterImage from './components/CharacterImage';
import ArenaSelect from './components/ArenaSelect';
import ArenaImage from './components/ArenaImage';
import RoundCounter from './components/RoundCounter';
import Result from './components/Result';
import FightButton from './components/FightButton';
import HealthBar from './components/HealthBar';

function App() {
	const [characters, setCharacters] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState({});
	const [opponentCharacter, setOpponentCharacter] = useState({});
	const [arenas, setArenas] = useState({});
	const [selectedArena, setSelectedArena] = useState({});
	const [playerMove, setPlayerMove] = useState({});
	const [opponentMove, setOpponentMove] = useState({});
	const [playerHealth, setPlayerHealth] = useState(100);
	const [opponentHealth, setOpponentHealth] = useState(100);
	const [result, setResult] = useState('');
	const [roundTracker, setRoundTracker] = useState(0);
	const [playerSpecialMoveCharge, setPlayerSpecialMoveCharge] = useState(0);
	const [opponentSpecialMoveCharge, setOpponentSpecialMoveCharge] =
		useState(0);
	const [fightState, setFightState] = useState(false);

	const fetchCharacters = () => {
		fetch('http://localhost:9000/api/characters/')
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data);
				console.log(data);
				console.log(characters);
				setSelectedCharacter(data[0]);
				setOpponentCharacter(data[0]);
			});
	};

	const fetchArenas = () => {
		fetch('http://localhost:9000/api/arenas/')
			.then((res) => res.json())
			.then((data) => {
				setArenas(data);
				setSelectedArena(data[0]);
			});
	};

	useEffect(() => {
		fetchArenas();
	}, []);

	useEffect(() => {
		fetchCharacters();
	}, []);

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

	const compareMoves = () => {
		setRoundTracker(roundTracker + 1);
		setFightState(true);
		if (playerMove.name == 'Block' || opponentMove.name == 'Block') {
			// Handle the case when a move is blocked
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

			console.log('player: ', playerSpecialMoveCharge);
			console.log('opponent: ', opponentSpecialMoveCharge);

			if (playerMoveDamage > opponentMoveDamage) {
				setOpponentHealth(
					opponentHealth - (playerMoveDamage - opponentMove.defense)
				);
				setPlayerSpecialMoveCharge(
					playerSpecialMoveCharge +
						(playerMoveDamage - opponentMove.defense)
				);
			} else {
				setPlayerHealth(
					playerHealth - (opponentMoveDamage - playerMove.defense)
				);
				setOpponentSpecialMoveCharge(
					opponentSpecialMoveCharge +
						(opponentMoveDamage - playerMove.defense)
				);
			}
		}
		setPlayerMove('');
	};
	const reset = () => {
		setFightState(false);
		setSelectedArena(arenas[0]);
		setSelectedCharacter(characters[0]);
		setOpponentHealth(100);
		setPlayerHealth(100);
		setRoundTracker(0);
		setResult(null);
		setPlayerSpecialMoveCharge(0);
		setOpponentSpecialMoveCharge(0);
	};

	return (
		<div>
			{characters.length > 0 && (
				<>
					<div id="background" className={selectedArena.file_name}>
						<div className="gameplay-information">
							{result === 'victory' ? (
								<Result result={result} reset={reset} />
							) : result === 'loss' ? (
								<Result result={result} reset={reset} />
							) : (
								<RoundCounter roundTracker={roundTracker} />
							)}
						</div>
						{fightState ? (
							<>
								<HealthBar
									playerHealth={playerHealth}
								/>
								<CharacterImage
									selectedCharacter={selectedCharacter}
									opponentCharacter={opponentCharacter}
								/>
								<PlayerMovesModal
									selectedCharacter={selectedCharacter}
									setPlayerMove={setPlayerMove}
									playerSpecialMoveCharge={
										playerSpecialMoveCharge
									}
									opponentSpecialMoveCharge={
										opponentSpecialMoveCharge
									}
									compareMoves={compareMoves}
									fightState={fightState}
									playerMove={playerMove}
								/>
							</>
						) : (
							<>
								<CharacterImage
									selectedCharacter={selectedCharacter}
									opponentCharacter={opponentCharacter}
								/>
								<CharacterSelect
									characters={characters}
									setSelectedCharacter={setSelectedCharacter}
								/>
								<ArenaSelect
									arenas={arenas}
									setSelectedArena={setSelectedArena}
									selectedArena={selectedArena}
								/>
								<ArenaImage selectedArena={selectedArena} />
								<FightButton setFightState={setFightState} />
							</>
						)}
						<div className="gameplay-information">
							<p>
								<b>Your move: </b>
							</p>
							<p>{playerMove.name}</p>
							<p>
								<b>Opponents move: </b>
							</p>
							<p>{opponentMove.name}</p>
							<p>
								<b>Your health: </b>
							</p>
							<p>{playerHealth}</p>
							<p>
								<b>Opponents health: </b>
							</p>
							<p>{opponentHealth}</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
