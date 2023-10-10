import React, { useState } from 'react'
import Board from './components/Board'
import Drink from './components/Drink'
import Welcome from './components/Welcome';


export default function App() {

  const [isDrink,setIsDrink] = useState();
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="bg-slate-800 min-h-screen w-full flex justify-center items-center" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/drink7.jpg'})`,
  }}>
      <div className="w-full">
        {gameStarted ? (
          isDrink ? (
            <Drink setIsDrink={setIsDrink} />
          ) : (
            <Board setIsDrink={setIsDrink} />
          )
        ) : (
          <Welcome onStart={startGame} />
        )}
      </div>
    </div>
  );
}
