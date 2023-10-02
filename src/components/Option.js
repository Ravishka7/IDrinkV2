import React from 'react'

export default function Option( {changeBoard, boardOption} ) {

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
    ]

  return (
    
    <div className='p-5 justify-between flex gap-2'>

        {options.map(({value,text},index)=>{

            const isCurrentOption = boardOption === value;

            return (
                <button className='bg-blue-500 w-full py-5 rounded-md 
                text-white disabled:bg-gray-900' 
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
