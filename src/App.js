import React, { useState } from 'react';
import Board from './components/Board';
import Drink from './components/Drink';
import Welcome from './components/Welcome';
import HowToPlay from './components/HowToPlay';


export default function App() {

  const [isDrink,setIsDrink] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <div className="bg-slate-800 min-h-screen w-full flex justify-center items-center" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/drink7.jpg'})`,
  }}>
    
      <div className="w-full">
        {gameStarted ? (
          isDrink ? (
            <Drink setIsDrink={setIsDrink} setScore={setScore} score={score} resetScore={resetScore} />
          ) : (
            <Board setIsDrink={setIsDrink} setScore={setScore} score={score} />
          )
          ) : (
            showHowToPlay ? (
              <HowToPlay />
            
        ) : (
          <Welcome onStart={startGame} setShowHowToPlay={setShowHowToPlay} />
        )
        )}
        
      </div>
    </div>
  );
}
