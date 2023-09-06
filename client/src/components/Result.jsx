const Result = ({ result }) => {
	return (
		<div>
			{result == 'Victory' ? (
				<div>
					<h3>You Win!</h3>
					<button>Play again?</button>
				</div>
			) : (
				<div>
					<h3>You Lose!</h3>
					<button>Play again?</button>
				</div>
			)}
		</div>
	);
};

export default Result;
