import NavBar from './NavBar';

const TitlePage = () => {
	return (
		<>
			<NavBar />
			<div className="hero-text">
				<h3>Welcome To</h3>
				<h1>GITBASH</h1>
				<a href="/fight">
					<button>Enter the Arena</button>
				</a>
			</div>
		</>
	);
};

export default TitlePage;
