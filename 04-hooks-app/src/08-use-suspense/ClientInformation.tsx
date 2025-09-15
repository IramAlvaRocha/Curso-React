import { use, useEffect, type Usable } from "react"
import { getUserAction, type User } from "./api/get-user-action"

// const userPromise = getUserAction(1);

interface Props{
    getUser: Usable<User>
}

export const ClientInformation = ({getUser} : Props) => {

    const user = use(getUser);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-white font-bold text-3xl">{user.name}-#{user.id}</h2>
            <p className="text-white font-thin text-2xl">{user.location}</p>
            <p className="text-white font-thin text-2xl">{user.role}</p>
        </div>
    )
}
