import ArenaSelect from "../components/ArenaSelect";
import FightButton from "../components/FightButton";
import CharacterImage from "../components/CharacterImage";
import CharacterSelect from "../components/CharacterSelect";
import joinRoom from "../App.jsx";
import EnterRoom from "../components/EnterRoom";
import setRoom from "../App.jsx";

const FightStateInactive = ({
  arenas,
  setSelectedArena,
  selectedArena,
  setFightState,
  setSelectedCharacter,
  characters,
  opponentCharacter,
  selectedCharacter,
  joinRoom,
  setRoom,
  room,
}) => {
  return (
    <>
      <ArenaSelect
        arenas={arenas}
        setSelectedArena={setSelectedArena}
        selectedArena={selectedArena}
      />
      <FightButton
        setFightState={setFightState}
        selectedArena={selectedArena}
        joinRoom={joinRoom}
      />
      <div className="container--character-select-icons">
        <CharacterImage
          selectedCharacter={selectedCharacter}
          opponentCharacter={opponentCharacter}
        />
        <CharacterSelect
          characters={characters}
          setSelectedCharacter={setSelectedCharacter}
        />
        <EnterRoom setRoom={setRoom} joinRoom={joinRoom} room={room} />
      </div>
    </>
  );
};

export default FightStateInactive;
