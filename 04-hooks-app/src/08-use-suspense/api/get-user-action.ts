export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
    
    console.log("Función llamada");
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Función resuelvió");

  return {
    id: id,
    name: "Iram Rocha",
    location: "Monterrey, Nuevo León",
    role: "Desarrollador Fullstack",
  };
};
