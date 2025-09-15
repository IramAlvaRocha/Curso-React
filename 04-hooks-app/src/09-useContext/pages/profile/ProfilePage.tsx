import { UserContext } from "@/09-useContext/context/UserContextProvider"
import { Button } from "@/components/ui/button"
import { use } from "react"

export const ProfilePage = () => {

  const { user } = use(UserContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />
      <pre className="my-5 w-[80%] overflow-x-auto">
        {
          JSON.stringify(user, null, 2)
        }
      </pre>
      <Button variant={'destructive'}>
        Cerrar sesión
      </Button>
    </div>
  )
}
