import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"

export const MemoHook = () => {
  
    const [title, setTitle] = useState("Hola")
    const [subTitle, setSubTitle] = useState("Mundo")

    const handleMyAPI = useCallback( () => {
        console.log('Llamar a mi API - ', subTitle);
    }, [subTitle]);
  
    return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl text-white font-bold ">MemoApp</h1>

        <MyTitle title={title}/>
        <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPI}/>
        
        <button 
        onClick={()=>{setTitle('Hello, ' + new Date().getTime())}}
        className="bg-blue-500 px-4 py-2 text-ehite rounded-md cursor-pointer">
            Cambiar título
        </button>

        <button 
        onClick={()=>{setSubTitle('World')}}
        className="bg-blue-500 px-4 py-2 text-ehite rounded-md cursor-pointer">
            Cambiar subtítulo
        </button>
    </div>
  )
}
