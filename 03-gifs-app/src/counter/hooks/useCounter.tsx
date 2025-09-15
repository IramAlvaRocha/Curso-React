import { useState } from "react";

export const useCounter = ( initialValue: number = 10 ) => {

  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter+1)
  }

  const handleSubstract = () => {
    setCounter(prevValue => prevValue - 1)
  }

  const handleReset = () => {
    setCounter(initialValue)
  }

  return {
    //Properties - Values
    counter,
    // Methods Actions
    handleAdd,
    handleSubstract, 
    handleReset
  }
}
