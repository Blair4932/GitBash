import ArenaSelect from '../components/ArenaSelect';
import FightButton from '../components/FightButton';
import CharacterImage from '../components/CharacterImage';
import CharacterSelect from '../components/CharacterSelect';

const FightStateInactive = ({
	arenas,
	setSelectedArena,
	selectedArena,
	setFightState,
	setSelectedCharacter,
	characters,
	opponentCharacter,
	selectedCharacter,
}) => {
	return (
		<>
			<ArenaSelect
				arenas={arenas}
				setSelectedArena={setSelectedArena}
				selectedArena={selectedArena}
			/>
			<FightButton setFightState={setFightState} />
			<CharacterImage
				selectedCharacter={selectedCharacter}
				opponentCharacter={opponentCharacter}
			/>
			<CharacterSelect
				characters={characters}
				setSelectedCharacter={setSelectedCharacter}
			/>
		</>
	);
};

export default FightStateInactive;
