import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

//? Se le debe de agregar al final del nombre 'Provider' ya que es el que va a 
//? proveer el contexto a toda mi aplicacion

//! El ContextProvider no es más que un High Order Component (HOC) esto quiere decir 
//! es un componente que recibe un hijo como props

type AuthStatus = 'cheking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus;
    user: User | null;
    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('cheking');
    const [user, setUser] = useState<User | null>(null);
    
    const handleLogin = (userId: number) => {
        
        const user = users.find(user => user.id === userId);

        if(!user){
            console.log("User not found");
            setUser(null);
            setAuthStatus("not-authenticated")
            return false;
        }

        setUser(user);
        setAuthStatus("authenticated")        
        return true;
    }

    const handleLogout = () => {
        setUser(null);
        setAuthStatus("not-authenticated")
        console.log("Logout")
        
    }


    return <UserContext value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>
        {children}
    </UserContext>
}
