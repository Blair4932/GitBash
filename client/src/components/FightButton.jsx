const FightButton = ({ setFightState, selectedArena }) => {
  var fightAudio = new Audio("./audio/arena_audio/fight.mp3");
  var arenaAudio = new Audio(
    `./audio/arena_audio/${selectedArena.file_name}.mp3`
  );

  const handleFightClick = () => {
    setFightState(true);
    fightAudio.play();
    arenaAudio.volume = 0.5;
    arenaAudio.play();
  };

  return (
    <div className="fight-button-container">
      <button
        className="fight-button glow-on-hover metal-button"
        onClick={handleFightClick}
      >
        FIGHT
      </button>
    </div>
  );
};

export default FightButton;
