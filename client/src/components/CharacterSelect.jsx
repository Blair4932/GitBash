const CharacterSelect = ({ characters, setSelectedCharacter }) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          <button
            onClick={() => {
              setSelectedCharacter(character);
            }}
          >
            {character.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CharacterSelect;
