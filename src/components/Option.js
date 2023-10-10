import React from 'react'

export default function Option( {changeBoard, boardOption, setScore} ) {

    const options = [
        {
            value:"4",

            text:"4 Mugs",
        },
        {
            value:"9",

            text:"9 Mugs",
        },
        {
            value:"16",
            
            text:"16 Mugs",
        }
    ];
    // eslint-disable-next-line
    const handleBoardChange = (value) => {
        setScore(0);
        changeBoard(value);
    }

  return (
    
    <div className='p-5 justify-between flex gap-2'>

        {options.map(({value,text},index)=>{

            const isCurrentOption = boardOption === value;

            return (
                <button className='focus:outline-none text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-6 py-3 w-80 mr-2 mb-2 dark:focus:ring-white' 
                onClick={()=>changeBoard(value)}
                key={index}
                disabled={isCurrentOption}
                >
                    {text}
                </button>
            ); 

        })}
        
    </div>
  )
}
