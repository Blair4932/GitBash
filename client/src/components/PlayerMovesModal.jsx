const PlayerMovesModal = ({ selectedCharacter, setPlayerMove }) => {
  return (
    <div className="select-move">
      <p>Pick your move: </p>
      <input
        type="radio"
        name="move"
        id="punch"
        onClick={() => {
          setPlayerMove(selectedCharacter.moves.punch);
        }}
      />
      <label htmlFor="punch">{selectedCharacter.moves.punch.name}</label>
      <input
        type="radio"
        name="move"
        id="kick"
        onClick={() => {
          setPlayerMove(selectedCharacter.moves.kick);
        }}
      />
      <label htmlFor="kick">{selectedCharacter.moves.kick.name}</label>
      <input
        type="radio"
        name="move"
        id="block"
        onClick={() => {
          setPlayerMove(selectedCharacter.moves.block);
        }}
      />
      {/* <label htmlFor="block">{selectedCharacter.moves.block.name}</label>
      <input
        type="radio"
        name="move"
        id="specialMove"
        onClick={() => {
          setPlayerMove(selectedCharacter.moves.specialMove);
        }}
      /> */}
      <label htmlFor="specialMove">
        {selectedCharacter.moves.specialMove.name}
      </label>
    </div>
  );
};

export default PlayerMovesModal;
