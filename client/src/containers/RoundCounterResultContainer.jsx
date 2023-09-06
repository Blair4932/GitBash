const RoundCounterResultContainer = ({ roundTracker, result }) => {
	return (
		<div>
			{result === 'Victory' ? (
				<p>Victory</p>
			) : result === 'Loss' ? (
				<div>
					<p>K.O - You Lose</p> <button>Try again?</button>
				</div>
			) : (
				<p>Round number: {roundTracker}</p>
			)}
		</div>
	);
};

export default RoundCounterResultContainer;
