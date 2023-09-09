import { useState, useEffect } from "react";
import "./App.css";
import FightStateActive from "./containers/FightStateActive";
import FightStateInactive from "./containers/FightStateInactive";
import io from "socket.io-client";

const socket = io("http://192.168.1.245:9000");
socket.on("connect", () => {
  console.log("connected to server");
  socket.emit("message", "hello from client");
  socket.on("message", (data) => {
    console.log(data);
  });
});

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [opponentCharacter, setOpponentCharacter] = useState({});
  const [arenas, setArenas] = useState([]);
  const [selectedArena, setSelectedArena] = useState({});
  const [playerMove, setPlayerMove] = useState("");
  const [opponentMove, setOpponentMove] = useState("");
  const [playerHealth, setPlayerHealth] = useState(100);
  const [opponentHealth, setOpponentHealth] = useState(100);
  const [result, setResult] = useState("");
  const [roundTracker, setRoundTracker] = useState(0);
  const [playerSpecialMoveCharge, setPlayerSpecialMoveCharge] = useState(0);
  const [opponentSpecialMoveCharge, setOpponentSpecialMoveCharge] = useState(0);
  const [fightState, setFightState] = useState(false);
  const [damageDealt, setDamageDealt] = useState(0);
  const [winner, setWinner] = useState(null);
  const [room, setRoom] = useState("");
  const [opponentMoveDamage, setOpponentMoveDamage] = useState(0);
  const [playerMoveDamage, setPlayerMoveDamage] = useState(0);

  const joinRoom = () => {
    if (room) {
      socket.emit("join_room", room);
      console.log("joined room: ", room);
    }
  };

  const fetchCharacters = () => {
    fetch("http://192.168.1.245:9000/api/characters/")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setSelectedCharacter(data[0]);
        setOpponentCharacter(data[0]);
      });
  };

  const fetchArenas = () => {
    fetch("http://192.168.1.245:9000/api/arenas/")
      .then((res) => res.json())
      .then((data) => {
        setArenas(data);
        setSelectedArena(data[0]);
      });
  };

  useEffect(() => {
    fetchArenas();
    fetchCharacters();
  }, []);

  // useEffect(() => {
  //   if (characters.length > 0) {
  //     const moveTypes = ["punch", "kick", "block"];
  //     const moveTypesSpecial = ["punch", "kick", "block", "specialMove"];
  //     if (opponentSpecialMoveCharge >= 50) {
  //       const randomMove = Math.floor(Math.random() * 4);
  //       setOpponentMove(opponentCharacter.moves[moveTypesSpecial[randomMove]]);
  //     } else {
  //       const randomMove = Math.floor(Math.random() * 3);
  //       setOpponentMove(opponentCharacter.moves[moveTypes[randomMove]]);
  //     }
  //   }
  // }, [playerMove, opponentSpecialMoveCharge, opponentCharacter]);


  // useEffect(() => {
  //   if (characters.length > 0) {
  //     const characterList = characters.map((character) => character);
  //     const randomCharacter = Math.floor(Math.random() * characterList.length);
  //     setOpponentCharacter(characterList[randomCharacter]);
  //   }
  // }, [characters]);

  useEffect(() => {
    if (playerHealth <= 0) {
      setPlayerHealth(0);
      setResult("loss");
      console.log("result: ", result);
    }
  }, [playerHealth]);

  useEffect(() => {
    if (opponentHealth <= 0) {
      setOpponentHealth(0);
      setResult("victory");
      console.log("result: ", result);
    }
  }, [opponentHealth]);

  const compareMoves = () => {
    setRoundTracker(roundTracker + 1);
    setFightState(true);
    if (playerMove.name === "Block" || opponentMove.name === "Block") {
      setWinner("blocked");
    } else {
      console.log("the player move damage is", playerMoveDamage)
      console.log("the opponent move damage is", opponentMoveDamage)

      if (playerMoveDamage > opponentMoveDamage) {
        const damageDealt = playerMoveDamage - opponentMove.defense;
        setOpponentHealth(opponentHealth - damageDealt);
        setPlayerSpecialMoveCharge(
          playerSpecialMoveCharge + (playerMoveDamage - opponentMove.defense)
        );
        setDamageDealt(damageDealt);
        setWinner("player");
        const hitAudio = new Audio(
          `./audio/character_audio/${opponentCharacter.file_name}/${opponentCharacter.file_name}_hit.mp3`
        );
        hitAudio.play();
      } else if (playerMoveDamage == opponentMoveDamage) {
        console.log("The damages were equal!")
      
      } else {
        const damageDealt = opponentMoveDamage - playerMove.defense;
        setPlayerHealth(playerHealth - damageDealt);
        setOpponentSpecialMoveCharge(
          opponentSpecialMoveCharge +
            (opponentMoveDamage - playerMove.defense)
        );
        setDamageDealt(damageDealt);
        setWinner("opponent");
        const hitAudio = new Audio(
          `./audio/character_audio/${selectedCharacter.file_name}/${selectedCharacter.file_name}_hit.mp3`
        );
        hitAudio.play();
      }
    }

      if (opponentMove.name === opponentCharacter.moves.specialMove.name) {
        setOpponentSpecialMoveCharge(0);
      }
      if (playerMove.name === selectedCharacter.moves.specialMove.name) {
        setPlayerSpecialMoveCharge(0);
      }
  };

  const reset = () => {
    setFightState(false);
    setSelectedArena(arenas[0]);
    setSelectedCharacter(characters[0]);
    setOpponentHealth(100);
    setPlayerHealth(100);
    setRoundTracker(0);
    setResult("null");
    setPlayerSpecialMoveCharge(0);
    setOpponentSpecialMoveCharge(0);
    setDamageDealt(0);
    setWinner(null);
    location.reload();
  };

  return (
    <div>
      {characters.length > 0 && (
        <div id="background" className={selectedArena.file_name}>
          {fightState ? (
            <FightStateActive
              result={result}
              reset={reset}
              roundTracker={roundTracker}
              selectedCharacter={selectedCharacter}
              opponentCharacter={opponentCharacter}
              setPlayerMove={setPlayerMove}
              playerSpecialMoveCharge={playerSpecialMoveCharge}
              opponentSpecialMoveCharge={opponentSpecialMoveCharge}
              compareMoves={compareMoves}
              fightState={fightState}
              playerMove={playerMove}
              playerHealth={playerHealth}
              opponentHealth={opponentHealth}
              opponentMove={opponentMove}
              damageDealt={damageDealt}
              winner={winner}
              socket={socket}
              room={room}
              setOpponentMove={setOpponentMove}
              setWinner={setWinner}
              setOpponentMoveDamage={setOpponentMoveDamage}
              setPlayerMoveDamage={setPlayerMoveDamage}
            />
          ) : (
            <FightStateInactive
              arenas={arenas}
              selectedArena={selectedArena}
              setSelectedArena={setSelectedArena}
              setFightState={setFightState}
              setSelectedCharacter={setSelectedCharacter}
              characters={characters}
              opponentCharacter={opponentCharacter}
              selectedCharacter={selectedCharacter}
              joinRoom={joinRoom}
              setRoom={setRoom}
              room={room}
              socket={socket}
              setOpponentCharacter={setOpponentCharacter}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
