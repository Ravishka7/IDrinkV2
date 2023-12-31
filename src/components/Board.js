import React, { useRef, useState } from 'react'
import {GiBeerStein} from 'react-icons/gi'
import generateBoard from '../utils/generateBoard'
import Option from './Option'

import mugSound from '../assets/mugSound.wav'


const updatedBoardStyle = (value) => {

    if(value === 16){

        return "grid-cols-4";

    }else if(value === 9){

        return "grid-cols-3";

    }else if(value === 4){

        return "grid-cols-2";

    }

    return "grid-cols-4";

}



export default function Board({setIsDrink, setScore, score}) {

    const audioRef = useRef(null);

    const boardOption = parseInt( window.localStorage.getItem("boardOption")) || 16;

    const [board,setBoard] = useState(generateBoard(parseInt(boardOption)));

    const [boardStyle,setBoardStyle] = useState(updatedBoardStyle(boardOption));

    const handleSelect = (index) => {

            if(board[index] === 0 ){

            const updatedBoard = [...board];

            updatedBoard[index] = -1;

            setBoard(updatedBoard);

            audioRef.current.play();

            

            setScore(score + 1);
            

        }else{
            
            setIsDrink(true);

        }
// eslint-disable-next-line
        const handleSelect = (index) => {
            if (board[index] === 0) {
              // Mug was clicked
              const updatedBoard = [...board];
              updatedBoard[index] = -1;
              setBoard(updatedBoard);
              audioRef.current.play();
              if ('vibrate' in navigator) {
                navigator.vibrate([2000]);
              }
              // Increment the score
              setScore(score + 1);
            } else {
              setIsDrink(true);
            }
          };


    };

    

    const changeBoard = (value) => {

        setBoard(generateBoard(value));

        setBoardStyle(updatedBoardStyle(value));

        setScore(0);

        

        

        window.localStorage.setItem("boardOption", value.toString());

    };

    

  return (

    <div>
        <p className='text-white text-4xl mt-4 text-center'>Number of Tries: {score}</p>

        <Option changeBoard={changeBoard} boardOption={boardOption} />

        <audio ref={audioRef}>
        <source src={mugSound} type="audio/wav" />
      </audio>
        

    <div className={`grid gap-2 p-5 ${boardStyle}`}>

        {board.map((value,index)=>{

            return ( 
                <div className='w-full h-36 grid place-content-center' 
                key={index} 
                onClick={() => handleSelect(index)}
                >
                {value >=0 &&<GiBeerStein className='text-5xl text-yellow-500' />}
                </div>
            );

        })}

        

      </div>
      </div>
  )
}
