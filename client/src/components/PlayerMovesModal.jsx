import SpecialMoveBar from "./SpecialMoveBar";

const PlayerMovesModal = ({
  selectedCharacter,
  setPlayerMove,
  playerMove,
  playerSpecialMoveCharge,
  fightState,
  playFight,
  result,
  reset,
  sendFightInfo,
}) => {
  const modalClassName = `select-move-modal ${fightState ? "active" : ""}`;

  return (
    <div className={`modal-overlay ${fightState ? "active" : ""}`}>
      {result === "victory" || result === "loss" ? (
        result === "victory" ? (
          <div className="result-modal">
            <h1>GITBASHED</h1>
            <h3>You Win!</h3>
            <button className="attack-button" onClick={reset}>
              Play again?
            </button>
          </div>
        ) : (
          <div className="result-modal">
            <h1>GITBASHED</h1>
            <h3>You Lose!</h3>
            <button className="attack-button" onClick={reset}>
              Play again?
            </button>
          </div>
        )
      ) : (
        <div className={modalClassName}>
          <h1 className="modal-hero-text">Pick your move: </h1>
          <div className="move-inputs">
            <input
              className="modal-input glow-on-hover"
              type="radio"
              name="move"
              id="punch"
              checked={playerMove.name === "Punch"}
              onClick={() => {
                setPlayerMove(selectedCharacter.moves.punch);
              }}
            />
            <label className="modal-text" htmlFor="punch">
              {selectedCharacter.moves.punch.name}
            </label>
            <input
              className="modal-input"
              type="radio"
              name="move"
              id="kick"
              checked={playerMove.name === "Kick"}
              onClick={() => {
                setPlayerMove(selectedCharacter.moves.kick);
              }}
            />
            <label className="modal-text" htmlFor="kick">
              {selectedCharacter.moves.kick.name}
            </label>
            <input
              className="modal-input"
              type="radio"
              name="move"
              id="block"
              checked={playerMove.name === "Block"}
              onClick={() => {
                setPlayerMove(selectedCharacter.moves.block);
              }}
            />
            <label className="modal-text" htmlFor="block">
              {selectedCharacter.moves.block.name}
            </label>
            {playerSpecialMoveCharge >= 50 ? (
              <div>
                <h3>Special Move Ready!</h3>
                <input
                  className="modal-input"
                  type="radio"
                  name="move"
                  id="specialMove"
                  checked={
                    playerMove.name === selectedCharacter.moves.specialMove.name
                  }
                  onClick={() => {
                    setPlayerMove(selectedCharacter.moves.specialMove);
                  }}
                />
                <label className="modal-text" htmlFor="specialMove">
                  {selectedCharacter.moves.specialMove.name}
                </label>
              </div>
            ) : (
              <div className="special-move--bar">
                <p>Charging special move: </p>
                <SpecialMoveBar
                  playerSpecialMoveCharge={playerSpecialMoveCharge}
                />
              </div>
            )}
          </div>
          {playerMove && (
            <div className="move-stats">
              <h3>{playerMove.name} stats: </h3>
              <p>
                Damage: {playerMove.damageMin} - {playerMove.damageMax}
              </p>
              <p>Guard: {playerMove.defense}</p>
            </div>
          )}
          <button
            className="attack-button"
            onClick={() => {
              if (playerMove) {
                sendFightInfo();
                playFight();
              }
            }}
          >
            ATTACK
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayerMovesModal;
