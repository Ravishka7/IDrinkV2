import React, { useEffect, useState } from 'react'
import {GiBeerStein} from 'react-icons/gi'
import {FiRotateCcw} from 'react-icons/fi'

import drinkSound from '../assets/drinkSound.wav'

export default function Drink({setIsDrink}) {

    const [animate,setAnimate] = useState(false);
    const audioRef = React.useRef(null);

    useEffect(() => {

        setAnimate(true);

        audioRef.current.play();

        if ('vibrate' in navigator) {
            navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
        }

    },[])

  return (

    <div>

    <div className='grid place-content-center p-5'>
        <FiRotateCcw 
            className='text-4xl text-white' 
            onClick={()=>setIsDrink(false)} 
        />
    </div>

    <div className='h-screen w-full grid place-content-center'>
        <GiBeerStein className='text-5xl text-yellow-500 transition-all 
        duration-1000' 
        style={{
            transform:`scale(${animate ? 5 : 1})`,
        }} />
    </div>

    <audio ref={audioRef}>
        <source src={drinkSound} type="audio/wav" />
      </audio>

    </div>

  )
}
