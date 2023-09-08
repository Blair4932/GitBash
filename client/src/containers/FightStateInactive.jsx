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
			<FightButton
				setFightState={setFightState}
				selectedArena={selectedArena}
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
			</div>
		</>
	);
};

export default FightStateInactive;
