import React from 'react'

export default function HowToPlay({ goBackToWelcome }) {
  return (
    
    <div className="bg-slate-800 min-h-screen flex flex-col justify-center items-center"
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/drink8.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-yellow-600 mb-4 text-center">How to Play</h1>
  <p className="text-lg text-center text-black mb-4">
    Out of the empty mugs out there, there is one full mug.
    <br /> 
    Find the full mug and drink up!
  </p>
  <div className="flex justify-center items-center">
  <button
    className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
    onClick={goBackToWelcome}
    >
    Go Back
  </button>
  </div>
</div>

      

      
    </div>
  )
}
