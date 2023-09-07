const ArenaSelect = ({ arenas, setSelectedArena }) => {
  return (
    <ul className="ArenaList">
      {arenas.map((arena) => (
        <li key={arena._id}>
          <button
            className={`arenaButton ${arena.file_name}`}
            onClick={() => {
              setSelectedArena(arena);
            }}
          >
            <p className="arenaButtonText">{arena.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ArenaSelect;
