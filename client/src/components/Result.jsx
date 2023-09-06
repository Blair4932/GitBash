const Result = ({ result, reset }) => {
	return (
		<div>
			{result == 'Victory' ? (
				<div>
					<h3>You Win!</h3>
					<button onClick={reset}>Play again?</button>
				</div>
			) : (
				<div>
					<h3>You Lose!</h3>
					<button onClick={reset}>Play again?</button>
				</div>
			)}
		</div>
	);
};

export default Result;