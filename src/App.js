import './App.css';
import Navigational from "./components/Navigational";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {useState} from "react";

function App() {
  const [cart, setCart] = useState([]);


  const handleAddToCart = (obj) => {
    setCart([...cart, obj])
  }

  const handleRemoveFromCart = (obj_id) => {
    let newCart = cart
    for(let i = 0; i < newCart.length; i++){
      if (newCart[i]._id === obj_id){
        newCart.splice(i, 1)
      }
    }
    setCart([...newCart])
  }


  return (
    <div className="App">
      <Navigational cart={cart}/>
        <Routes>
          <Route path='/' element={<Home cart={cart} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>}/>
        </Routes>
    </div>
  )
}

export default App;
