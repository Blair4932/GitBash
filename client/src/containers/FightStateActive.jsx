import Result from '../components/Result';
import RoundCounter from '../components/RoundCounter';
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
		}, 3000);
		setModalVisible(false);
		compareMoves();
	};
	return (
		<>
			<div className="round-tracker-container">
				{result === 'victory' ? (
					<Result result={result} reset={reset} />
				) : result === 'loss' ? (
					<Result result={result} reset={reset} />
				) : (
					<RoundCounter roundTracker={roundTracker} />
				)}
			</div>
			<HealthBar
				playerHealth={playerHealth}
				opponentHealth={opponentHealth}
			/>
			<CharacterImage
				selectedCharacter={selectedCharacter}
				opponentCharacter={opponentCharacter}
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
				/>
			) : (
				<MovesInformation
					playerMove={playerMove}
					opponentMove={opponentMove}
					opponentCharacter={opponentCharacter}
					playerCharacter={selectedCharacter}
					damageDealt={damageDealt}
					winner={winner}
				/>
			)}
		</>
	);
};

export default FightStateActive;
