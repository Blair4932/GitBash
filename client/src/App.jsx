import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FightStateContainer from './containers/FightStateContainer';
import './App.css';
import TitlePage from './components/TitlePage';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Leaderboard from './components/LeaderBoard';
import NewUser from './components/NewUser';
import Login from './components/Login';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [arenas, setArenas] = useState([]);
	const [selectedArena, setSelectedArena] = useState({});
	const [selectedCharacter, setSelectedCharacter] = useState({});
	const [opponentCharacter, setOpponentCharacter] = useState({});
	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState('');
	const [fightState, setFightState] = useState(false);

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

	const reset = () => {
		setFightState(false);
		setSelectedArena(arenas[0]);
		setSelectedCharacter(characters[0]);
		setOpponentHealth(100);
		setPlayerHealth(100);
		setRoundTracker(0);
		setResult('null');
		setPlayerSpecialMoveCharge(0);
		setOpponentSpecialMoveCharge(0);
		setDamageDealt(0);
		setWinner(null);
		location.reload();
	};

	let arenaAudio = new Audio(
		`./audio/arena_audio/${selectedArena.file_name}.mp3`
	);

	console.log(activeUser.userName);
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<TitlePage title="GitBash" fightState={fightState} />
					}
				/>
				<Route
					path="/new"
					element={
						<NewUser
							setUsers={setUsers}
							users={users}
							setActiveUser={setActiveUser}
							activeUser={activeUser}
						/>
					}
				/>
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
							activeUser={activeUser}
							reset={reset}
							setFightState={setFightState}
							fightState={fightState}
							arenaAudio={arenaAudio}
						/>
					}
				/>
				<Route
					path="login"
					element={
						<Login
							users={users}
							setActiveUser={setActiveUser}
							fightState={fightState}
						/>
					}
				/>
				<Route
					path="about"
					element={<About fightState={fightState} />}
				/>
				<Route
					path="leaderboard"
					element={
						<Leaderboard users={users} fightState={fightState} />
					}
				/>
				<Route path="/*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
};

export default App;
