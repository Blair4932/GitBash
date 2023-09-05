import React, { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [opponentMoves, setOpponentMoves] = useState("");

  const fetchCharacters = () => {
    fetch("http://localhost:9000/api/characters/")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  // This useEffect chooses a random move for the computer opponent and will run every time the characters state changes.
  useEffect(() => {
    if (characters.length > 0) {
      const moveTypes = ["punch", "kick", "block", "specialMove"];
      const randomMove = Math.floor(Math.random() * 4);
      setOpponentMoves(characters[0].moves[moveTypes[randomMove]]);
    }
  }, [characters]);
	const PlayersMoves = ({ selectedCharacter, setPlayerMove }) => {
		return (
			<div className="select-move">
				<input
					type="radio"
					name="move"
					id="punch"
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.punch);
					}}
				/>
				<label htmlFor="punch">
					{selectedCharacter.moves.punch.name}
				</label>
				<input
					type="radio"
					name="move"
					id="kick"
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.kick);
					}}
				/>
				<label htmlFor="kick">
					{selectedCharacter.moves.kick.name}
				</label>
				<input
					type="radio"
					name="move"
					id="block"
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.block);
					}}
				/>
				<label htmlFor="block">
					{selectedCharacter.moves.block.name}
				</label>
				<input
					type="radio"
					name="move"
					id="specialMove"
					onClick={() => {
						setPlayerMove(selectedCharacter.moves.specialMove);
					}}
				/>
				<label htmlFor="specialMove">
					{selectedCharacter.moves.specialMove.name}
				</label>
			</div>
		);
	};

  return (
    <>
      <h1></h1>
    </>
  );
}

export default App;
