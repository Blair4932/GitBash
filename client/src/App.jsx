import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FightStateContainer from './containers/FightStateContainer';
import './App.css';
import TitlePage from './components/TitlePage';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Leaderboard from './components/LeaderBoard';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [arenas, setArenas] = useState([]);
	const [selectedArena, setSelectedArena] = useState({});
	const [selectedCharacter, setSelectedCharacter] = useState({});
	const [opponentCharacter, setOpponentCharacter] = useState({});
	const [users, setUsers] = useState([]);

	const fetchCharacters = () => {
		fetch('http://localhost:9000/api/characters/')
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data);
				setSelectedCharacter(data[0]);
				setOpponentCharacter(data[0]);
			});
	};

	const fetchArenas = () => {
		fetch('http://localhost:9000/api/arenas/')
			.then((res) => res.json())
			.then((data) => {
				setArenas(data);
				setSelectedArena(data[0]);
			});
	};

	const fetchUsers = () => {
		fetch('http://localhost:9000/api/users/')
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	};
	useEffect(() => {
		fetchArenas();
		fetchCharacters();
		fetchUsers();
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<TitlePage title="GitBash" />} />
				<Route
					path="fight"
					element={
						<FightStateContainer
							arenas={arenas}
							characters={characters}
							selectedArena={selectedArena}
							selectedCharacter={selectedCharacter}
							opponentCharacter={opponentCharacter}
							setSelectedArena={setSelectedArena}
							setSelectedCharacter={setSelectedCharacter}
							setOpponentCharacter={setOpponentCharacter}
						/>
					}
				/>
				<Route path="about" element={<About />} />
				<Route
					path="leaderboard"
					element={<Leaderboard users={users} />}
				/>
				<Route path="/*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
};

export default App;
