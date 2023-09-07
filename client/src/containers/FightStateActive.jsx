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
		}, 1000);
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
			<div className="container">
				<HealthBar
					playerHealth={playerHealth}
					opponentHealth={opponentHealth}
				/>
			</div>
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
