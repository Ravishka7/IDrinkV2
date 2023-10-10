import React from 'react';
import { GiBeerStein } from 'react-icons/gi';
import { FiRotateCcw } from 'react-icons/fi';
import drinkSound from '../assets/drinkSound.wav';

export default function Drink({ setIsDrink, resetScore, score }) {
  const [animate, setAnimate] = React.useState(false);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    setAnimate(true);
    audioRef.current.play();
  }, []);
  
  const vibratePhhone = () => {
    if ('vibrate' in navigator){
      navigator.vibrate([200]);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/drink7.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      
      <div className='grid place-content-center p-5'>
        <FiRotateCcw
          className='text-4xl text-white'
          onClick={() => {
            setIsDrink(false);
            vibratePhhone();
            resetScore();
          }}
        />
      </div>
      <p className='text-white text-4xl mt-4 text-center'>Number of Tries: {score}</p>

      <div className='h-screen w-full grid place-content-center'>
        <GiBeerStein
          className='text-5xl text-yellow-500 transition-all duration-1000'
          style={{
            transform: `scale(${animate ? 5 : 1})`,
          }}
        />
      </div>
      
      <audio ref={audioRef}>
        <source src={drinkSound} type='audio/wav' />
      </audio>
    </div>
  );
}
