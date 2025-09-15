import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;


export const TrafficLightWithEffect = () => {

  const [ligth, setLigth] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5)

  //Countdown effect
  useEffect(() => {
    if (countdown === 0) return;
    
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }

  }, [countdown])

  //Change ligth color effect
  useEffect(() => {
    
    if(countdown > 0 ) return;

    setCountdown(5);

    if(ligth === 'red') { 
      setLigth('green')
      return;
    }
    
    if(ligth === 'yellow') { 
      setLigth('red')
      return;
    }
    
    if(ligth === 'green') { 
      setLigth('yellow')
      return;
    }



  }, [countdown])
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-bold">Semáforo con useEffect</h1>
        <h2 className="text-white text-xl font-bold">Countdown {countdown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
          style={{width: `${(countdown/5) * 100}%`}}
          ></div>
        </div>

        <div className={`w-32 h-32 ${ligth === 'red' ? colors[ligth] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ligth === 'yellow' ? colors[ligth] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ligth === 'green' ? colors[ligth] : 'bg-gray-500'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
      </div>
    </div>
  );
};