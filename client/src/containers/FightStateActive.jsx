import CharacterImage from "../components/CharacterImage";
import PlayerMovesModal from "../components/PlayerMovesModal";
import HealthBar from "../components/HealthBar";
import MovesInformation from "../components/MovesInformation";
import { useState, useEffect } from "react";

const FightStateActive = ({
  result,
  reset,
  roundTracker,
  selectedCharacter,
  opponentCharacter,
  setPlayerMove,
  playerSpecialMoveCharge,
  opponentSpecialMoveCharge,
  compareMoves,
  fightState,
  playerMove,
  playerHealth,
  opponentHealth,
  opponentMove,
  damageDealt,
  winner,
  socket,
  room,
  setOpponentMove,
  setWinner,
  setOpponentMoveDamage,
  setPlayerMoveDamage,
}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const sendFightInfo = async () => {
    if (playerMove) {
      const playerMoveDamage =
        Math.floor(
          Math.random() * (playerMove.damageMax - playerMove.damageMin + 1)
        ) + playerMove.damageMin;

      setPlayerMoveDamage(playerMoveDamage)

      const moveData = {
        room: room,
        playerMove: playerMove,
        damage: playerMoveDamage,
      };
      await socket.emit("send_move", moveData);
    }
  };

  useEffect(() => {
    socket.on("receive_move", (moveData) => {
      setOpponentMove(moveData.playerMove);
      setOpponentMoveDamage(moveData.damage)
    });
  }, [socket]);

  useEffect(() => {
    if (opponentMove && playerMove) {
      console.log("This is the opponent's move from server", opponentMove);
      compareMoves();

      setTimeout(() => {
        setWinner("");
        setPlayerMove("");
        setOpponentMove("");
        setModalVisible(true);
      }, 1000);
    }
  }, [opponentMove, modalVisible]);

  console.log(
    "This is the opponent's move from server but outside if statement",
    opponentMove
  );

  const playFight = async () => {
    setModalVisible(false);
    console.log("Comparing moves...");
  };

  return (
    <>
      <HealthBar
        playerHealth={playerHealth}
        opponentHealth={opponentHealth}
        roundTracker={roundTracker}
        result={result}
        opponentCharacter={opponentCharacter}
      />
      <CharacterImage
        selectedCharacter={selectedCharacter}
        opponentCharacter={opponentCharacter}
        fightState={fightState}
      />
      {modalVisible ? (
        <PlayerMovesModal
          selectedCharacter={selectedCharacter}
          setPlayerMove={setPlayerMove}
          playerSpecialMoveCharge={playerSpecialMoveCharge}
          opponentSpecialMoveCharge={opponentSpecialMoveCharge}
          compareMoves={compareMoves}
          fightState={fightState}
          playerMove={playerMove}
          playFight={playFight}
          result={result}
          reset={reset}
          sendFightInfo={sendFightInfo}
        />
      ) : (
        <div className="container">
          <MovesInformation
            playerMove={playerMove}
            opponentMove={opponentMove}
            opponentCharacter={opponentCharacter}
            playerCharacter={selectedCharacter}
            damageDealt={damageDealt}
            winner={winner}
          />
        </div>
      )}
    </>
  );
};

export default FightStateActive;
