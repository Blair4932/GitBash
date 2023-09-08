import RoundCounter from './RoundCounter';
const HealthBar = ({
	playerHealth,
	opponentHealth,
	roundTracker,
	result,
	opponentCharacter,
}) => {
	return (
		<>
			<div className="top-level-container">
				<div className="container--progress-bar">
					<h1 className="health-text">Player Health</h1>
					<div className="progress-bar">
						<div className="progress-bar--value">
							<h3>{playerHealth}</h3>
						</div>
						<div
							className="progress-bar--fill"
							style={{ width: playerHealth * 3 }}
						></div>
					</div>
				</div>
				<RoundCounter roundTracker={roundTracker} result={result} />
				<div className="container--progress-bar">
					<h1 className="health-text opponent">
						{opponentCharacter.name}'s Health
					</h1>
					<div className="progress-bar">
						<div className="progress-bar--value opponent">
							<h3>{opponentHealth}</h3>
						</div>
						<div
							className="progress-bar--fill opponent"
							style={{ width: opponentHealth * 3 }}
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HealthBar;
