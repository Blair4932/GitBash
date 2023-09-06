const ArenaImage = ({ selectedArena }) => {
  return (
    <div>
      <img src={`./images/arenas/${selectedArena.file_name}.gif`} />
    </div>
  );
};

export default ArenaImage;
