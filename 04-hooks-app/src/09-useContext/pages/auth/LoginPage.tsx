import { UserContext } from "@/09-useContext/context/UserContextProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const {login} = useContext(UserContext)

  const [userId, setUserId] = useState("")

  const  navigation = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const result = login(+userId);
    
    if(!result) {
      toast.error("Usuario no encontrado");
    }
    
    navigation("/profile")
  }



  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">
        Iniciar Sesión
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <Input type="number" placeholder="ID del usuario" value={userId}
        onChange={ e => setUserId(e.target.value)}/>
        <Button type="submit">Login</Button>
        <Link to='/about'>
          <Button variant="ghost" className=""> Volver a la página principal </Button>
        </Link>
      </form>
    </div>
  )
}
