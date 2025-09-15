import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy stuff started');

    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahí vamos...');
    }

    console.timeEnd('Heavy stuff started');
    
    return `${iterationNumber} iteraciones realizadas}`
}


export const MemoCounter = () => {

    const {counter, increment} = useCounter(40_000);
    const {counter: counter2, increment: increment2} = useCounter(10);

    const myHeavyStuff = useMemo( () => heavyStuff(counter), [counter] );

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-white font-bold text-2xl">
            Memo - useMemo {myHeavyStuff}
        </h1>

        <hr />

        <h4>
            Counter: {counter}
        </h4>
        
        <h4>
            Counter: {counter2}
        </h4>

        <button 
            onClick={increment} 
            className="bg-blue-500 px-2 py-2 text-ehite rounded-md cursor-pointer">
                +1
        </button>

        <button 
            onClick={increment2} 
            className="bg-blue-500 px-2 py-2 text-ehite rounded-md cursor-pointer">
                +1 Counter2
        </button>
    </div>
  )
}
