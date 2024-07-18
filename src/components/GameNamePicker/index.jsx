import { useState } from "react";
import "./index.css";

function GameNamePicker() {
  const games = ["Fifa", "Counter", "PUBG", "Free Fire", "Parcking"];

  const [selectedGame, setSelectedGame] = useState("");

  const pickRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
  };

  return (
    <div>
      <h2>Game Name Picker</h2>
      <p>
        {selectedGame
          ? `Oyin nomi: ${selectedGame}`
          : "Saralash tugmasini ezing"}
      </p>
      <button onClick={pickRandomGame}>Saralash</button>
    </div>
  );
}

export default GameNamePicker;
