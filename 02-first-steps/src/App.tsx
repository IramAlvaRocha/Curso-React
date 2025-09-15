import type { CSSProperties } from 'react';
import './App.css'

function App() {
  
  const isActive = true;

  const estilos: CSSProperties = {
        backgroundColor: isActive ? 'green' : 'red',
        borderRadius: '10px',
        padding: '10px',
      }
  
  return (
    <>
      <h1>Hola Mundo!</h1>

      <p 
      style={estilos}
      >
        Hola, Iram
      </p>
    </>
  )
}

export default App
