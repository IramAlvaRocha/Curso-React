import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 3 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "PlayStation 5 Pro", quantity: 1 },
  { productName: "Super Mario Maker 3", quantity: 4 },
];

export default function FirstSteps() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemsInCart.map( ({productName, quantity}) => (
        <ItemCounter 
          key={productName}
          name={productName} 
          quantity={quantity}
          />
      ))}

      {/* <ItemCounter name="Nintendo Switch 2" quantity={3}/>
      <ItemCounter name="Xbox Series X" quantity={2}/>
      <ItemCounter name="PlayStation 5 Pro" quantity={1}/>
      <ItemCounter name="Super Mario Maker 3" quantity={4}/> */}
    </>
  );
}