import './App.css';
import Navigational from "./components/Navigational";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import ProductPage from "./pages/ProductPage";
import customAxios from "./axios/customAxios";
import CartModal from "./components/CartModal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import {useDispatch} from "react-redux";
import {addToCart} from "./store/cart/cartSlice";
import Cart from "./pages/Cart";
import ShippingAndCart from "./pages/ShippingAndCart";

function App() {
  //const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

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

  const handleModal = (boo) => {
    setShowModal(boo)
  }

  const handleAddToCart = (product, qty) => {
    let newProduct = {...product};
    newProduct['qty'] = qty
    dispatch(addToCart(newProduct))
  }

  return (
    <div className="App">
      <Navigational setShowModal={handleModal}/>
      <CartModal showModal={showModal} setShowModal={handleModal}/>
        <Routes>
          <Route path='/' element={<Home products={products} />}/>
          <Route path='/product/:id' element={<ProductPage addToCart={handleAddToCart}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/testCart' element={<ShippingAndCart />} />
        </Routes>
    </div>
  )
}

export default App;
