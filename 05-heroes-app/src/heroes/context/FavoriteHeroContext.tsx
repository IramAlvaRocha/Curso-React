import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
    //state
    favorites: Hero[]
    favoriteCount: number;

    //methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favorites')
    return favorites ? JSON.parse(favorites) : [];
}
export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {


    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

    const toggleFavorite = (hero: Hero) => {

        const heroExist = favorites.find(h => h.id === hero.id);

        //Si el heroe ya existe lo eliminamos del array de favoritos
        if (heroExist) {
            setFavorites(favorites.filter(h => h.id !== hero.id))
            return;
        }

        //Si no existe lo agregamos al array de favoritos
        setFavorites([...favorites, hero]);

    }

    const isFavorite = (hero: Hero) => {
        return favorites.some(h => h.id === hero.id)
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])


    return (
        <FavoriteHeroContext value={{
            //State
            favoriteCount: favorites.length,
            favorites: favorites,
            //Methods
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite
        }}>
            {children}
        </FavoriteHeroContext>
    )
}