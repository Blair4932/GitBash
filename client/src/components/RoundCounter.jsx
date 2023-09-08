const RoundCounter = ({ roundTracker, result }) => {
	return (
		<>
			<div
				className={`${
					result === 'win' || result === 'loss' ? '' : 'round-tracker'
				}`}
			>
				<h1>Round</h1>
				<div className="round-number">
					<h1>{roundTracker}</h1>
				</div>
			</div>
		</>
	);
};

export default RoundCounter;
