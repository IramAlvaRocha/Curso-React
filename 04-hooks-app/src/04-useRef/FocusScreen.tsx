import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        inputRef.current?.select()
        console.log(inputRef.current?.value)
    }

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="font-bold text-white text-3xl">Focus Screen</h1>    
        <input 
            ref={inputRef} 
            type="text" 
            className="bg-white text-black px-4 py-2 rounded-md" 
            autoFocus 
        />

        <button
        onClick={handleClick}
            className="bg-blue-700 px-3 py-2 rounded-lg border-none cursor-pointer hover:bg-blue-800">
            Set Focus
        </button>
    </div>
  )
}
