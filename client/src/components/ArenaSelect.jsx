const ArenaSelect = ({ arenas, setSelectedArena }) => {
  return (
    <ul>
      {arenas.map((arena) => (
        <li key={arena._id}>
          <button
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
