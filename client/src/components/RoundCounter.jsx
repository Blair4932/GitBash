const RoundCounter = ({ roundTracker, result }) => {
	return (
		<>
			<div className={'round-tracker'}>
				{result === 'victory' || result === 'defeat' ? (
					<>
						<h1>Result:</h1>
						<div className="round-number">
							<h1>{result}</h1>
						</div>
					</>
				) : (
					<>
						<h1>Round</h1>
						<div className="round-number">
							<h1>{roundTracker}</h1>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default RoundCounter;
