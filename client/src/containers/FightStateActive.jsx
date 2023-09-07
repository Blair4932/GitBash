import Result from '../components/Result';
import RoundCounter from '../components/RoundCounter';
import CharacterImage from '../components/CharacterImage';
import PlayerMovesModal from '../components/PlayerMovesModal';

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
			/>{' '}
		</>
	);
};

export default FightStateActive;
