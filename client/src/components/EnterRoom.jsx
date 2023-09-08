const EnterRoom = ({ room, setRoom, joinRoom }) => {
  return (
    <div className="room_input">
      <label htmlFor="room_name">Enter Room Name</label>
      <input
        value={room}
        type="text"
        name="room_name"
        onChange={(e) => {
          setRoom(e.target.value);
          console.log("This is room:", room);
          console.log("This is e", e.target.value);
        }}
      />
      <button onClick={() => joinRoom()}>Join Room</button>
    </div>
  );
};

export default EnterRoom;
