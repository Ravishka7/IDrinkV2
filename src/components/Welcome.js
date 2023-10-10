import React, { useState } from 'react'


const Notification = window.Notification || window.mozNotification || window.webkitNotification;

export default function Welcome({onStart}) {

    const showNotification = () => {
        if ( Notification) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    // eslint-disable-next-line
                    const notification = new Notification('Drink Up', {
                        body: 'Find the mug and drink up!',
                    });
                }
            });
        }
    };
// eslint-disable-next-line
    const [gameStarted, setGameStarted] = useState(false);

    const handleStartClick = () => {
        setGameStarted(true);
        onStart();
        showNotification();
    };

    return (
        <div className="bg-slate-800 min-h-screen flex flex-col justify-center items-center"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/drink4.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Drinking Game</h1>
          <div className="rounded-lg p-8 shadow-md flex flex-col items-center">
            <p className="text-lg text-center text-white mb-4">Click Start Game to begin</p>
            <button
              className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
              onClick={handleStartClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 3C10.1046 3 11 3.89543 11 5C11 5.11469 10.9904 5.22639 10.9723 5.33454L12.9447 5.66546C12.9812 5.4484 13 5.22602 13 5C13 4.7625 12.9793 4.52984 12.9396 4.30371C13.2472 4.11088 13.6103 4 14 4C15.1046 4 16 4.89543 16 6C16 6.36443 15.903 6.70571 15.7327 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5C5.20008 5 5.38362 5.05773 5.53851 5.15709C5.81193 5.33249 6.15353 5.36415 6.45453 5.24199C6.75554 5.11982 6.97845 4.85905 7.05229 4.5427C7.25876 3.65813 8.05374 3 9 3ZM10.5164 1.29745C10.0489 1.10575 9.53693 1 9 1C7.50087 1 6.19573 1.82409 5.51068 3.04344C5.34453 3.01488 5.17387 3 5 3C3.34315 3 2 4.34315 2 6C2 6.8885 2.38625 7.68679 3 8.23611V20C3 21.1046 3.89543 22 5 22H15C16.1046 22 17 21.1046 17 20H19C20.1046 20 21 19.1046 21 18V11C21 9.89543 20.1046 9 19 9H17V8.64575C17.6215 7.94132 18 7.01438 18 6C18 3.79086 16.2091 2 14 2C13.3143 2 12.6684 2.17301 12.1042 2.47716C11.6851 1.96201 11.1402 1.5532 10.5164 1.29745ZM17 11H19V18H17V11ZM15 9V10V19V20H5V9H15ZM7 11V18H9V11H7ZM13 11V18H11V11H13Z"></path>
              </svg>
              Start Game
            </button>
    
            <button
              className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7ZM13 11V18H11V11H13Z"></path>
              </svg>
              How toPlay
            </button>
          </div>
        </div>
      );
    }
