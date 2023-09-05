import { useState, useEffect } from "react";

function App() {

  const [characters, setCharacters] = useState([]);
  const [playerMove, setPlayerMove] = useState({})
  const [opponentMove, setOpponentMove] = useState({})
  const [playerHealth, setPlayerHealth] = useState(100)
  const [opponentHealth, setOpponentHealth] = useState(100)

  const fetchCharacters = () => {
    fetch("http://localhost:9000/api/characters/")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setPlayerMove(
      {
        name: "punch",
				damageMin: 10,
				damageMax: 30,
				defence: 10
			}
    )
    setOpponentMove(
      {
        name: "kick",
				damageMin: 15,
				damageMax: 22,
				defence: 5
			}
    )
  }, []);

  console.log(characters)

  const compareMoves = () => {
    if (playerMove.name == "block" || opponentMove.name == "block") {
      // probably want some kind of feedback here at some point but nothing functionally happens 
    }
    else {
      const playerMoveDamage = Math.floor(Math.random() * (playerMove.damageMax - playerMove.damageMin + 1 )) + playerMove.damageMin
      const opponentMoveDamage = Math.floor(Math.random() * (opponentMove.damageMax - opponentMove.damageMin + 1 )) + opponentMove.damageMin

      playerMoveDamage > opponentMoveDamage 
      ? setOpponentHealth(opponentHealth - (playerMoveDamage - opponentMove.defence)) 
      : setPlayerHealth(playerHealth - (opponentMoveDamage - playerMove.defence))
    }
  };

  return <>
    <h1>{characters.length > 1 ? characters[0].name : "Loading"}</h1>
    <button onClick={compareMoves}>FIGHT (test)</button>
  </>;
}

export default App;
