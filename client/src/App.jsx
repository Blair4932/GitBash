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

  return (
    <>
      <h1></h1>
    </>
  );
}

export default App;
