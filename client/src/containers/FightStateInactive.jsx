import ArenaSelect from "../components/ArenaSelect";
import FightButton from "../components/FightButton";
import CharacterImage from "../components/CharacterImage";
import CharacterSelect from "../components/CharacterSelect";
import EnterRoom from "../components/EnterRoom";
import { useEffect } from 'react';


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
  socket,
  setOpponentCharacter,
}) => {

  const sendCharacterData = () => {

      const characterData = {
        room: room,
        character: selectedCharacter,
      };
      socket.emit("send_character", characterData);
    };

  useEffect(() => {
    socket.on("receive_character", (characterData) => {
      setOpponentCharacter(characterData.character)
    });
  }, [socket]);

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
        sendCharacterData={sendCharacterData}
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
