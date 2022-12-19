import React, { useEffect, useState, useRef } from "react";
import "./Game.css";

const Game = () => {
  // Game CountDown Timer
  const GAME_TIMER = 4;
  //initialising state hooks
  const [gameState, setGameState] = useState(false);
  const [words, setWords] = useState("");
  const [timer, setTimer] = useState(GAME_TIMER);
  const [wordCount, setWordCount] = useState("???");
  const inputRef = useRef(null);

  //function for track typed words

  function trackWords(e) {
    setWords(e.target.value);
  }

  // function to count words

  function countWords(word) {
    const words = word;
    const countWord = words.trim().split(" ");
    const finalWords = countWord.filter((word) => word != "");
    return finalWords.length;
  }
  // Game Start Function

  function gameStart() {
    setGameState(true);
    setTimer(GAME_TIMER);
    setWords("");
    setWordCount("???");
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  // Game End Function
  function gameEnd() {
    setGameState(false);
    setWordCount(countWords(words));
  }

  // initialising useEffect

  useEffect(() => {
    if ((gameState == true) & (timer > 0)) {
      const seTime = setTimeout(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer == 0) {
      gameEnd();
    }
  }, [timer, gameState]);

  return (
    <div className="game">
      <h1 className="game-heading">How Fast Do You Type ?</h1>
      <textarea
        className="game-type"
        placeholder="Type Here..."
        value={words}
        onChange={trackWords}
        disabled={!gameState}
        ref={inputRef}
      />

      <h4 className="game-subheading">Time Reamining : {timer} </h4>
      <button className="game-btn" onClick={gameStart} disabled={gameState}>
        Start
      </button>
      <h4 className="game-heading">Words Count : {wordCount}</h4>
    </div>
  );
};

export default Game;
