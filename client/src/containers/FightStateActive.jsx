import Result from '../components/Result';
import RoundCounter from '../components/RoundCounter';
import CharacterImage from '../components/CharacterImage';
import PlayerMovesModal from '../components/PlayerMovesModal';
import HealthBar from '../components/HealthBar';
import GameplayInformation from '../components/GameplayInformation';

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
}) => {
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
			<PlayerMovesModal
				selectedCharacter={selectedCharacter}
				setPlayerMove={setPlayerMove}
				playerSpecialMoveCharge={playerSpecialMoveCharge}
				opponentSpecialMoveCharge={opponentSpecialMoveCharge}
				compareMoves={compareMoves}
				fightState={fightState}
				playerMove={playerMove}
			/>
			<div className="gameplay-information">
				<GameplayInformation
					playerMove={playerMove}
					opponentMove={opponentMove}
					playerHealth={playerHealth}
					opponentHealth={opponentHealth}
				/>
			</div>{' '}
		</>
	);
};

export default FightStateActive;
