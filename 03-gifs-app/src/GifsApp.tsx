import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/componentes/CustomHeader"
import { SearchBar } from "./shared/componentes/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    const {previousTerms, handleSearch, handleTermClicked, gifs } = useGifs()

  return (
    <>
    {/* header */}
    <CustomHeader 
        title={"Buscador de gifs"} 
        description={"Descubre y comparte el gif perfecto"}
    />


    {/* Search */}
    <SearchBar 
      placeHolderText={"Buscar un gif..."} 
      buttonText={"Buscar"}  
      onQuery={handleSearch}
    />

    {/* Busquedas previas */}
    <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>
   
    {/* Gifs */}
    <GifList gifs={gifs}/>
    </>
  )
}

