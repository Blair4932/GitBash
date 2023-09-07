import CharacterImage from '../components/CharacterImage';
import PlayerMovesModal from '../components/PlayerMovesModal';
import HealthBar from '../components/HealthBar';
import MovesInformation from '../components/MovesInformation';
import { useState } from 'react';

const FightStateActive = ({
	result,
	reset,
	roundTracker,
	selectedCharacter,
	opponentCharacter,
	setPlayerMove,
	playerSpecialMoveCharge,
	opponentSpecialMoveCharge,
	compareMoves,
	fightState,
	playerMove,
	playerHealth,
	opponentHealth,
	opponentMove,
	damageDealt,
	winner,
}) => {
	const [modalVisible, setModalVisible] = useState(true);

	const playFight = () => {
		setTimeout(() => {
			setModalVisible(true);
			setPlayerMove('');
		}, 1000);
		setModalVisible(false);
		compareMoves();
	};

	return (
		<>
			<HealthBar
				playerHealth={playerHealth}
				opponentHealth={opponentHealth}
				roundTracker={roundTracker}
				result={result}
				opponentCharacter={opponentCharacter}
			/>
			<CharacterImage
				selectedCharacter={selectedCharacter}
				opponentCharacter={opponentCharacter}
				fightState={fightState}
			/>
			{modalVisible ? (
				<PlayerMovesModal
					selectedCharacter={selectedCharacter}
					setPlayerMove={setPlayerMove}
					playerSpecialMoveCharge={playerSpecialMoveCharge}
					opponentSpecialMoveCharge={opponentSpecialMoveCharge}
					compareMoves={compareMoves}
					fightState={fightState}
					playerMove={playerMove}
					playFight={playFight}
					result={result}
					reset={reset}
				/>
			) : (
				<div className="container">
					<MovesInformation
						playerMove={playerMove}
						opponentMove={opponentMove}
						opponentCharacter={opponentCharacter}
						playerCharacter={selectedCharacter}
						damageDealt={damageDealt}
						winner={winner}
					/>
				</div>
			)}
		</>
	);
};

export default FightStateActive;
