import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  const updatePrice = () => {
    let sum = 0; 
    cart.forEach( i=> sum += i.price);
    setPrice(sum);
  }

  useEffect( () => {
    updatePrice();
  }, [cart])


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        //<p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem item={item} cart={cart} updateCart={setCart}/>
      ))}


      <div>
        <h2>Cart</h2>
        {cart.map(e => <p>{e.name} {e.price}</p>)}
        <h3>Total Price = ${totalPrice}</h3>
      </div>
    </div>
  );
}

export default App;
