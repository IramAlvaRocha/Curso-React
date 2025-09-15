import type { CSSProperties } from "react";

const firstName = 'Fernando';
const lastName = 'Herrera';

const favoriteGames = ["Elden Ring", "Hades", "Celeste"];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    city: "Canadá",
}

const myStyles: CSSProperties={
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 10,
    marginTop: 30
}

export const MyAwesomeApp  = () => {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-test"> {firstName} </h1>
      <h3> {lastName} </h3>

      <p>{2+2}</p>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  )
}
