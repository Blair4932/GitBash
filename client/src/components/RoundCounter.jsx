const RoundCounter = ({ roundTracker, result }) => {
	return (
		<div
			className={`${
				result === 'win' || result === 'loss' ? '' : 'round-tracker'
			}`}
		>
			Round: {roundTracker}
		</div>
	);
};

export default RoundCounter;
