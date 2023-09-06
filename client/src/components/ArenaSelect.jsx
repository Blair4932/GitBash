const ArenaSelect = ({ arenas, setSelectedArena }) => {
  return (
    <ul className="ArenaList">
      {arenas.map((arena) => (
        <li key={arena._id}>
          <button
            className={`arenaButton ${arena.file_name}`}
            onClick={() => {
              setSelectedArena(arena);
              console.log("This is an arena", arena);
            }}
          >
            {arena.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ArenaSelect;
