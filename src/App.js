import './App.css';
import Navigational from "./components/Navigational";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import ProductPage from "./pages/ProductPage";
import customAxios from "./axios/customAxios";
import CartModal from "./components/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)


  const getProducts = async () => {
    await customAxios.get('items/getAll').then((response) => {
      if (!response) {
        alert('No items')
      }
      setProducts([...response.data])
    }).catch(e => {
      if (e) {
        alert('Something went wrong! ' + e)
      }
    })
  }

  useEffect(() => {
    getProducts()
  }, [])


  const handleAddToCart = (obj_id, count) => {
    setCart([...cart, {obj_id: count}])
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

  const handleModal = (boo) => {
    setShowModal(boo)
  }


  return (
    <div className="App">
      <Navigational cart={cart} setShowModal={handleModal}/>
      <CartModal showModal={showModal} setShowModal={handleModal}/>
        <Routes>
          <Route path='/' element={<Home products={products} cart={cart} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>}/>
          <Route path='/product/:id' element={<ProductPage addToCart={handleAddToCart}/>}>
          </Route>
        </Routes>
    </div>
  )
}

export default App;
