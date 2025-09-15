import { useState, useEffect } from "react";

export const SearchBar = ({placeHolderText = "Buscar", buttonText, onQuery}:Props) => {
  
  const [query, setQuery] = useState('');

  useEffect(() => {
  // Se crea un temporizador que esperará 700ms para ejecutarse.
  // Guardamos su ID para poder cancelarlo si es necesario.
  const timeoutId = setTimeout(() => {
    // Una vez que pasan los 700ms, llamamos a la función para realizar la búsqueda.
    onQuery(query);
  }, 700);

  // --- FUNCIÓN DE LIMPIEZA (CLEANUP) ---
  // Esto se ejecuta ANTES de que el efecto se active de nuevo si el efecto se activa antes del tiempo
  // o si el componente se destruye.
  return () => {
    // Se cancela el temporizador anterior. Esta es la clave del "debounce".
    // Así evitamos múltiples llamadas a la API mientras el usuario escribe.
    clearTimeout(timeoutId);
  }

}, [query, onQuery]); // El efecto depende de 'query' y 'onQuery'. Se volverá a ejecutar si alguno de los dos cambia.
  

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
     if(event.key === 'Enter'){
              handleSearch();
      }
  }

  return (
    <div className="search-container">
        <input 
          type="text" 
          placeholder={placeHolderText}
          value={query}
          onChange={ (event)=> setQuery(event.target.value) }
          onKeyDown={handleKeyDown}        
        />

        <button onClick={handleSearch}>
          {buttonText}
        </button>
    </div>
  )
}

interface Props{
    placeHolderText?: string;
    buttonText?: string;
    onQuery: (query: string) => void;
}