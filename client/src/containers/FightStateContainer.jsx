import { useState, useEffect } from 'react';
import FightStateActive from './FightStateActive';
import FightStateInactive from './FightStateInactive';
import NavBar from '../components/NavBar';

function FightStateContainer({
	arenas,
	characters,
	selectedArena,
	opponentCharacter,
	setSelectedArena,
	setSelectedCharacter,
	selectedCharacter,
	setOpponentCharacter,
}) {
	const [playerMove, setPlayerMove] = useState('');
	const [opponentMove, setOpponentMove] = useState({});
	const [playerHealth, setPlayerHealth] = useState(100);
	const [opponentHealth, setOpponentHealth] = useState(100);
	const [result, setResult] = useState('');
	const [roundTracker, setRoundTracker] = useState(0);
	const [playerSpecialMoveCharge, setPlayerSpecialMoveCharge] = useState(0);
	const [opponentSpecialMoveCharge, setOpponentSpecialMoveCharge] =
		useState(0);
	const [fightState, setFightState] = useState(false);
	const [damageDealt, setDamageDealt] = useState(0);
	const [winner, setWinner] = useState(null);

	useEffect(() => {
		if (characters.length > 0) {
			const moveTypes = ['punch', 'kick', 'block'];
			const moveTypesSpecial = ['punch', 'kick', 'block', 'specialMove'];
			if (opponentSpecialMoveCharge >= 50) {
				const randomMove = Math.floor(Math.random() * 4);
				setOpponentMove(
					opponentCharacter.moves[moveTypesSpecial[randomMove]]
				);
			} else {
				const randomMove = Math.floor(Math.random() * 3);
				setOpponentMove(opponentCharacter.moves[moveTypes[randomMove]]);
			}
		}
	}, [playerMove, opponentSpecialMoveCharge, opponentCharacter]);

	useEffect(() => {
		if (characters.length > 0) {
			const characterList = characters.map((character) => character);
			const randomCharacter = Math.floor(
				Math.random() * characterList.length
			);
			setOpponentCharacter(characterList[randomCharacter]);
		}
	}, [characters]);

	useEffect(() => {
		if (playerHealth <= 0) {
			setPlayerHealth(0);
			setResult('defeat');
			console.log('result: ', result);
		}
	}, [playerHealth]);

	useEffect(() => {
		if (opponentHealth <= 0) {
			setOpponentHealth(0);
			setResult('victory');
			console.log('result: ', result);
		}
	}, [opponentHealth]);

	const compareMoves = () => {
		setRoundTracker(roundTracker + 1);
		setFightState(true);
		if (playerMove.name === 'Block' || opponentMove.name === 'Block') {
			setWinner('blocked');
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

			if (playerMoveDamage > opponentMoveDamage) {
				const damageDealt = playerMoveDamage - opponentMove.defense;
				setOpponentHealth(opponentHealth - damageDealt);
				setPlayerSpecialMoveCharge(
					playerSpecialMoveCharge +
						(playerMoveDamage - opponentMove.defense)
				);
				setDamageDealt(damageDealt);
				setWinner('player');
				const hitAudio = new Audio(
					`./audio/character_audio/${opponentCharacter.file_name}/${opponentCharacter.file_name}_hit.mp3`
				);
				hitAudio.play();
			} else {
				const damageDealt = opponentMoveDamage - playerMove.defense;
				setPlayerHealth(playerHealth - damageDealt);
				setOpponentSpecialMoveCharge(
					opponentSpecialMoveCharge +
						(opponentMoveDamage - playerMove.defense)
				);
				setDamageDealt(damageDealt);
				setWinner('opponent');
				const hitAudio = new Audio(
					`./audio/character_audio/${selectedCharacter.file_name}/${selectedCharacter.file_name}_hit.mp3`
				);
				hitAudio.play();
			}
		}

		if (opponentMove.name === opponentCharacter.moves.specialMove.name) {
			setOpponentSpecialMoveCharge(0);
		}
		if (playerMove.name === selectedCharacter.moves.specialMove.name) {
			setPlayerSpecialMoveCharge(0);
		}
	};

	const reset = () => {
		setFightState(false);
		setSelectedArena(arenas[0]);
		setSelectedCharacter(characters[0]);
		setOpponentHealth(100);
		setPlayerHealth(100);
		setRoundTracker(0);
		setResult('null');
		setPlayerSpecialMoveCharge(0);
		setOpponentSpecialMoveCharge(0);
		setDamageDealt(0);
		setWinner(null);
		location.reload();
	};

	return (
		<div>
			<NavBar />
			{characters.length > 0 && (
				<div id="background" className={selectedArena.file_name}>
					{fightState ? (
						<FightStateActive
							result={result}
							reset={reset}
							roundTracker={roundTracker}
							selectedCharacter={selectedCharacter}
							opponentCharacter={opponentCharacter}
							setPlayerMove={setPlayerMove}
							playerSpecialMoveCharge={playerSpecialMoveCharge}
							opponentSpecialMoveCharge={
								opponentSpecialMoveCharge
							}
							compareMoves={compareMoves}
							fightState={fightState}
							playerMove={playerMove}
							playerHealth={playerHealth}
							opponentHealth={opponentHealth}
							opponentMove={opponentMove}
							damageDealt={damageDealt}
							winner={winner}
						/>
					) : (
						<FightStateInactive
							arenas={arenas}
							selectedArena={selectedArena}
							setSelectedArena={setSelectedArena}
							setFightState={setFightState}
							setSelectedCharacter={setSelectedCharacter}
							characters={characters}
							opponentCharacter={opponentCharacter}
							selectedCharacter={selectedCharacter}
						/>
					)}
				</div>
			)}
		</div>
	);
}

export default FightStateContainer;
