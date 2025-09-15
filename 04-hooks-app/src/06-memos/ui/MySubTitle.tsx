import React from "react";

interface Props {
    subtitle: string;
    callMyAPI: () => void;
}

export const MySubTitle = React.memo(({subtitle, callMyAPI}:Props) => {

    console.log('My Subtitle re-render');
    
    console.log('Tarea super pesada');
    

  return (
    <>
    <h6 className="text-2xl font-bold">{subtitle}</h6>
    <button 
        onClick={callMyAPI}
        className="bg-indigo-500 px-2 py-1 rounded-md cursor-pointer">Llamar a función</button>
    </>
  )
});
