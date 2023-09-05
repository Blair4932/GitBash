import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = () => {
    fetch("http://localhost:9000/api/characters/")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
  console.log(characters);
  return <></>;
}

export default App;
